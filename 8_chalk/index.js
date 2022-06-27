const chalk = require("chalk");
const nota = 9;

if(nota >= 6 ) {
    console.log(chalk.green("Parabéns você está aprovado"));
} else {
    console.log(chalk.bgRed.black("Você precisa fazer a prova de recoupração"))
}