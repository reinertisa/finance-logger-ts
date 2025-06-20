import {HasFormatter1} from "./HasFormatter1";
import {MyPayment1} from "./MyPayment1";
import {MyInvoice1} from "./MyInvoice1";

const formElem = document.querySelector('.new-item-form') as HTMLFormElement;

const typeElem = document.querySelector('#type') as HTMLSelectElement;
const toFromElem = document.querySelector('#toFrom') as HTMLInputElement;
const amountElem = document.querySelector('#amount') as HTMLInputElement;
const detailsElem = document.querySelector('#details') as HTMLInputElement;

formElem.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    let doc: HasFormatter1;

    if (typeElem.value === 'payment') {
        doc = new MyPayment1(toFromElem.value, detailsElem.value, amountElem.valueAsNumber);
    } else {
        doc = new MyInvoice1(toFromElem.value, detailsElem.value, amountElem.valueAsNumber)
    }
    console.log(doc);
})