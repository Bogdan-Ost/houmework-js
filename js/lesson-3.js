// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const newArr = numbers.map((el) => el * el);

// const powNumber = (arr, pow) => arr.map((el) => Math.pow(el, pow));
// powNumber(numbers, 2);
// console.log(powNumber(numbers, 2));

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newArray = data.flatMap((el) => el.values);

// const flatArray = (array) => array.flatMap((el) => el.values);
// console.log(flatArray(data));

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const isYoung = people.some((el = el.age < 20));
// console.log(isYoung);

// const isYoung = (arr, age) => arr.some((el) => el.age < age);
// console.log(isYoung(people, 20));

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const isEven = numbers.every((el) => el % 2 === 0);
// console.log(isEven);

// const newIsEven = (arr, num) => arr.every((el) => el % num === 0);
// console.log(newIsEven(numbers, 2));

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const notEven = numbers.find(number => number % 2 !=== 0)
// console.log(notEven);

// const notEvenfoo = (arr) => arr.find(el => el % 2 !=== 0)

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const num = numbersArray.toSorted((a, b) => a - b);

// const numFoo = (arr) => arr.toSorted((a, b) => a - b);
// console.log(numFoo(numbersArray));

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const eerrer = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(eerrer);

// const newFoo = (arr) => arr.toSorted((a, b) => a.localeCompare(b));
// console.log(newFoo(stringArray));

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const sortedUsers = users.toSorted((a, b) => a.age - b.age);
// console.log(sortedUsers);

// const soetedFoo = (obj) => obj.toSorted((a, b) => a.age - b.age);
// console.log(soetedFoo(users));

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const filterUser = user.filter((obj) => obj.age > 20);
// console.log(filterUser);

// const usersFoo = (arr) => arr.filter((obj) => obj.age > 20);
// console.log(usersFoo(user));

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const num = numbers.reduce((acc, el) => (acc += el), 0);
// console.log(num);

// const redNum = (arr) => arr.reduce((acc, el) => (acc += el), 0);
// console.log(redNum(numbers));

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   number(value) {
//     this.result = value;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }

//   add(value) {
//     this.result += value;
//     return this;
//   }
//   subtract(value) {
//     this.result -= value;
//     return this;
//   }
//   divide(value) {
//     if (value === 0) {
//       console.log("Не ділити на нуль");

//       return this;
//     }
//     this.result /= value;
//     return this;
//   }
//   multiply(value) {
//     this.result *= value;
//     return this;
//   }
// }
// const calc = new Calculator();
// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(prom) {
//     this.#login = prom.login;
//     this.#email = prom.email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const prom = {
//   login: "Alice",
//   email: "@wqeasfd",
// };
// const client = new Client(prom);
// client.email = "@eqwewqeqwe";
// console.log(client);

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.gender = data.gender;
    this.email = data.email;
  }
  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor(obj) {
    super(obj);

    this.salary = obj.salary;
    this.department = obj.department;
  }
  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}

const bogdan = {
  name: "Bogdan",
  age: 27,
  gender: "male",
  email: "bodgan.ost@97.gmail.com",
  salary: 20000,
  department: "Alladin",
};

const Bogdan = new Employee(bogdan);

console.log(Bogdan);
