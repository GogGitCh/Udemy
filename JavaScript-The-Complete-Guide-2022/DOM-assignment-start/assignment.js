// task One
const li1 = document.querySelector('#task-1');
li1.style.color = 'white';

const li1_1 = document.getElementById('task-1');
li1_1.style.backgroundColor = 'black';

// task Two

const title = document.querySelector('title');
title.textContent = "Assignment - Solved";

// Why this shit below does not work?
// const bodyHeadTitle = document.head.querySelector('title');
// bodyHeadTitle.textContent = bodyHeadTitle.textContent + " " + "SOLVED" 

// task Three

// const h1 = document.querySelector('h1');
// h1.textContent = "Assignment SOLVED - DOM Querying & Manipulation"

const h1 = document.getElementsByTagName('h1');
h1[0].textContent = "Assignment - Solved";