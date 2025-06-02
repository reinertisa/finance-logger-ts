// classes
class Invoice {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number) {
    }

    // methods
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

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