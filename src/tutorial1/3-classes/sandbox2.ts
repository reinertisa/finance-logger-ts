
class InvoiceTwo {
    readonly client: string;
    private details: string;
    public amount: number;

    constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    format(): string {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

const inv1 = new InvoiceTwo('Sade', 'work on the sade website', 100);
const inv2 = new InvoiceTwo('Isa', 'work on the isa website', 100);

const invs: InvoiceTwo[] = [];
invs.push(inv1);
invs.push(inv2);

invs.forEach(inv => console.log(inv.client, inv.amount, inv.format()));

