const fs = require('fs');

try {
    const data = fs.readFileSync('cleaning_assignments.txt', 'utf8').toString().split("\n");

    let total_score = 0;

    for (let i in data) {
        let elf_assignments = data[i].split(/[-,]/);
        const first_elf_assignments = getRangeOfNumber(parseInt(elf_assignments[0]), parseInt(elf_assignments[1]));
        const second_elf_assignments = getRangeOfNumber(parseInt(elf_assignments[2]), parseInt(elf_assignments[3]));

        let found = false;

        for (let x = 0; x < second_elf_assignments.length; x++) {
            found = first_elf_assignments.includes(second_elf_assignments[x]);
            if (found === true) {
                break;
            }
        }

        if (found === true) {
            total_score += 1;
        }

    }
    console.log(total_score);

} catch (e) {
    console.error(e);
}

function getRangeOfNumber(start, end) {
    let temp_arr = [];

    for (let i = start; i <= end; i++) {
        temp_arr.push(i);
    }

    return temp_arr;
}

