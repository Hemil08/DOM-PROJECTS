let change_text_button = document.getElementById('change_text_Button')
let paragraph = document.getElementById('para')

change_text_button.addEventListener("click",function(){
    paragraph.innerText = "The paragraph has been changed";
})