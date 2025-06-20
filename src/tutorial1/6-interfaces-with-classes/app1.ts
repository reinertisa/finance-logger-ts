import {MyInvoice1} from "./MyInvoice1";
import {MyPayment1} from "./MyPayment1";
import {HasFormatter1} from "./HasFormatter1";

let doc1: HasFormatter1;
let doc2: HasFormatter1;

doc1 = new MyInvoice1('benjamin', 'web work', 100);
doc2 = new MyPayment1('brent', 'plumbing work', 100);

let docArr: HasFormatter1[] = [];
docArr.push(doc1);
docArr.push(doc2);
