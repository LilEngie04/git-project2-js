/*
window.alert('1')

window.confirm('Як тебе звати?')*/

const heading = document.getElementById('hello')
//const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2-class')[0]
//const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('h2')

console.dir(heading2)
//const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length]
console.log(heading3)
//console.dir(heading.textContent)
setTimeout(() => {
    addStylesTo(heading, 'JavaScript', 'red')
}, 1500)
setTimeout(() => {
    addStylesTo(heading2, 'Все буде тіп-топ', 'yellow', '2rem')
}, 4000)
setTimeout(() => {
    addStylesTo(heading3, 'Вправляйся', 'green')
}, 3000)
//console.log(heading)

function addStylesTo(node, text, color = 'blue', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    if(frontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if(heading.style.color === 'red') {
        heading.style.color = 'gray'
        heading.style.backgroundColor = 'green'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black'
    }
}

heading2.addEventListener('dblclick', () => {
    if(heading2.style.color === 'yellow') {
        heading2.style.color = 'gray'
        heading2.style.backgroundColor = 'green'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = 'black'
    }
})