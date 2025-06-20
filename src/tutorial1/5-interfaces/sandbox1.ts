interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

const me1: IsPerson = {
    name: 'isa',
    age: 40,
    speak(message): void {
        console.log(message);
    },
    spend(amount): number {
        return amount * Math.PI;
    }
}

console.log(me1);
console.log(me1.age, me1.name)
me1.speak('hi')
console.log(me1.spend(100));

const greetPerson1 = (person: IsPerson): void => {
    console.log('hello', person.name);
}

greetPerson1(me1);
