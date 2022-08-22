// 1 - Функції
// Func Declaration
/*function greet(name) {
    console.log('Привіт - ', name)
}
// Func Expression
const greet2 = function greet2(name) {
    console.log('Привіт 2 - ', name)
}
//greet('Олена')
//greet2('Степан')

//console.log(typeof greet)

//console.dir(greet)

// 2 - Анонімні функції
let counter =0
const interval = setInterval(function () {
    if(counter===5) {
        clearInterval(interval) //clearTimeout
    } else {
        console.log(++counter)
    }
}, 1000)*/

// 3 - Стрілочні функції
function greet(name) {
    console.log('Привіт - ', name)
}
const  arrow = (name, age) => {
    console.log('Привіт - ', name, age)
}
const arrow2 = name => console.log('Привіт - ', name)
arrow2('Влад')

const pow2 = num => num **2
console.log(pow2(5))

// 4 - Параметри за замовчуванням
const sum = (a = 1, b = 1) => a + b

//console.log(sum(41, 4))
//console.log(sum())

function sumAll(...all) {
    let result = 0
    for(let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7)
//console.log(res)

// 5 - Замикання
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('Vlad')
console.log(logWithLastName)
console.log(logWithLastName('Melnyk'))