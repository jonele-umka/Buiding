const lorem = document.querySelector('#lorem'),
button = document.querySelector('#choose')

button.addEventListener('click' , () =>{
    lorem.classList.toggle('super')
    if(lorem.style.display === 'block'){
        lorem.style.display = 'none'
    }
    else{
        lorem.style.display ='block'
    }
})
