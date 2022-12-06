const fs = require('fs');

try {
    //const data = fs.readFileSync('packet_marker.txt', 'utf8').toString().split("\n");
    const data = fs.readFileSync('packet_marker.txt', 'utf8').toString();

    let total = 0;
    let total_characters = 0;

    let container = [];

    let findDup = true;

    for (let i in data) {
        if (container.length >= 4){
            let x = container.splice(-3);
            container = x;
        }

        container.push(data[i]);

        findDup = container.every((e, i, a) => a.indexOf(e) === i);

        if (findDup === false && container.length >= 4) {
            total++;
        }

        total_characters++;

        if (findDup === true && container.length >= 4) {
            break;
        }
    }

    console.log(total);
    console.log(total_characters);

} catch (e) {
    console.error(e);
}

