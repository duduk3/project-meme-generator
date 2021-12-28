/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable arrow-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable semi */
/* eslint-disable prefer-template */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let memeText = document.querySelector('#text-input');
let memeImage = document.querySelector('#meme-image');
let imageContainer = document.querySelector('#meme-image-container');
let uploadImage = document.querySelector('#meme-insert');
let urlImage = "";
let redBtn = document.querySelector('#fire');
let blueBtn = document.querySelector('#water');
let greenBtn = document.querySelector('#earth');
 
uploadImage.addEventListener('change', (event)=>{
    const file = event.target.files[0];
    urlImage = "url('./imagens/" + file.name + "')";
    memeImage.style.backgroundImage = urlImage;
});

memeText.addEventListener('keyup', () => {
    document.querySelector('#meme-text').innerText = memeText.value;
});

redBtn.addEventListener('click', changeBoard);
blueBtn.addEventListener('click', changeBoard);
greenBtn.addEventListener('click', changeBoard);

function changeBoard(event){
    if(event.target === redBtn){
        blueBtn.style.border = '';
        greenBtn.style.border = '';
        imageContainer.style.border = "3px dashed red";
        event.target.style.border = "3px dashed red";
    }
    if(event.target === blueBtn){
        redBtn.style.border = '';
        greenBtn.style.border = '';
        imageContainer.style.border = "5px double blue";
        event.target.style.border = "5px double blue";
    }
    if(event.target === greenBtn){
        redBtn.style.border = '';
        blueBtn.style.border = '';
        imageContainer.style.border = "6px groove green";
        event.target.style.border = "6px groove green";
    }
}
