const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
/*const people = [
    {name: 'Vlad', budget: 4200},
    {name: 'Stepan', budget: 3500},
    {name: 'Victoria', budget: 1700}
]*/
const fib = [1, 1, 2, 3, 5, 8, 13]

// function
function addItemToEnd() {

}
/*
// method
cars.push('Honda')
cars.unshift('Suzuki')
console.log(cars)
const firstCar = cars.shift()
const lastCar = cars.pop()
console.log(cars)
console.log(firstCar)
console.log(lastCar)*/

//console.log(cars.reverse())
//console.log(cars)

//const index = cars.indexOf('BMW')
// cars[index] = 'Porsche'
// console.log(cars)
/*const index = people.findIndex(function (person) {
    return person.budget === 3500
})
const person = people.find(function (person) {
    return person.budget === 3500
})
console.log(people[index])
console.log(person)*/
/*let findedPerson
for(const person of people) {
    console.log(person)
    if(person.budget===3500) {
        findedPerson = person
    }
}
console.log(findedPerson)
const person = people.find(person => person.budget === 3500)
console.log(person)*/
//console.log(cars.includes('Mazda'))

/*const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})*/
//const pow2 = num => num**2
//const sqrt = num => Math.sqrt(num)

/*const pow2Fib = fib.map(pow2)
const filteredNumbers = pow2Fib.filter(num => {
    return num > 20
})
console.log(pow2Fib)
console.log(filteredNumbers)*/
//console.log(upperCaseCars)
//console.log(cars)

const people = [
    {name: 'Vlad', budget: 4200},
    {name: 'Stepan', budget: 3500},
    {name: 'Victoria', budget: 1700}
]
const allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)
/*// Задача 1
const text = 'Привіт, ми вивчаємо JS'
const reverseText = text.split('').reverse().join('')
console.log(reverseText)*/


