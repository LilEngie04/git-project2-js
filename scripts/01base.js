/*//1 - Змінні
const firstName = 'Vlad'
//const lastName = 'Melnyk'
//const age = 18
const isProgrammer = true

const _private = 'private'
const $ = 'some values'

const  withNum5 = '5'

//2 - Мутування
/!*
console.log('Імя людини: '+ firstName + ', а вік людини: ' + age)
console.log(age)*!/

/!*
const lastName = prompt('Введіть прізвище')
alert(firstName + ' ' + lastName)*!/

//3 - Оператори

let currentYear = 2022
const birthYear = 2004

//const age = currentYear - birthYear

const a = 10
const b = 5

let c = 32
//c = c + a
/!*
c +=a

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(++currentYear)
console.log(--currentYear)
console.log(c)*!/*/

//4 - Типи даних

/*
const isProgrammer = true
const name = 'Vlad'
const age = 18
let x
console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age)
console.log(typeof x)
console.log(typeof null)*/

//5 - Приоритет операторів

/*
const fullAge = 18
const birthYear = 2004
const currentYear = 2022

const isFullAge = currentYear - birthYear >= fullAge
console.log(isFullAge)*/

//6 - Умовні оператори

/*const courseStatus = 'pending'

if (courseStatus === 'ready') {
    console.log('Курс готовий')
} else if (courseStatus === 'pending') {
    console.log('Курс розробляється')
} else {
    console.log('Курс провалився')
}*/
const isReady = true

/*if (isReady) {
    console.log('Готово')
} else {
    console.log('Нічого не готово')
}*/

//isReady ? console.log('Готово') : console.log('Нічого не готово')

/*const num1 = 42
const num2 = '42'

console.log(num1 == num2)*/

// 8 - Функції

/*
function calculateAge(year) {
    return 2022 - year
}

/!*const myAge = calculateAge(2004)
console.log(myAge)*!/

function logInfoAbout(name, year) {
    const age = calculateAge(year)
    if(age>0){
        console.log('Людина на імя ' + name + ' має вік ' + age)
    } else {
        console.log('Некоректні дані')
    }

}
logInfoAbout('Влад', 2004)
logInfoAbout('Миколай', 2024)*/

// 9 - Масиви

/*
const cars = ['Mazda', 'Mercedes', 'Ford']
//const cars = new Array('Mazda', 'Mercedes', 'Ford')

console.log(cars[1])

console.log(cars.length)

cars[0] = 'Porsche'

cars[cars.length] = 'Mazda'

console.log(cars)*/

// 10 - Цикли

/*
const cars = ['Mazda', 'Mercedes', 'Ford', 'Porsche']
/!*
for(let i = 0; i<cars.length; i++) {
    const car = cars[i]
    console.log(car)
}*!/
for(let car of cars) {
    console.log(car)
}*/

// 11 - Об'єкти

const person = {
    firstName: 'Vlad',
    lastName: 'Melnyk',
    year: 2004,
    languages: ['Ru', 'Ua', 'En'],
    hasWife: false,
    greet: function () {
        console.log('greet')
    }
}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()