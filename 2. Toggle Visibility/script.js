let toggle_visibility_button = document.getElementById('toggle_visibility_button')
let myDiv = document.getElementById('myDiv')

toggle_visibility_button.addEventListener("click",function(){

    if (myDiv.style.display === 'none' ) {
        toggle_visibility_button.innerHTML = 'Hide me'
        myDiv.style.display = 'block'
    }

    else {
        toggle_visibility_button.innerHTML = 'Show me';
        myDiv.style.display = 'none';      
    }


    
})