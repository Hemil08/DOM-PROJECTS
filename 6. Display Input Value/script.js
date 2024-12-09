let addButton = document.getElementById("addButton")
let input = document.getElementById("inputText")

addButton.addEventListener('click',(e)=>{
    e.preventDefault();

    let content = document.getElementById("content")

    let para = document.createElement("p")

    para.innerHTML = input.value;

    input.value = ""

    content.appendChild(para)
})