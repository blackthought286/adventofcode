const fs = require('fs');

try {
    const data = fs.readFileSync('calories.txt', 'utf8').toString().split("\n");

    let temp_var = 0;
    let arr = new Array();

    for (i in data) {
        if (data[i] != ""){
            temp_var += parseInt(data[i]);
        }else{
            arr.push(temp_var);
            temp_var = 0;
        }
    }


    console.log(Math.max(...arr));

} catch (e) {
    console.error(e);
}