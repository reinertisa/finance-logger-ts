let greetFn: Function

greetFn = (): void => {
    console.log('hello, again');
}
greetFn();

greetFn = (): number => {
    return 10;
}
greetFn();

const printValues = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c);
}

printValues(10, 10);
printValues(10, 10, 20);
printValues(10, 10, 'hello world');

const mathOperations = (a: number, b: number, type: (number | string) = 10): number => {
    if (type === 'sum') {
        return a + b;
    } else if (type == 'subtract') {
        return a - b;
    } else if (type == 'divide') {
        return a / b;
    } else if (type == 'multiply') {
        return a * b;
    } else {
        return a;
    }
}

console.log(mathOperations(19, 29, 'sum'));
console.log(mathOperations(10, 20, 'subtract'));

const compareOptions = (a: number, b: number, check: 'equal' | 'greaterThan' | 'lessThan'): boolean => {
    if (check === 'equal') {
        return a === b;
    } else if (check === 'greaterThan') {
        return a > b;
    } else if (check === 'lessThan') {
        return a < b;
    } else {
        return false;
    }
}

let result = compareOptions(10, 10, 'equal');
console.log(result);
result = compareOptions(10, 20, 'lessThan');
console.log(result);
result = compareOptions(20, 10, 'greaterThan');
console.log(result);



