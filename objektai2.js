/*
1. Masyvo Elementų Filtravimas: Sukurkite funkciją, kuri naudojant
for ciklą iš masyvo išrenka ir grąžina naują masyvą su elementais, 
kurie tenkina tam tikrą sąlygą. */

const newArr = [];
function doSomething(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3 || arr[i] === 4) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(doSomething([1, 2, 3, 3, 3, 4, 5, 7, 3, 3]))
// rezultatas: [ 3, 3, 3, 4, 3, 3 ]

/* 2 Unikalių Reikšmių Radimas: Turite masyvą su pasikartojančiomis reikšmėmis. 
Naudodami for ciklą, sukurkite naują masyvą, kuriame būtų tik unikalios reikšmės.*/


const numArray = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 8, 7, 7, 9];
const unikalios = [];
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] !== numArray[i - 1]) {
        unikalios.push(numArray[i]);
    }
}
// console.log(unikalios);
// rezultatas: [1, 2, 3, 4, 5, 6, 8, 7, 9]

/* 3. Objekto Gylis: Parašykite funkciją, kuri naudodama for in ciklą ir rekursiją, grąžintų objekto gylį
(kiek giliausiai objektas turi įdėtinius objektus). */

const randomObj = {
    abc: 55,
    abc1: {
        abc: 1,
        abc2: 2,
        abc3: {
            abc1: 1,
            abc2: {
                abc1: {
                    abc: 2,
                }
            },
        }
    }
}

function findDepth(obj) {
    let max = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            const depth = findDepth(obj[key]) + 1;
            max = Math.max(depth, max);
        }
    }
    return max;
}
// console.log(findDepth(randomObj))
// rezultatas: 4

/* 4. Masyvo Atvirkštinis: Turite skaičių masyvą. Naudodami for ciklą, sukurkite naują masyvą,
kurio elementai būtų pradinio masyvo, bet eilės atvirkščiai. */

const numArray2 = [1, 2, 3, 4, 5];
const reversedNumArray2 = [];
for (let i = numArray2.length; i >= 1; i--) {
    reversedNumArray2.push(i);
}
// console.log(reversedNumArray2)
// rezultatas: [ 5, 4, 3, 2, 1 ]

/* 5. Raktų Filtravimas Objekte: Turite objektą su daugybe savybių. Sukurkite funkciją, kuri naudojant for in ciklą, 
grąžina naują objektą, kuriame yra tik tas savybės, kurios tenkina tam tikrą sąlygą. */

const personInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    email: "johndoe@mail.com",
    address: {
        street: "123 Main Street",
        city: "Anytown",
        state: "CA",
        zipCode: "12345"
    },
    hobbies: ["reading", "cycling", "hiking"],
};
const newObject = {};
for (const key in personInfo) {
    if (key === 'address') {
        newObject[key] = personInfo[key];
    }
    if (key === 'hobbies') {
        newObject[key] = personInfo[key];
    }
}
// console.log(newObject);
/* rezultatas:
{
  address: {
    street: '123 Main Street',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345'
  },
  hobbies: [ 'reading', 'cycling', 'hiking' ]
}
*/

/* 6. Suminė Vertė Objekte: Turite objektą, kurio savybės yra skaičiai. 
Naudodami for in ciklą, apskaičiuokite visų objekto savybių sumą. */


const skaiciuObj = {
    1: 23,
    2: 55,
    3: 91,
    4: 41,
    5: 10,
    6: 19,
}
let sum = 0;
for (const suma in skaiciuObj) {
    sum += skaiciuObj[suma];
}
// console.log(sum);
// rezultatas: 239

/* 7. Masyvo Elementų Kiekis: Turite masyvą su skirtingų tipų elementais. 
Naudodami for ciklą, suskaičiuokite, kiek yra kiekvieno tipo elementų. */

const elArray = ['a', null, 2, 3, undefined, 'bc', true, false, null, 'aaa'];

