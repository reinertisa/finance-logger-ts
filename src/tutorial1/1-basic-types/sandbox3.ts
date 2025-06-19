const count: number = 10;
const city: string = 'Sunnyvale'
const flag: boolean = true
console.log(count, city, flag);

const ages: number[] = [10, 20, 20];
ages.push(20);

let key: string | number
key = 'xxx';
console.log(key);
key = 20;

let techStacks: {
    id: number,
    name: string
    company: string[]
}

techStacks = {
    id: 100,
    name: "TypeScript",
    company: ['Fuzzy Score','Google']
}
console.log(Object.keys(techStacks));
