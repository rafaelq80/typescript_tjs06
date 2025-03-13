import readlinesync = require('readline-sync');

let num: number = 5;
let loop: boolean = true;

while(loop){

    for(let contador = 1; contador <= 10; contador++){
        console.log(`${num} x ${contador} = ${num * contador}`)
    }

    loop = readlinesync.keyInYNStrict('Deseja Continuar (Y/N): ')

}