const fs = require('fs');

try {
    const data = fs.readFileSync('calories.txt', 'utf8').toString().split("\n");

    let temp_var = 0;
    let arr = new Array();

    let arr_again = new Array();

    let highest_elves = 3;

    for (i in data) {
        if (data[i] != ""){
            temp_var += parseInt(data[i]);
        }else{
            arr.push(temp_var);
            temp_var = 0;
        }
    }

    console.log(Math.max(...arr));

    for (let i = 0; i < 3; i++) {
        let x = Math.max(...arr);

        arr_again.push(x);
        arr = arr.filter(e => e !== x);
    }
    console.log(arr_again);
    console.log(arr_again.reduce((a, b) => a + b, 0));

} catch (e) {
    console.error(e);
}
