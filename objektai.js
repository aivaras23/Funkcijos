// 1. Duomenų Objektas:
// Sukurkite objektą, kuris saugotų jūsų mėgstamiausios knygos pavadinimą, 
// autorių ir leidimo metus. Išveskite kiekvieną objekto savybę naudojant for in ciklą.


const favBook = {
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    PublishDate: '1997'
}

for (const book in favBook) {
    // console.log(`${book} ${favBook[book]}`);
}

// rezultatas:
/*
title Harry Potter
author J. K. Rowling
PublishDate 1997
*/

// 2. Vartotojų Masyvas
// Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, 
// kiekviena reikšmė turėtų vartotojo vardą ir amžių. 
// Naudodami for of ciklą, išveskite kiekvieno vartotojo vardą ir amžių.

const users = [
    { name: 'John', age: 29, },
    { name: 'Isabella', age: 26, },
    { name: 'Lucas', age: 21, },
    { name: 'Maria', age: 25, }
]

for (const user of users) {
    // console.log(`Name: ${user.name}, Age: ${user.age}`);
}

// rezultatas:
/*
Name: John, Age: 29
Name: Isabella, Age: 26
Name: Lucas, Age: 21
Name: Maria, Age: 25
*/

// 3. Sąrašo Filtravimas
// Turite objektų masyvą, kuriame saugoma informacija apie įvairius produktus 
// (pavadinimas, kaina, kategorija). Parašykite funkciją, kuri naudojant for of 
// ciklą grąžintų tik tuos produktus, kurie priklauso tam tikrai kategorijai.

const products = [
    { name: 'Laptop', price: 670, category: 'Electronics' },
    { name: 'Iphone', price: 800, category: 'Electronics' },
    { name: 'Jeans', price: 50, category: 'Clothing' },
    { name: 'Sweater', price: 40, category: 'Clothing' },
]

const filterCategory = 'Electronics';
const filteredProducts = [];

for (const product of products) {
    if (product.category === filterCategory) {
        filteredProducts.push(product);
    }
}
// console.log(filteredProducts);

// Rezultatas:
/*
[
  { name: 'Laptop', price: 670, category: 'Electronics' },
  { name: 'Iphone', price: 800, category: 'Electronics' }
]
*/

// 4. Objekto Kopijavimas
// Parašykite funkciją, kuri naudojant for in ciklą sukurtų objekto kopiją.

function copyObj(org) {
    const copied = {};
    for (const key in org) {
        if (org.hasOwnProperty(key)) {
            copied[key] = org[key];
        }
    }
    return copied;
}

const orgObj = {
    name: 'Maria',
    age: '27',
}

const copiedObj = copyObj(orgObj);
// console.log(copiedObj)
// rezultatas:
// { name: 'Maria', age: '27' }


// 5. Raktų ir Reikšmių Atrinkimas
// Turite vartotojo objektą su įvairiomis savybėmis. Naudodami for in ciklą, sukurti du masyvus: 
// viename saugokite objekto raktus, o kitame - reikšmes.

const user = {
    name: 'Jane',
    surname: 'Doe',
    age: 25,
}

const userKeys = [];
const userValues = [];

for (const key in user) {
    userKeys.push(key);
    userValues.push(user[key]);
}

// console.log(userKeys);
// console.log(userValues);

// 6. Masyvo Suma
// Turite masyvą, kuriame yra skaičiai.
// Naudodami for ciklą, apskaičiuokite masyvo skaičių sumą.

const arr = [89, 23, 54, 5, 125, 22];
const calc = arr.reduce((a, b) => a + b);
// console.log(calc);
// rezultatas 318

const arr2 = [89, 23, 54, 5, 125, 22];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
}
// console.log(sum);
// rezultatas 318

// 7. Didžiausias Skaičiu
// Turite skaičių masyvą. Naudodami for ciklą, raskite didžiausią skaičių masyve.

const arr3 = [17, 72, 97, 95, 58, 49, 99];
const calc2 = Math.max(...arr3);
// console.log(calc2);
// rezultatas 99

let sum2 = 0;
for (let i = 0; i < arr3.length; i++) {
    sum2 = Math.max(arr3[i]);
}
// console.log(sum2)
// rezultatas 99

// 8. Objekto Savybių Skaičius
// Sukurkite funkciją, kuri naudojant for in ciklą, 
// grąžina objekto savybių skaičių.

function countProps(o) {
    let count = 0;

    for (const key in o) {
        if (o.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}

const fruitPrices = {
    Apples: '$2.00',
    Bananas: '$2.00',
    Oranges: '$2.00',
    Pineapples: '$2.00',
    Tangerines: '$2.00',
}

const getCount = countProps(fruitPrices);
// console.log(getCount)
// rezultatas: 5

// 9 Sąlyginis Objektų Atrinkimas
// Turite vartotojų masyvą su objektais, 
// kuriuose yra vardas ir amžius. Naudodami for of ciklą, 
// išveskite tik tuos vartotojus, kurių amžius yra didesnis nei 18.

const users3 = [
    { name: 'John', age: 21 },
    { name: 'David', age: 16 },
    { name: 'Lucas', age: 16 },
    { name: 'Isabella', age: 20 },
    { name: 'Emily', age: 17 },
    { name: 'Sophia', age: 20 },
]
const adults = [];
for (const user of users3) {
    if (user.age > 18) {
        adults.push({ name: user.name, age: user.age });
    }
}
// console.log(adults);
// rezultatas:
/*
[
    { name: 'John', age: 21 }, 
    { name: 'Isabella', age: 20 }, 
    { name: 'Sophia', age: 20 }
]
*/

// 10. Objekto Savybių Keitimas
// Turite objektą, kuriame saugomi įvairių žmonių amžiai. Naudodami for in ciklą, 
// padidinkite kiekvieno asmens amžių 1 metais.

const users4 = [
    { name: 'John', age: 21 },
    { name: 'David', age: 16 },
    { name: 'Lucas', age: 16 },
    { name: 'Isabella', age: 20 },
    { name: 'Emily', age: 17 },
    { name: 'Sophia', age: 20 },
]
const update = [];
for (const user of users4) {
    update.push({ name: user.name, age: user.age + 1 })
}
// console.log(update);
// rezulatas
/*
[
  { name: 'John', age: 22 },
  { name: 'David', age: 17 },
  { name: 'Lucas', age: 17 },
  { name: 'Isabella', age: 21 },
  { name: 'Emily', age: 18 },
  { name: 'Sophia', age: 21 }
]
*/