const fs = require('fs');

let crate1 = ['D', 'M', 'S', 'Z', 'R', 'F', 'W', 'N'];
let crate2 = ['W', 'P', 'Q', 'G', 'S'];
let crate3 = ['W', 'R', 'V', 'Q', 'F', 'N', 'J', 'C'];
let crate4 = ['F', 'Z', 'P', 'C', 'G', 'D', 'L'];
let crate5 = ['T', 'P', 'S'];
let crate6 = ['H', 'D', 'F', 'W', 'R', 'L'];
let crate7 = ['Z', 'N', 'D', 'C'];
let crate8 = ['W', 'N', 'R', 'F', 'V', 'S', 'J', 'Q'];
let crate9 = ['R', 'M', 'S', 'G', 'Z', 'W', 'V'];

let create_container = [
    { id: 1, crate: crate1 },
    { id: 2, crate: crate2 },
    { id: 3, crate: crate3 },
    { id: 4, crate: crate4 },
    { id: 5, crate: crate5 },
    { id: 6, crate: crate6 },
    { id: 7, crate: crate7 },
    { id: 8, crate: crate8 },
    { id: 9, crate: crate9 },
];

let final_arr = [];

try {
    const data = fs.readFileSync('crates.txt', 'utf8').toString().split("\n");

    let total_score = 0;

    for (let i in data) {
        //let elf_assignments = data[i].split(/[-,]/);
        // turn string into numerical values so we can operate. first value in array
        // is how many to move, second value is which stack to move from and third value
        // is what stack to move to
        let elf_assignments = data[i].split(" ").filter(val => !["move", "from", "to"].includes(val));

        let container_move_from = create_container.find((container) => container.id === parseInt(elf_assignments[1]));
        let container_move_to = create_container.find((container) => container.id === parseInt(elf_assignments[2]));
        //console.log(elf_assignments);

        // move the correct stacks and make sure you reverse stacks coming from first stack
        let x = container_move_from.crate.splice(-Math.abs(parseInt(elf_assignments[0])));
        //let b = x.reverse();
        let y = container_move_to.crate.concat(x);
        container_move_to.crate = y;

    }
    for (let i in create_container) {
        let x = create_container[i].crate.pop();
        final_arr.push(x);
    }

    console.log(final_arr);

} catch (e) {
    console.error(e);
}

