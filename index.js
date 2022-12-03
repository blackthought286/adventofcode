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

    const chunk_size = 3;
    let myarr = new Array();

    for (let i = 0; i < data.length; i += chunk_size) {
        const chunk = data.slice(i, i + chunk_size);
        myarr.push(chunk);
    }

    for (let i in myarr) {
        let xstring = myarr[i][0];
        let temp_value = '';
        for (let x = 0; x < xstring.length; x++) {
            if (myarr[i][1].includes(xstring[x]) && myarr[i][2].includes(xstring[x])) {
                temp_value = xstring[x];
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

