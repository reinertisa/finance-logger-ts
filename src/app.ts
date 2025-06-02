import { Invoice } from './classes/Invoice.js';

interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

const me: IsPerson = {
    name: 'isa',
    age: 30,
    speak(text: string):void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
    console.log(`Hello ${person.name}`);
}

greetPerson(me)

const invOne = new Invoice('Isa', 'work on the isa website', 250);
const invTwo = new Invoice('Sade', 'work on the sade website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo)

invTwo.amount = 1000;

console.log(invOne, invTwo);

console.log(invoices);

invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format());
});


const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const toFrom = document.querySelector('#to-from') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
});