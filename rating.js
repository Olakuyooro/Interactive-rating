const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const firstPage = document.querySelector('main');
const secondPage = document.querySelector('aside');
const selectBar = document.querySelector('.select')


// const ratingValue1 = () => {
//     selectBar.innerHTML = 'You selected 1 out of 5';
// }

// const ratingValue2 = () => {
//     selectBar.innerHTML = 'You selected 2 out of 5';
// }

// const ratingValue3 = () => {
//     selectBar.innerHTML = 'You selected 3 out of 5';
// }                                                                                                                                                                                                                                

// const ratingValue4 = () => {
//     selectBar.innerHTML = 'You selected 4 out of 5';
// }

// const ratingValue5 = () => {
//     selectBar.innerHTML = 'You selected 5 out of 5';
// }

const submitButton = document.getElementById('submit');

const thankYou = () => {
    secondPage.style.display = 'block';
    firstPage.style.display = 'none';
}


const ratingValue = (event) => {
    console.log(event.target.textContent)
    selectBar.innerHTML = `You selected ${event.target.textContent} out of 5`
}

const buttons = [...document.querySelector('.number-bar').children]
buttons.forEach(button => {
    button.addEventListener("click", ratingValue)
})


submitButton.addEventListener('click', thankYou )
// oneButton.addEventListener ('click', ratingValue1 )
// twoButton.addEventListener('click', ratingValue2)
// threeButton.addEventListener('click', ratingValue3)
// fourButton.addEventListener('click', ratingValue4)
// fiveButton.addEventListener('click', ratingValue5)

// 
