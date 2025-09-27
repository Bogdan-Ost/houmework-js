// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// const body = document.querySelector("body");
// const title = document.querySelector("#title");
// const list = document.querySelector(".list");
// const dataTopic = document.querySelectorAll("[data-topic]");
// const dataFirstElement = document.querySelector("[data-topic]");
// const dataLastElement = dataTopic[dataTopic.length - 1];
// const sibling = title.nextElementSibling;
// const titleArray = document.querySelectorAll("h3");
// titleArray.forEach((elem) => console.log(elem.textContent));
// titleArray.forEach((elem) => elem.classList.add("active"));
// const currentLi = document.querySelector("li[data-topic = navigation]");
// currentLi.style.backgroundColor = "yellow";
// const liNavP = currentLi.querySelector("p");
// liNavP.textContent = "Я змінив тут текст!";
// const currentTopic = "manipulation";
// const el = document.querySelector(`[data-topic = ${currentTopic}]`);
// el.style.backgroundColor = "blue";
// const header = document.querySelector(".completed");
// header.parentElement.remove();
// const pEl = document.createElement("p");
// pEl.textContent = "Об'єктна модель документа (Document Object Model)";
// title.after(pEl);
// const markUp = `
// <li>
// <h3>Властивість innerHTML</h3>
// <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
// </li>
// `;
// list.insertAdjacentHTML("beforeend", markUp);

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const elArray = [];

// for (let i = 0; i < 100; i++) {
//   const el = document.createElement("div");
//   el.classList.add("number");
//   const num = randomNumber();
//   el.textContent = num;
//   if (num % 2 === 0) {
//     el.classList.add("even");
//   } else {
//     el.classList.add("odd");
//   }
//   elArray.push(el);
// }

// const divContainer = document.querySelector(".number-container");
// divContainer.append(...elArray);

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const inputForm = document.querySelector(".contact-form-input");

// inputForm.addEventListener("blure", checkInput);

// function checkInput() {
//   inputForm.classList.toggle("success", inputForm.value.length >= 6);
//   inputForm.classList.toggle("error", inputForm.value.length < 6);
// }
