const firstButton = document.querySelector('button');
const secondButton = document.getElementById('change-bg-btn');

// function removeParagrph() {
//     console.dir(firstButton);
// };

// function changeBg() {
// console.dir(event.target);
// };

// firstButton.addEventListener('click', removeParagrph);
// secondButton.addEventListener('click', changeBg);



const firstParagraph = document.body.children[3];
debugger
const thirdParagraph = document.body.children[1];

function removeParagrph() {
    thirdParagraph.remove();
    console.dir(firstButton);
};

function changeBg() {
    firstParagraph.style.backgroundColor = 'yellow'
console.dir(event.target);
};

firstButton.addEventListener('click', removeParagrph);
secondButton.addEventListener('click', changeBg);