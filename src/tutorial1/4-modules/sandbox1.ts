import {Invoice1} from "./Invoice1.js";

const invObj1 = new Invoice1('cat', 'feed her', 100);
const invObj2 = new Invoice1('muggsy', 'play with her', 300);

const invTasks: Invoice1[] = []
invTasks.push(invObj1);
invTasks.push(invObj2);

invTasks.forEach(val => console.log(val.format()));