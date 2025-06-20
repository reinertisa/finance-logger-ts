
enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}

interface Email<T> {
    uid: number
    resourceType: ResourceType
    data: T
}

const r1: Email<string> = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: 'hello'
}
console.log(r1);

const r2: Email<number[]> = {
    uid: 2,
    resourceType: ResourceType.DIRECTOR,
    data: [1, 2, 3]
}
console.log(r2);

interface NotificationTwo {
    to: string
    from: string
    body: string
    active: 'active' | 'inactive'
}

const r3: Email<NotificationTwo> = {
    uid: 3,
    resourceType: ResourceType.BOOK,
    data: {
        to: 'sade',
        from: 'isa',
        body: 'hey, do you read?',
        active: "inactive"
    }
}

console.log(r3.data.active)
console.log(r3.data.to)