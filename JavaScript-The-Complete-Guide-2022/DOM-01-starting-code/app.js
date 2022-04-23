// const h1 = document.getElementById('main-tittle');

// h1.textContent = h1.textContent + " " + "Adding some additional Text using h1.textContent";
// h1.style.color = "blue";

// const li = document.querySelector('li:last-of-type');
// li.style.color = "red"

// const body = document.body;


// // const listItemElelents = document.querySelectorAll('li');
// const listItemElelents = document.getElementsByTagName('li');


// for (const listItemEl of listItemElelents) {
//     console.dir(listItemEl);
// }

const ul = document.body.firstElementChild.nextElementSibling
const firstLi = ul.firstElementChild

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = "blue"

section.className = '';

button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible'){
    //     section.className = 'red-bg invisible'
    // } else {
    //     section.className = 'red-bg visible'  
    // }
//or the better way
    section.classList.toggle('visible');
    section.classList.toggle('invisible');
})