// with interfaces

interface Resource<T> {
    uid: number
    resourceName: string
    data: T
}

const resource1: Resource<string> = {
    uid: 1,
    resourceName: 'gold',
    data: 'string'
}
console.log(resource1.data, resource1.resourceName, resource1.uid);

const resource2: Resource<object> = {
    uid: 2,
    resourceName: 'diamond',
    data: {name: 'isa', age: 10}
}
console.log(resource2.data, resource2.resourceName, resource2.uid);

const resource3: Resource<string[]> = {
    uid: 3,
    resourceName: 'bronze',
    data: ['one', 'two', 'three']
}
console.log(resource3.data, resource3.resourceName, resource3.uid)