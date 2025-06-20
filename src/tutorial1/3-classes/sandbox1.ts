// classes

class Invoice {
    client: string;
    details: string;
    amount: number

    constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    format(): string {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

const invoice1 = new Invoice('Sade', 'work on the sade website', 250);
const invoice2 = new Invoice('Kristi', 'work on the kristi website', 400);

console.log(invoice1, invoice2);

let invoices : Invoice[] = []
invoices.push(invoice1);
invoices.push(invoice2);
// invoices.push(10) -> this is not an Invoice type
// invoices.push('hello') -> this is not an Invoice type

invoice1.client = 'Isa'
invoice1.amount = 100;
invoice1.details = 'Something changed'

console.log(invoice1, invoice2);
