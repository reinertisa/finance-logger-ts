// function signatures

let renderFn: () => void; // function signature
renderFn = () => console.log('hi');

let subtractTwoNumbers: (a: number, b: number) => number;

subtractTwoNumbers = (num1, num2) => {
    return num1 - num2;
}
console.log(subtractTwoNumbers(10, 20));

let calculateShape: (a: number, b: number, type: 'circle' | 'rectangle') => number | undefined;

calculateShape = (num1, num2, type) => {
    if (type === 'circle') {
        return Math.PI * num1 * num2;
    } else if (type === 'rectangle') {
        return num1 * num2;
    }
}

console.log(calculateShape(10, 20, 'circle'));
console.log(calculateShape(10, 29, 'rectangle'));

let logExceptions: (obj: {msg: string, type: 'Runtime' | 'Arithmetic'}) => string[];

logExceptions = ({msg, type}) => {
    if (type === 'Runtime') {
        return [type, msg]
    } else if (type === 'Arithmetic') {
        return [type, msg]
    } else {
        return []
    }
}

console.log(logExceptions({msg: 'Run time error happened', type: 'Arithmetic'}));