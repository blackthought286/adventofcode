const fs = require('fs');

try {
    //const data = fs.readFileSync('packet_marker.txt', 'utf8').toString().split("\n");
    const data = fs.readFileSync('packet_marker.txt', 'utf8').toString();

    let total = 0;
    let total_characters = 0;

    let container = [];

    let findDup = true;

    for (let i in data) {
        if (container.length >= 14){
            let x = container.splice(-13);
            container = x;
        }

        container.push(data[i]);

        findDup = container.every((e, i, a) => a.indexOf(e) === i);

        if (findDup === false && container.length >= 14) {
            total++;
        }

        total_characters++;

        if (findDup === true && container.length >= 14) {
            break;
        }
    }

    console.log(total);
    console.log(total_characters);

} catch (e) {
    console.error(e);
}

