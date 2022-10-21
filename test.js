console.log("Script is loaded")


const secondhand = document.querySelector("[data-second]")

function setclock(){
    console.log("Test")
    const currentDate = new Date()
    let seconds = currentDate.getSeconds()
    setrotation(sechand, seconds)
}

function setrotation(hand, rotation){
    hand.style.setproperty('--rotation', rotation)
}

setInterval(setclock, 1000)