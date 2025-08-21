// let person1 = {
//     name:  "john",
//     age: 30,
//     job: "Developer",
// }

// let person2 = {
//     name:  "Noor",
//     age: 32,
//     job: "Teacher",

// };

// let person3 = {
//     name:  "Aden",
//     age: 33,
//     job: "Writer",

// }

// class person {
//     constructor(name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
// }

// let person1 = new person("John", 30, "Developer");
// let person2 = new person("Noor", 32, "Teacher");
// let person3 = new person("Ali", 33, "Writer");


// console.log(person.name)
// console.log(person["name"])
// let {name} = person;
// console.log(name)


class Animal {
    constractor(name, age, species){
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak(){
        console.log("Animals makes sound");
    }
    run() {
        console.log("Animal is running");
    }
}

let dog = new Animal("Buddy", 3, "canine");
console.log(dog.speak())
console.log(dog.run())
let cat = new Animal("Whiskers", 4, "feline");
let bird = new Animal("Tweety", 1, "Avian");
