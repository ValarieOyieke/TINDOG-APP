import Dog from './Dog.js'
import dogsData from './data.js'
let newDog = getNewDog()

const likeBadge  = document.getElementById('like-badge')
const nopeBadge  = document.getElementById('nope-badge')
const mainContent = document.getElementById('main-content')
const acceptBtn = document.getElementById("accept-button")
const rejectBtn = document.getElementById("reject-button")


document.addEventListener('click', function(e){
    if(e.target.id === "start-btn"){
        document.location.reload()
    }
})


acceptBtn.addEventListener('click', accepted)
rejectBtn.addEventListener('click', rejected)


function accepted() {
    if(dogsData.length > 0){
        likeBadge.style.display = 'block'
        setTimeout(() => {
            newDog = getNewDog()
            render()
            likeBadge.style.display = 'none'
        }, 2000);
    } else {
        likeBadge.style.display = 'block'
        endScroll()
    }
}


function rejected() {
    if(dogsData.length > 0){
        nopeBadge.style.display = 'block'
        setTimeout(() => {
            newDog = getNewDog()
            render()
            nopeBadge.style.display = 'none'
        }, 2000);
    } else{
        nopeBadge.style.display = 'block'
        endScroll()
    }
}


function getNewDog () {
    const nextDog = dogsData.shift()
    return nextDog ? new Dog(nextDog) : {}
}


function render() {
    document.getElementById('card').innerHTML = newDog.getDogHtml()
}
render()


function endScroll () {
    setTimeout(() => {
        mainContent.innerHTML = `
            <div class = "end-scroll">
                <p>Oops!</p>
                 <img src="./images/emoji.png">
                <p> No more swipes for today</p>
                <button class="start-btn" id="start-btn">Start Over?</button>
            </div>`
    },3000)
}