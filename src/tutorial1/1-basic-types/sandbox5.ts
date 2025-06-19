
const listItems = ({id, name, color}: {id: number, name: string, color: string}): void => {
    console.log(id, name, color);
}

listItems({id: 10, name: 'isa', color: 'black'});

type TechStackType = {
    id: number
    name: string
    company: string
}
function listTechStacks({id, name, company}: TechStackType): void {
    console.log(id, name, company);
}

interface CompanyType {
    id: number
    type: 'startup' | 'multinational'
    name: string
    details?: string
}

const listCompanies = (companies: CompanyType[]): HTMLUListElement => {
    const ulElem = document.createElement('ul');

    companies.forEach(company => {
        let liElem = document.createElement('li');
        liElem.setAttribute("key", String(company.id));
        liElem.innerText = `<div>${company.details} - ${company.name}</div>`
        ulElem.innerHTML += liElem;
    })

    return ulElem;

}

type StringOrNum = string | number;
const printHelloWorld = (message: StringOrNum): void => {
    console.log(message);
}

type ObjWithName = {
    name: string
}

const sayBye = (user: ObjWithName, message: StringOrNum): void => {
    console.log(user.name)
    console.log(message);
}

sayBye({name: 'Sade'}, 'hello');
sayBye({name: 'Kristi'}, 10);