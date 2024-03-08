// 1. Parašykite funkciją, kuri priima vartotojo vardą kaip argumentą ir grąžina pasveikinimo žinutę.
function greeting(name) {
    return `Hello, ${name}!`
}
//  console.log(greeting('John'));
// rezultatas: Hello, John!


// 2.  Sukurkite funkciją, kuri priima du skaičius kaip argumentus ir grąžina jų sumą.
function sum(a, b) {
    return a + b;
}
// console.log(sum(2, 6));
// rezultatas: 8


// 3. Parašykite funkciją, kuri priima masyvą kaip argumentą ir grąžina visų masyvo elementų sumą.
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
// console.log(sumArray([2, 3, 4, 8, 13, 19]));
// rezultatas: 49


// 4. Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių masyve.
function findMaxArray(array) {
    return Math.max(...array);
}
// console.log(findMaxArray([3, 4, 8, 15, 10]));
// rezultatas: 15


// 5. Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.
function getStringLength(text) {
    return text.length;
}
// console.log(getStringLength('hello'));
// rezultatas: 5


// 6. Sukurkite funkciją, kuri priima skaičių ir grąžina jo faktorialą.
function factorialNum(number) {
    for (let i = number - 1; i >= 1; i--) {
        number = number * i;
    }
    return number;
}
// console.log(factorialNum(5));
// rezultatas: 120


// 7. Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus, o grąžina naują masyvą, 
// kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių.
function filterArray(array, arg) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= arg) {
            result.push(array[i]);
        }
    }
    return result;
}
// console.log(filterArray([1, 5, 10, 15, 20], 6))
// rezultatas: 10,15,20


// 8. Sukurkite funkciją, kuri priima tekstą kaip argumentą ir grąžina jį atvirkštine tvarka.
function reverseString(text) {
    return text.split('').reverse().join('');
}
// console.log(reverseString('labas'))
// rezulatas: sabal


// 9. Parašykite funkciją, kuri nustato, ar pateiktas tekstas yra palindromas.
function palindromeChecker(text) {
    const reversedText = text.split('').reverse().join('');
    if (text === reversedText) {
        return true;
    }
    return false;
}
// console.log(palindromeChecker('level'))
// rezultatas: true


// 10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra lyginis, ir false, jei skaičius yra nelyginis.
function isNumberEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}
// console.log(isNumberEven(4));
// rezultatas: true


// 11. Parašykite funkciją, kuri priima tekstą ir dvi eilutes: pakeistiną simbolį ir pakeitimo simbolį. 
// Funkcija grąžina naują tekstą su pakeistais simboliais.
function modifyString(string, a, b) {
    return string.toLowerCase().replaceAll(a, b)
}
// console.log(modifyString('Ananasas', 'a', '!'))
// rezultatas: !n!n!s!s


// 12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir konvertuoja ją į Farenheito laipsnius.
function celsiusToFahrenheit(temp) {
    return (temp * 9 / 5) + 32
}
// console.log(celsiusToFahrenheit(23));
// rezultatas: 73.4


// 13. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra pirminis, ir false, jei ne.
function isPrimeNumber(number) {
    const sqrt = Math.sqrt(number);
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= sqrt; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(isPrimeNumber(7));
// rezultas: true


// 14. Parašykite funkciją, kuri priima masyvą skaičių ir grąžina jį surikiuotą mažėjančia tvarka.
function sortArray(array) {
    return array.sort((a, b) => b - a);
}
// console.log(sortArray([2, 3, 7, 8, 9]))
// rezultatas: [ 9, 8, 7, 3, 2 ]


// 15. Sukurkite funkciją, kuri priima du skaičius kaip pradžios ir pabaigos intervalo ribas ir grąžina visų skaičių, 
// esančių tame intervale, sumą.
function sumInBetween(a, b) {
    let result = 0;
    for (let i = a; i <= b; i++) {
        result += i;
    }
    return result;
}
// console.log(sumInBetween(1, 9))
// rezultatas: 45


// 16. Parašykite funkciją, kuri priima masyvą ir grąžina naują masyvą be dublikatų.
function removeDuplicates(array) {
    let filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (!filtered.includes(array[i])) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}
// console.log(removeDuplicates([2, 3, 4, 5, 6, 5, 6, 7, 7, 7]));
// rezultatas: [ 2, 3, 4, 5, 6, 7 ]


// 18 Sukurkite funkciją, kuri priima gimimo metus ir grąžina asmenio amžių.
function getAge(y, m, d) {
    const getDate = new Date();
    const day = getDate.getDay();
    const month = getDate.getMonth() + 1;
    const year = getDate.getFullYear();
    let age = year - y;
    if (month < m || (month === m && day < d)) {
        age--;
    }
    return age;
}
// console.log(getAge(2000, 12, 17));
// rezultatas: 23


// 2 variantas
// function getAge2(year) {
//     return 2024 - year;
// }
// console.log(getAge2(2000));


// 19. Parašykite funkciją, kuri priima tekstą ir simbolį, o grąžina, kiek kartų tas simbolis pasikartoja tekste.
function charCounter(text, char) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            count++;
        }
    }
    return count;
}
// console.log(charCounter('hellllo', 'l'))
// rezultatas: 4


// 17. Parašykite funkciją, kuri priima tekstą ir grąžina jį, pakeisdamas kiekvieną raidę į sekantį raidę abėcėlėje.
function replaceNextLetter(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const s = text.toLowerCase();
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (/[a-z]/.test(s[i])) {
            let index = alphabet.indexOf(s[i]);
            let nextIndex = (index + 1) % alphabet.length;

            result += alphabet[nextIndex];
        }
    }
    return result;
}
// console.log(replaceNextLetter('batonas'));
// rezultatas: cbupobt


// 20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir grąžina naują masyvą, 
// kuris sudarytas tik iš tų elementų, kurie pasikartoja visuose pradiniuose masyvuose.
function multipleArrays(a, b, c) {
    const duplicates = a.filter(i => b.includes(i) && c.includes(i));
    return duplicates;
}
// console.log(multipleArrays([2, 3, 4, 5], [9, 8, 2, 3], [1, 2, 3, 4]));
// rezultatas: [2,3]


