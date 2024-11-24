// hello world

const gameBox = document.getElementById('game-box-1');
const gameBox2 = document.getElementById('game-box-2');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');

function darkChoice(){
    const choice = document.getElementById('dark-choice');
    choice.style.display = 'block'
    setInterval(function () {
        choice.style.display = 'none';
    }, 4000)
};

gameBox.addEventListener('mouseover', () => {
    btn1.style.display = 'block'
})
gameBox.addEventListener('mouseout', () => {
    btn1.style.display = 'none'
})
gameBox2.addEventListener('mouseover', () => {
    btn2.style.display = 'block'
})
gameBox2.addEventListener('mouseout', () => {
    btn2.style.display = 'none'
})

const input = document.getElementById('input');
const container = document.getElementById('list-container');

function addList(){
    if(input.value === ''){
        alert('please type something')
    } else {
        let li = document.createElement('li')
        li.innerHTML = input.value
        container.appendChild(li)
    }
}

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

//initializeSlider()
document.addEventListener('DOMContentLoaded', initializeSlider)

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add('displaySlide')
        intervalId = setInterval(nextSlide, 10000)
    }
   
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide')
    })
    slides[slideIndex].classList.add('displaySlide')
}
function prevSlide(){
    clearInterval(intervalId)
        slideIndex--;
        showSlide(slideIndex)
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex)
}

const inputs = document.querySelectorAll(".inputs");
const btn = document.getElementById('btn');

function checkInputs(){
    const allFiled = Array.from(inputs).every(input => input.value.trim() !== '');
    btn.disabled = !allFiled;
}

inputs.forEach(input => {
    input.addEventListener('input', checkInputs);
});


const main = document.getElementById('main');
const main2 = document.getElementById('main-2');
const main3 = document.getElementById('main-3');
const main4 = document.getElementById('main-4');
const main5 = document.getElementById('main-5');
const main6 = document.getElementById('main-6');
const main7 = document.getElementById('main-7');
const main8 = document.getElementById('main-8');
const body = document.getElementsByTagName('body')

function light(){
    main.style.backgroundColor = '#fff';
    main2.style.backgroundColor = '#fff';
    main3.style.backgroundColor = '#fff';
    main4.style.backgroundColor = '#fff';
    main5.style.backgroundColor = '#fff';
    main6.style.backgroundColor = '#fff';
    main7.style.backgroundColor = '#fff';
    main8.style.backgroundColor = '#fff';
    body.style.backgroundColor = '#fff';
}

function dark(){
    main.style.backgroundColor = '#181933'
    main2.style.backgroundColor = '#181933'
    main3.style.backgroundColor = '#181933'
    main4.style.backgroundColor = '#181933'
    main5.style.backgroundColor = '#181933'
    main6.style.backgroundColor = '#181933'
    main7.style.backgroundColor = '#181933'
    main8.style.backgroundColor = '#181933'
    body.style.backgroundColor = '#181933'
}
