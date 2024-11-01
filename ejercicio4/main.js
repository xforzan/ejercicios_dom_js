// 1.1

const btn = document.createElement(`button`)
btn.id = `btnToClick`
btn.textContent = "Button"
btn.addEventListener(`click`, (event) => {
    console.log(event);
})
document.body.appendChild(btn)

// 1.2

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
    input.addEventListener('focus', () => {
        console.log(input.value);
    });
}

// 1.3

for (const input of inputs) {
    input.addEventListener('input', () => {
        console.log(input.value);
    });
}

// 1.4

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement(`ul`)

for (i=0; i<albums.length; i++){
    const li = document.createElement(`li`)
    li.textContent= albums[i]
    ul.appendChild(li)
}

document.body.appendChild(ul)