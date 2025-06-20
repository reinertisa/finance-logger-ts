import {HasFormatter1} from "./HasFormatter1";
import {MyPayment1} from "./MyPayment1";
import {MyInvoice1} from "./MyInvoice1";
import {ListTemplate1} from "./ListTemplate1";

const formElem = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const typeElem = document.querySelector('#type') as HTMLSelectElement;
const toFromElem = document.querySelector('#toFrom') as HTMLInputElement;
const amountElem = document.querySelector('#amount') as HTMLInputElement;
const detailsElem = document.querySelector('#details') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate1(ul);

formElem.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    let doc: HasFormatter1;

    if (typeElem.value === 'payment') {
        doc = new MyPayment1(toFromElem.value, detailsElem.value, amountElem.valueAsNumber);
    } else {
        doc = new MyInvoice1(toFromElem.value, detailsElem.value, amountElem.valueAsNumber)
    }

    list.render(doc, type.value, 'end');
})