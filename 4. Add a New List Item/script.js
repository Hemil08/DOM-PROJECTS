let btn = document.getElementById('btn')

let input = document.getElementById('inputText')



btn.addEventListener('click',()=>{

    let lists = document.getElementById('lists')

    let li = document.createElement("li")
    
    li.innerHTML = input.value;
    
    input.value = "";
    lists.appendChild(li)
})