
const form0 = document.querySelector('form') // type is HTMLFormElement or null

const form1 = document.querySelector('form')! // type is HTMLFormElement

const form2 = document.querySelector('.new-item-form'); // type is Element | null

const form3 = document.querySelector('.new-item-form')! // type is Element

const form4 = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form4.children);