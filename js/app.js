//// set intitial variables
//// two variables representing meters for nourishment and warmth levels
//// start counter at 0 to begin measuring time Camp Dog stays at camp
//// creat timer to measure time passed
//// create button click elements that will call functions to increase nourish and warmth
//// Food button function will increase pet nourishment
//// Fire button function will increase pet warmth
//// Create timer function that lowers warmth and nourishment over time
//// Status check function will contain conditional so if Weight or Health of Camp Dog are lower than set set perameter to make console disappear
//// Camp Dog will then run away
// GameOver Screen
// Camper is left alone, surounded by wolves
//// If Camp Dog stays at camp long enough, his Wolf Pack shows up
// Open Reset "Win" Window, intro upcoming sequel/ paywall
// Sequel will be named Camp Dog 2: Wolf Pack
// Camp Dog has no name

let nourish = 5
let warmth = 5

let parSecs = 0, clock

// const dayNightBtn = document.querySelector('#day-night-btn')

// dayNightBtn.addEventListener('click', toggleDayNight)

// function toggleDayNight() {
// } 

let background = document.querySelector(".night-time")
clock = setInterval(elapsedTime, 1500)

function elapsedTime() {
    parSecs++
    meter()
    playPad()
    fireGauge()
    boneGauge()
    console.log(parSecs) 
    console.log(`warmth: ${warmth}, nourish: ${nourish}`)
    if(parSecs >= 15) {
        clearInterval(clock)
        console.log(`Youv've kept him around`)
        renderWin()
    }
    if (warmth === 0 || nourish === 0) {
        clearInterval(clock)
        ranAway()
    }
} 

document.getElementById("bone").onclick = function feed() {
    if (nourish < 5) {
        nourish++
        console.log("CampDog fed")
    }
}

document.getElementById("fire").onclick = function warm() {
    if (warmth < 5) {
        warmth++
        console.log("CampDog warmed up")
    }
}

function meter() {
    if (whichMeter() === 0) {
        nourish--
    } else if (whichMeter() === 1) {
        warmth--
    }
}
function whichMeter() {
    return Math.floor(Math.random()*2)
}

function playPad() {
    let backGround = document.getElementById("gameSticker");
    if (nourish > 0 && warmth > 0) {
        backGround.style.display = "block"
    }else if (nourish === 0 || warmth === 0) {
        backGround.style.display = "none"
    }
}

function ranAway() {
    // if statement needed to handle day-time change
    background.classList.remove("night-time")
    background.classList.add("game-over")
    document.getElementById('endStatement').innerHTML = '<span>CAMP DOG R-U-N-N-O-F-T! </br>You kept him around for ' + parSecs + ' parsecs.</br>You can hear the wolves approaching...</span>';
}

function renderWin() {
    document.getElementById('endStatement').innerHTML = '<span></br>You kept him around for ' + parSecs + ' parsecs and he now trusts you.</br>Turns out he was raised by wolves...</br>Prepare yourself for CAMP DOG 2: WOLF PACK</span>'

}

function fireGauge() {
    let image = document.getElementById('fire')
    if (warmth === 5) {
        image.src = "images/fire-button-on.png"
    }
    else if (warmth === 4) {
        image.src = "images/fire-75-button.png"
    }
    else if(warmth === 3) {
        image.src = "images/fire-50-button.png"
    }
    else if(warmth === 2) {
        image.src = "images/fire-25-button.png"
    }
    else if(warmth === 1) {
        image.src = "images/fire-button-off.png"
    }
}

function boneGauge() {
    let image = document.getElementById('bone')
    if (nourish === 5) {
        image.src = "images/bone-button-on.png"
    }
    else if (nourish === 4) {
        image.src = "images/bone-75-button.png"
    }
    else if(nourish === 3) {
        image.src = "images/bone-50-button.png"
    }
    else if(nourish === 2) {
        image.src = "images/bone-25-button.png"
    }
    else if(nourish === 1) {
        image.src = "images/bone-button-off.png"
    }
}

