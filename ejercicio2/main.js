// 2.1
const div = document.createElement(`div`)

document.body.appendChild(div)

// 2.2
const otherDiv = document.createElement(`div`)

const p = document.createElement(`p`)

otherDiv.appendChild(p)

document.body.appendChild(otherDiv)

// 2.3

const div3 = document.createElement(`div`)

for  (let i=0; i<6; i++){
    const paragraph = document.createElement(`p`)
    div3.appendChild(paragraph)
}

document.body.appendChild(div3)

// 2.4

const paragraph2 = document.createElement(`p`)
paragraph2.textContent = "Soy dinámico!"

document.body.appendChild(paragraph2)

// 2.5
const h2= document.querySelector(`.fn-insert-here`)

h2.textContent = "Wubba Lubba dub dub"

// 2.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement(`ul`)



for (let i=0; i<apps.length; i++){
    const li = document.createElement(`li`)
    li.textContent = apps[i]
    ul.appendChild(li)
}

document.body.appendChild(ul)

// 2.7 

const nodes = document.querySelectorAll(`.fn-remove-me`);

for (const node of nodes){
    node.remove();
    
}

// 2.8
const divInsert = document.querySelectorAll(`div.fn-insert-here`)

for (const each of divInsert){
    each.textContent = "Voy en medio!"

}

// 2.9



for (const each of divInsert){
    const paragraph3 = document.createElement(`p`)
    paragraph3.textContent = "Voy dentro!"
    each.appendChild(paragraph3)
    
}




