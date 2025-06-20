class InvoicesThree {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format(): string {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

const obj1 = new InvoicesThree('isa', 'work on my website', 19);
const obj2 = new InvoicesThree('inigo', 'work on inigo website', 29);

const invoiceArr: InvoicesThree[] = []
invoiceArr.push(obj1);
invoiceArr.push(obj2);

invoiceArr.forEach(invoice => console.log(invoice.format()));
