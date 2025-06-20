import {HasFormatter1} from "./HasFormatter1";

export class MyInvoice1 implements HasFormatter1 {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format(): string {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}