/*const name = 'Влад'
const age = 18
function getAge() {
    return age
}*/
/*
//const output = 'Привіт, мене звати ' + name + ' і мій вік ' + age + ' років.'
const output = `Привіт, мене звати ${name} і мій вік ${age < 20 ? 'A' : 'B'} років`
*/
/*
const output = `
    <div>This is div</div>
    <p>this is p</p>
`
console.log(output)*/

/*const name = 'Влад'
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))
console.log(name.indexOf('л'))
console.log(name.startsWith('вл'))
console.log(name.startsWith('Вл'))
console.log(name.toLowerCase().startsWith('вл'))
console.log(name.endsWith('ад'))
console.log(name.repeat(3))
const string = '      password    '
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight())*/

function logPerson(s, name, age) {
    if(age<0) {
        age = 'Чудо не родилось'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Влад'
const personName2 = 'Макс'
const personAge = 18
const personAge2 = -10

const output = logPerson`Імя: ${personName}, Вік: ${personAge}!`
const output2 = logPerson`Імя: ${personName2}, Вік: ${personAge2}!`

console.log(output)
console.log(output2)
