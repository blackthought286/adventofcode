const fs = require('fs');

const ROCK_OPPONENT = "A";
const PAPER_OPPONENT = "B";
const SCISSORS_OPPONENT = "C";

const ROCK_US = "X";
const PAPER_US = "Y";
const SCISSORS_US = "Z";

const game_object = [
    {name: 'Rock', opponent: ROCK_OPPONENT, user: ROCK_US, id: 1},
    {name: 'Paper', opponent: PAPER_OPPONENT, user: PAPER_US, id: 2},
    {name: 'Scissors', opponent: SCISSORS_OPPONENT, user: SCISSORS_US, id: 3}
];

const Rock = 1;
const Paper = 2;
const Scissors = 3;

try {
    const data = fs.readFileSync('rockpaperscissors.txt', 'utf8').toString().split("\n");
    //let x = 0;
    let total_user_points = 0;
    for (let i in data) {
        let game_value = data[i].split(" ");
        const opponent_item = game_object.find((game) => game.opponent === game_value[0]);
        const user_item = game_object.find((game) => game.user === game_value[1]);

        if (opponent_item.name == user_item.name) {
            console.log("this game is a draw");
            total_user_points = total_user_points + 3 + user_item.id;
        }

        if (user_item.id == 1 && opponent_item.id == 3){
            total_user_points = total_user_points + user_item.id + 6;
        }

        if (opponent_item.id == 1 && user_item.id == 3){
            total_user_points = total_user_points + 0 + user_item.id;
        }

        if (user_item.id == 3 && opponent_item.id == 2){
            total_user_points = total_user_points + user_item.id + 6;
        }

        if (opponent_item.id == 3 && user_item.id == 2){
            total_user_points = total_user_points + 0 + user_item.id;
        }

        if (user_item.id == 2 && opponent_item.id == 1){
            total_user_points = total_user_points + user_item.id + 6;
        }

        if (opponent_item.id == 2 && user_item.id == 1){
            total_user_points = total_user_points + 0 + user_item.id;
        }

    }

    console.log(total_user_points);



} catch (e) {
    console.error(e);
}