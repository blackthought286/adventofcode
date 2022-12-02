const fs = require('fs');

try {
    const data = fs.readFileSync('calories.txt', 'utf8').toString().split("\n");

    let temp_var = 0;
    let elves_calories = new Array();
    let top_elves_calorie_count = new Array();

    const top_elf_count = 3;

    for (i in data) {
        if (data[i] != ""){
            temp_var += parseInt(data[i]);
        }else{
            elves_calories.push(temp_var);
            temp_var = 0;
        }
    }

    console.log(Math.max(...elves_calories));

    for (let i = 0; i < top_elf_count; i++) {
        let highest_calorie_amount = Math.max(...elves_calories);

        top_elves_calorie_count.push(highest_calorie_amount);
        elves_calories = elves_calories.filter(e => e !== highest_calorie_amount);
    }
    console.log(top_elves_calorie_count);
    console.log(top_elves_calorie_count.reduce((a, b) => a + b, 0));

} catch (e) {
    console.error(e);
}
