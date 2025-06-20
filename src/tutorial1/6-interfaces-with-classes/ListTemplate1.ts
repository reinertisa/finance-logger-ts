import {HasFormatter1} from "./HasFormatter1.js";


export class ListTemplate1 {
    constructor(
        private container: HTMLUListElement
    ) {}

    render(item: HasFormatter1, heading: string, pos: 'start' | 'end') {
        const liElem = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        liElem.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format()
        liElem.append(p);

        if (pos === 'start') {
            this.container.prepend(liElem);
        } else {
            this.container.append(liElem);
        }
    }
}