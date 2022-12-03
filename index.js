const fs = require('fs');

try {
    const data = fs.readFileSync('rucksack.txt', 'utf8').toString().split("\n");

    // create the priority numbers for small case and capitalized
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const priority_case_container = new Array();

    let largePriorityValue = 26;

    let total_score = 0;

    for (let i = 0; i < alphabet.length; i++) {

        largePriorityValue += 1;

        priority_case_container.push({
            small_letter: alphabet[i],
            large_letter: alphabet[i].toUpperCase(),
            small_priority_number: i+1,
            large_priority_number: largePriorityValue
        });
    }

    let common_elements = new Array();

    for (const [i, value] of data.entries()) {

        // get the first half of the string and the 2nd half
        let first_compartment = value.slice(0, value.length/2);
        let second_compartment = value.slice(value.length/2);

        let temp_value = '';

        for (let i = 0; i < first_compartment.length; i++) {
            if (second_compartment.includes(first_compartment[i])) {
                temp_value = first_compartment[i];
            }
        }

        common_elements.push(temp_value);
    }

    for (let i in common_elements) {
        let small_letter_check = priority_case_container.find((container) => container.small_letter === common_elements[i]);
        let large_letter_check = priority_case_container.find((container) => container.large_letter === common_elements[i]);


        if (large_letter_check != undefined || large_letter_check != null){
            //console.log(large_letter_check.large_priority_number);
            total_score += large_letter_check.large_priority_number;
        }

        if (small_letter_check != undefined || small_letter_check != null){
            //console.log(small_letter_check.small_priority_number);
            total_score += small_letter_check.small_priority_number;
        }
    }

    //console.log(common_elements);
    console.log(total_score);



} catch (e) {
    console.error(e);
}

