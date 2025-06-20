import {HasFormatter1} from "./HasFormatter1";

export class MyPayment1 implements HasFormatter1 {

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) {}

    format(): string {
        return `${this.recipient} is owned ${this.amount} for ${this.details}`
    }
}