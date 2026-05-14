import sweetrollImage from "./Images/sweetroll.webp";

const loadPage = () => {
    console.log('fucking hell harry');

    const content = document.querySelector('#content');
    const head = document.createElement('div');
    head.id = 'head'
    content.appendChild(head)

    const headText = document.createElement('h1');
    headText.textContent = 'The Bannered Mare';
    head.appendChild(headText)

    const headImage = document.createElement('img');
    headImage.src = sweetrollImage;
    headImage.id = 'sweetrolls'
    head.appendChild(headImage);

    const headBlurb = document.createElement('p');
    headBlurb.textContent = 'The Bannered Mare offers the freshest food and coldest mead in all of Whiterun Hold. Sourced from the local Honnigbrew meadery, our mead is sure to leave you with a warm belly in the harsh cold of Skyrim. Come have a meal, wash it down with mead, and then try our world famous sweetrolls!';
    head.appendChild(headBlurb);
};

export { loadPage }