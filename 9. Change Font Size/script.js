let increaseButton = document.getElementById('increaseButton')
let decreaseButton = document.getElementById('decreaseButton')

let paragraph = document.getElementById('paragraph')

let currentFontSize = 15 + 'px';

increaseButton.addEventListener("click",function(){


    let newFontSize = parseInt(currentFontSize) + 2;

    currentFontSize = newFontSize;

    paragraph.style.fontSize = newFontSize + 'px';
})

decreaseButton.addEventListener('click',function(){

    let newFontSize = parseInt(currentFontSize) - 2;

    currentFontSize = newFontSize;

    paragraph.style.fontSize = newFontSize + 'px';
})