// classes
export class Invoice {

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