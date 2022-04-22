const h1 = document.getElementById('main-tittle');

h1.textContent = h1.textContent + " " + "Adding some additional Text using h1.textContent";
h1.style.color = "blue";

const li = document.querySelector('li:last-of-type');
li.style.color = "red"

const body = document.body;


// const listItemElelents = document.querySelectorAll('li');
const listItemElelents = document.getElementsByTagName('li');


for (const listItemEl of listItemElelents) {
    console.dir(listItemEl);
}