import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
    .prompt({ name: "url", message: "Enter your URL here" })
    .then((answer) => {
        var url = answer.url;
        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream('qr_generated.png'));
    })
    .catch((err) => {
        console.log(err);
    });