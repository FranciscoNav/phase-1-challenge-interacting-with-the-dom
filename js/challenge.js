let interval 

const initialize = () => {
//1.Incrementing timer (per second) - DONE
    startCounter()

//2.Manually increment timer - DONE 
    document.getElementById('minus').addEventListener("click", minus)
    document.getElementById('plus').addEventListener("click", plus)

//3.Like button - DONE 
    document.getElementById('heart').addEventListener("click", likeCount)

//4.Pause the counter - DONE
    document.getElementById('pause').addEventListener("click", pauseTimer)

//5.Restart button - DONE
    createRestart()
    document.getElementById('restart').addEventListener("click", restartAction)

//6.Comments submit button - DONE 
    document.getElementById('comment-form').addEventListener("submit", commentForm)
}

function startCounter(){
    interval = setInterval(increase, 1000)
}

function increase(){
    let counter= document.getElementById('counter')
    let count = parseInt(counter.innerText)
    if (count < 1000){
        counter.innerText= count+ 1
    }
}

function minus(){
    let counter= document.getElementById('counter')
    let count = parseInt(counter.innerText)
    if (count < 1000){
        counter.innerText= count - 1
    }
}

function plus(){
    increase()
}

function pauseTimer(){
    const buttonName = document.getElementById('pause')
    if(buttonName.innerText === 'pause'){
        clearInterval(interval)
        buttonName.innerText = 'play'
    }else{
        setInterval(increase, 1000)
        buttonName.innerText = 'pause'
    }
}

function likeCount(){
    const likeUl = document.querySelector('ul.likes')
    const counter = document.getElementById('counter').innerHTML
    let li = likeUl.querySelector(`[data-count='${counter}']`)
    
    if(li){
        li.dataset.likes = parseInt(li.dataset.likes ) +1
        li.innerHTML = `You liked ${counter} ${li.dataset.likes} times`
    }else{
        li = document.createElement('li')
        li.dataset.count = counter
        li.dataset.likes = 1
        li.innerHTML = `You liked ${counter} ${li.dataset.likes} time`
        likeUl.appendChild(li)
    } 
}

function commentForm(event){
    event.preventDefault()
    const li = document.createElement('li')
    li.innerText = document.getElementById('comment-input').value
    document.querySelector('h3').appendChild(li)
}

function createRestart() {
    const button = document.createElement('button')
    document.getElementById('pause').after(button)
    button.id='restart'
    button.innerText= 'restart'
}

function restartAction() {
    document.getElementById('counter').innerHTML= 0
}

document.addEventListener('DOMContentLoaded',initialize)