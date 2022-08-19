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

isReady ? console.log('Готово') : console.log('Нічого не готово')

/*const num1 = 42
const num2 = '42'

console.log(num1 == num2)*/

