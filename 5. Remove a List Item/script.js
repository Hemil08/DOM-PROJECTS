let btn = document.getElementById('btn')

let input = document.getElementById('inputText')




btn.addEventListener('click',()=>{

    let lists = document.getElementById('lists')

    let li = document.createElement("li")

    
    let removeButton = document.createElement("button")
    removeButton.innerHTML = 'remove';

    removeButton.addEventListener('click', ()=>{
        li.remove()
    })
    
    li.innerHTML = input.value;
    
    input.value = "";
    lists.appendChild(li)
    li.appendChild(removeButton)
})

