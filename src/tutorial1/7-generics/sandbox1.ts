// Generics

const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let doc1 = addUID({name: 'isa', age: 40});
// console.log(doc1.name) -> addUID func accepts any object
// console.log(doc1.age) -> addUID func accepts any object
console.log(doc1.uid);



const addUIDTwo = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

const rez1 = addUIDTwo({name: 'isa', age: 40});
console.log(rez1.age);
console.log(rez1.uid);
console.log(rez1.name);

// const rez2 = addUIDTwo('hello'); -> this does not make sense


const addUIDThree = <T extends object>(obj: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

const rez3 = addUIDThree({name: 'sade', age: 10});
console.log(rez3.age, rez3.name, rez3.uid);

const rez4 = addUIDThree({email: 't@t.com', count: 10});
console.log(rez4.uid, rez4.email, rez4.count);


const addUIDFour = <T extends {name: string}>(obj: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

// const rez5 = addUIDFour({name: 10, age: 10}) -> name has te be string
const rez6 = addUIDFour({name: 'sade', age: 20, count: 10})
console.log(rez6.name, rez6.count, rez6.age, rez6.uid);



