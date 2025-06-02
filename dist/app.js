import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
const me = {
    name: 'isa',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
let someone;
const greetPerson = (person) => {
    console.log(`Hello ${person.name}`);
};
greetPerson(me);
let docOne;
let docTwo;
docOne = new Invoice('Isa', 'web work', 250);
docTwo = new Payment('Sade', 'plumbing work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice('Isa', 'work on the isa website', 250);
const invTwo = new Invoice('Sade', 'work on the sade website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invTwo.amount = 1000;
console.log(invOne, invTwo);
console.log(invoices);
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#to-from');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
