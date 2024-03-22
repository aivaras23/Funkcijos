/*
1. Masyvo Elementų Filtravimas: Sukurkite funkciją, kuri naudojant
 for ciklą iš masyvo išrenka ir grąžina naują masyvą su elementais, 
 kurie tenkina tam tikrą sąlygą.
 */

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
// rezultatas [ 3, 3, 3, 4, 3, 3 ]

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

// ?

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
/*
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