import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import {ListTemplate} from "./classes/ListTemplate";

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

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Isa', 'web work', 250);
docTwo = new Payment('Sade', 'plumbing work', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

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

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }

    console.log(doc);
    list.render(doc, type.value, 'end');
});