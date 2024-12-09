const inputText = document.getElementById('inputText')
const charCount = document.getElementById('charCount');

inputText.addEventListener('input',function(){
    
    charCount.textContent = inputText.value.length;
})
    
    