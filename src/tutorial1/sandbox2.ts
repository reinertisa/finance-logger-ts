// arrays
let names: string[] = ['isa', 'sade', 'kristi'];
// names.push(10) -> this does not compile
names.push('inigo') // this works
// names[0] = 20 -> this does not compile
names[0] = 'cat'; // this compiles.

let numbers: number[] = [10, 20, 30];
// numbers.push(true) -> this does not compile
numbers.push(100) // this compiles

let mixed = ['cat', 10, 'isa'];
// mixed.push(true) -> this does not compile
mixed.push(20); // this compiles
mixed.push('fezzik'); // this compiles

let mixed2: (string | number | boolean)[] = [];
// mixed2.push({}) -> this does not compile
mixed2.push('isa') // this compiles
mixed2.push(10) // this compiles
mixed2.push(false) // this compiles

// objects
let user = {
    name: 'Isa',
    email: 'test@gmail.com',
    age: 40,
}
// user.name = 10 -> this does not compile
user.name = 'Sade'
// user.email = false -> this does not compile
user.email = 'test@fuzzyscore.com'
// user.country = 'Turkey' -> this does not compile

type Address = {
    city: string
    state: string
    country: string
    zipCode: number
}

let address: Address = {
    city: 'Sunnyvale',
    state: 'California',
    country: 'US',
    zipCode: 94085
}

address.city = 'Santa Clara';
address.zipCode = 94086;

