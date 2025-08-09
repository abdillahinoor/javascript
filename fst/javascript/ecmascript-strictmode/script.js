<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES6 Features Demo</title>
</head>
<body>
    <h1>Check the console for ES6 feature examples</h1>

    <script>
        console.log("===== 1. Let & Const =====");
        let name = "John";
        name = "Mike"; // works
        console.log("let:", name);
        const age = 25;
        console.log("const:", age);

        console.log("\n===== 2. Template Literals =====");
        const job = "Developer";
        console.log(`Hello, my name is ${name} and I am a ${job}`);

        console.log("\n===== 3. Arrow Functions =====");
        const greet = name => `Hello ${name}`;
        console.log(greet("Amina"));

        console.log("\n===== 4. Default Parameters =====");
        function multiply(a, b = 2) {
            return a * b;
        }
        console.log(multiply(5));    // 10
        console.log(multiply(5, 3)); // 15

        console.log("\n===== 5. Destructuring Assignment =====");
        const fruits = ["apple", "banana", "mango"];
        const [first, second] = fruits;
        console.log("First fruit:", first);
        console.log("Second fruit:", second);

        const person = { name: "Ali", age: 25 };
        const { name: personName, age: personAge } = person;
        console.log("Person name:", personName);
        console.log("Person age:", personAge);

        console.log("\n===== 6. Spread Operator =====");
        const arr1 = [1, 2, 3];
        const arr2 = [...arr1, 4, 5];
        console.log("Array:", arr2);

        const obj1 = { a: 1, b: 2 };
        const obj2 = { ...obj1, c: 3 };
        console.log("Object:", obj2);

        console.log("\n===== 7. Rest Parameters =====");
        function sum(...numbers) {
            return numbers.reduce((total, num) => total + num, 0);
        }
        console.log("Sum:", sum(1, 2, 3, 4));

        console.log("\n===== 8. Classes =====");
        class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            greet() {
                console.log(`Hi, I’m ${this.name} and I’m ${this.age} years old.`);
            }
        }
        const ali = new Person("Ali", 25);
        ali.greet();

        console.log("\n===== 9. Promises =====");
        const fetchData = () => {
            return new Promise((resolve) => {
                setTimeout(() => resolve("Data fetched!"), 1000);
            });
        };
        fetchData().then(data => console.log(data));

        console.log("\n===== 10. Modules (Import/Export) =====");
        console.log("Modules require separate files, so they are not shown in this single file demo.");
    </script>
</body>
</html>
