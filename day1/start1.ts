import {readFileSync} from "fs";
import {calculator} from "./solution1";


const file: string = process.argv[2];

const data = readFileSync(file).toString();

const lines = data.split(/\n/);

console.log('Input is: \n');
console.log(lines);

console.log('\n');
console.log('Calculating result');
const result = calculator(lines);

console.log('The result is: ' + result);