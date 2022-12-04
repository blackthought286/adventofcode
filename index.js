const fs = require('fs');


try {
    const data = fs.readFileSync('cleaning_assignments.txt', 'utf8').toString().split("\n");

    let total_score = 0;

    for (let i in data) {
        let elf_assignments = data[i].split(/[-,]/);
        const first_elf_assignments = getRangeOfNumber(parseInt(elf_assignments[0]), parseInt(elf_assignments[1]));
        const second_elf_assignments = getRangeOfNumber(parseInt(elf_assignments[2]), parseInt(elf_assignments[3]));

        let found_total = 0;

        if (first_elf_assignments.length >= second_elf_assignments.length) {
            for (let x = 0; x < second_elf_assignments.length; x++) {
                let found = first_elf_assignments.includes(second_elf_assignments[x]);
                if (found === true) {
                    found_total += 1;
                    // console.log(second_elf_assignments[x]);
                }
            }

            if (found_total === second_elf_assignments.length) {
                total_score += 1;
            }

            found_total = 0;
        }

        if (second_elf_assignments.length > first_elf_assignments.length) {
            for (let z = 0; z < first_elf_assignments.length; z++) {
                let found = second_elf_assignments.includes(first_elf_assignments[z]);
                if (found === true) {
                    found_total += 1;
                   // console.log(first_elf_assignments[z]);
                }
            }

            if (found_total === first_elf_assignments.length) {
                total_score += 1;
            }

            found_total = 0
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

