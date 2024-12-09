const addButton = document.getElementById('addButton')
const container = document.getElementById('container')
const inputText = document.getElementById('inputText')

addButton.addEventListener('click',function(){

    let li = document.createElement("li")

    
    let removeButton = document.createElement("button")
    removeButton.innerHTML = 'remove';

    removeButton.addEventListener('click', ()=>{
        li.remove()
    })
    
    li.innerHTML = inputText.value;
    
    inputText.value = "";
    container.appendChild(li)
    li.appendChild(removeButton)

    li.addEventListener('click',function(e){
        const task = e.target;
        task.classList.toggle('completed')
    });
})

