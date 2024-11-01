// 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement(`ul`)
const divisor= document.createElement(`div`)



for (let i=0; i<countries.length; i++){
    const li = document.createElement(`li`)
    li.textContent = countries[i]
    ul.appendChild(li)

}
document.body.appendChild(divisor)

divisor.appendChild(ul)

// 1.2

const rmv = document.querySelector(`.fn-remove-me`)

rmv.remove()

// 1.3

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ul2= document.createElement(`ul`)

const element= document.querySelector(`div[data-function="printHere"]`)


for (let i=0; i<cars.length; i++){
    const li2= document.createElement(`li`)
    li2.textContent = cars[i]
    ul2.appendChild(li2)
}

element.appendChild(ul2)

// 1.4

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const mainDiv = document.createElement(`div`)
document.body.appendChild(mainDiv)

function refresh (){
    mainDiv.innerHTML = "";

    for (let i=0; i<countries2.length; i++){
        const divs = document.createElement(`div`)
        const h4 = document.createElement(`h4`)
        h4.textContent = countries2[i].title
        const img = document.createElement(`img`)
        img.src = countries2[i].imgUrl
        const btton = document.createElement(`button`)
        btton.textContent = "Elimíname"
        btton.addEventListener('click', () => remv(i)); 
        mainDiv.appendChild(divs)
        divs.appendChild(h4)
        divs.appendChild(img)
        divs.appendChild(btton)
    
    }

}


// 1.5

const button = document.createElement(`button`)
button.textContent = "Eliminar último elemento"

document.body.appendChild(button)

button.addEventListener(`click`, del)


function del () {
    countries2.pop()
    refresh()
}

console.log(countries2)
refresh()

// 1.6

function remv (num){
    countries2.splice(num,1)
    refresh()

}