let strCounter = 0;
let numCounter = 0;
let nullCounter = 0;
let undefinedCounter = 0;
let booleanCounter = 0;
for (let i = 0; i < elArray.length; i++) {
    if (typeof elArray[i] === 'string') {
        strCounter++;
    }
    if (typeof elArray[i] === 'number') {
        numCounter++;
    }
    if (elArray[i] === null) {
        nullCounter++;
    }
    if (typeof elArray[i] === 'undefined') {
        undefinedCounter++;
    }
    if (typeof elArray[i] === 'boolean') {
        booleanCounter++;
    }
}
// console.log(`Strings found: ${strCounter}\nNumbers found: ${numCounter}\nNulls found: ${nullCounter}\nUndefineds found: ${undefinedCounter}\nBooleans found: ${booleanCounter}`);

/* rezultatas:
Strings found: 3
Numbers found: 2
Nulls found: 2
Undefineds found: 1
Booleans found: 2
*/


/* 8. Objekto Konversija Į Masyvą: Sukurkite funkciją, kuri objektą (raktai ir reikšmės) konvertuotų į masyvą, 
kur kiekvienas elementas būtų [raktas, reikšmė] pora. */

const studentai = [
    { name: 'John', age: 17 },
    { name: 'David', age: 16 },
    { name: 'Lucas', age: 16 },
    { name: 'Isabella', age: 16 },
    { name: 'Emily', age: 17 },
    { name: 'Sophia', age: 16 },
]

const studentuMas = [];
for (const students of studentai) {
    studentuMas.push([students.name, students.age]);
}
// console.log(studentuMas);
/* rezultatas:
[
  [ 'John', 17 ],
  [ 'David', 16 ],
  [ 'Lucas', 16 ],
  [ 'Isabella', 16 ],
  [ 'Emily', 17 ],
  [ 'Sophia', 16 ]
]
*/

/*  Dinaminis Objekto Sudarymas: Naudodami for ciklą, sukurti objektą, 
kurio raktai yra skaičiai nuo 1 iki n, o reikšmės - tie skaičiai pakelti kvadratu. */

const numberObject = {};

for (let i = 1; i <= 10; i++) {
    numberObject[i] = i ** 2;
}
// console.log(numberObject);

/* rezultatas:
{
  '1': 1,
  '2': 4,
  '3': 9,
  '4': 16,
  '5': 25,
  '6': 36,
  '7': 49,
  '8': 64,
  '9': 81,
  '10': 100
}
*/

/* 10  Sąlyginės Reikšmės Objekte: Turite objektą, kuriame saugomos įvairios vartotojų savybės 
(pvz., vardas, amžius, miestas). Sukurkite funkciją, kuri naudojant for in ciklą, pakeistų tam tikrų savybių reikšmes, 
jeigu jos tenkina nurodytą sąlygą (pvz., jeigu vartotojo amžius yra mažesnis nei 18, pridėkite savybę pilnametis: false).*/

// const vartotojai = [
//     { name: 'Jonas', age: 21, city: 'Vilnius' },
//     { name: 'Dovidas', age: 16, city: 'Kaunas' },
//     { name: 'Lukas', age: 16, city: 'Utena' },
//     { name: 'Emilija', age: 18, city: 'Ukmerge' },
//     { name: 'Julija', age: 17, city: 'Kaunas' },
//     { name: 'Kamile', age: 20, city: 'Marijampole' },
// ]

function vartotojaiFunc(vartotojai) {
    for (const vartotojas of vartotojai) {
        if (vartotojas.age < 18) {
            vartotojas['pilnametis'] = false;
        }
    }
    return vartotojai
}

/* 
console.log(vartotojaiFunc([
    { name: 'Jonas', age: 21, city: 'Vilnius' },
    { name: 'Dovidas', age: 16, city: 'Kaunas' },
    { name: 'Lukas', age: 16, city: 'Utena' },
    { name: 'Emilija', age: 18, city: 'Ukmerge' },
    { name: 'Julija', age: 17, city: 'Kaunas' },
    { name: 'Kamile', age: 20, city: 'Marijampole' },
]))
*/

/* rezultatas:
[
  { name: 'Jonas', age: 21, city: 'Vilnius' },
  { name: 'Dovidas', age: 16, city: 'Kaunas', pilnametis: false },
  { name: 'Lukas', age: 16, city: 'Utena', pilnametis: false },
  { name: 'Emilija', age: 18, city: 'Ukmerge' },
  { name: 'Julija', age: 17, city: 'Kaunas', pilnametis: false },
  { name: 'Kamile', age: 20, city: 'Marijampole' }
]
*/