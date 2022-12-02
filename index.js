const fs = require('fs');

const ROCK_OPPONENT = "A";
const PAPER_OPPONENT = "B";
const SCISSORS_OPPONENT = "C";

// Changes as sign to lose, win or tie round
const LOSE = "X";
const DRAW = "Y";
const WIN = "Z";

const game_result_needed = [
    {state: "lose", result: LOSE},
    {state: "draw", result: DRAW},
    {state: "win", result: WIN}
];

const game_object = [
    {name: 'Rock', opponent: ROCK_OPPONENT, id: 1},
    {name: 'Paper', opponent: PAPER_OPPONENT, id: 2},
    {name: 'Scissors', opponent: SCISSORS_OPPONENT, id: 3}
];

try {
    const data = fs.readFileSync('rockpaperscissors.txt', 'utf8').toString().split("\n");

    let total_user_points = 0;
    for (let i in data) {
        let game_value = data[i].split(" ");

        // find out if user needs to win, lose, or draw the round
        const winloseordraw = game_result_needed.find((game) => game.result == game_value[1]);

        // check if game needs to be a draw
        if (winloseordraw.result === DRAW) {
            const opponent_item = game_object.find((game) => game.opponent === game_value[0]);
            total_user_points = total_user_points + 3 + opponent_item.id;
        }

        // check if game needs to be a win
        if (winloseordraw.result === WIN) {
            const opponent_item = game_object.find((game) => game.opponent === game_value[0]);
            let item = itemNeeded(opponent_item.name, WIN);
            const item_needed = game_object.find((game) => game.name === item);
            total_user_points = total_user_points + 6 + item_needed.id;
        }

        // check if game needs to be a loss
        if (winloseordraw.result === LOSE) {
            const opponent_item = game_object.find((game) => game.opponent === game_value[0]);
            let item = itemNeeded(opponent_item.name, LOSE);
            const item_needed = game_object.find((game) => game.name === item);
            total_user_points = total_user_points + 0 + item_needed.id;
        }

    }

    console.log(total_user_points);



} catch (e) {
    console.error(e);
}

function itemNeeded(opponent_item, user_game_result) {
    // check to see what item a user needs to win or lose the match
    if (user_game_result === WIN) {
        if (opponent_item === 'Rock') {
            return 'Paper';
        }

        if (opponent_item === 'Scissors') {
            return 'Rock';
        }

        if (opponent_item === 'Paper') {
            return 'Scissors';
        }
    }

    if (user_game_result === LOSE) {
        if (opponent_item === 'Rock') {
            return 'Scissors';
        }

        if (opponent_item === 'Scissors') {
            return 'Paper';
        }

        if (opponent_item === 'Paper') {
            return 'Rock';
        }
    }
}