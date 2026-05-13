import sweetrollImage from "./Images/sweetroll.webp";

console.log('fucking hell harry');

const content = document.querySelector('#content');
const head = document.createElement('div');
head.id = 'head'
content.appendChild(head)

const headText = document.createElement('h1');
headText.textContent = 'RESTAURANT';
head.appendChild(headText)

const headImage = document.createElement('img');
headImage.src = sweetrollImage;
head.appendChild(headImage);
