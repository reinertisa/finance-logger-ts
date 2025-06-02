"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // methods
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Isa', 'work on the isa website', 250);
const invTwo = new Invoice('Sade', 'work on the sade website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'Kristi';
invTwo.amount = 1000;
console.log(invOne, invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#to-from');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
