const character: string = 'maria';

const inputs = document.querySelectorAll('input');
inputs.forEach(input => console.log(input));

let country: string = 'Turkey';
// country = 10 -> you cannot change type
country = 'America'; // this works because the same type

let age: number;
// age = 'isa' -> this does not work because age's type is number
age = 10; // this works

let isPositive: boolean = true;
// isPositive = 0 // this does not work
isPositive = false;

var calculateArea = function (diameter: any) {
    return Math.PI * diameter;
}

console.log(calculateArea('hello')); // NaN


const circArea = (diameter: number): number => {
    return diameter * 10;
}

// console.log(circArea('hi')) -> this will not work
console.log(circArea(10)); // this works



