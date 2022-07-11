
type Professions = "Atriz" | "Padeiro";

type PersonType = {
    name?: string,
    age?: number,
    profession?: Professions
}

const person1: PersonType = {
    name: "Maria",
    age: 29,
    profession: "Atriz"
}

const person2: PersonType = {
    name: "Roberto",
    age: 19,
    profession: "Padeiro"
}

const person3: PersonType = {
    name: "Laura",
    age: 32,
    profession: "Atriz"
}

const person4: PersonType = {
    name: "Carlos",
    age: 19,
    profession: "Padeiro"
}

console.log("Persons: \n", [
    { Person1: { ...person1 } },
    { Person2: { ...person2 } },
    { Person3: { ...person3 } },
    { Person4: { ...person4 } }
])