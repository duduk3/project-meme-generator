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
let uploadImage = document.querySelector('#meme-insert');
let urlImage = "";


uploadImage.addEventListener('change', (event)=>{
    const file = event.target.files[0];
    urlImage = "url('./imagens/" + file.name + "')";
    memeImage.style.backgroundImage = urlImage;
    console.log(file.name);
    console.log(urlImage);
});

memeText.addEventListener('keypress', () => {
    document.querySelector('#meme-text').innerText = memeText.value;
});
