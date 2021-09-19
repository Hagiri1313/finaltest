const BOARD = document.querySelector("#board");
const COLORS = ["red", "blue", "green", "chocolate", "white","orange", "purple", "violet", "lightskyblue"]
const BLOCK_NUMBER= 840;

for (let i= 0; i<BLOCK_NUMBER; i++) {
    const block = document.createElement("div");
    block.classList.add("square");
    block.addEventListener("mousemove", function addHold (){
        setColor(block)
    })

    block.addEventListener("mouseleave", function removeDrop (){
        removeColor(block)
    })

    BOARD.append(block)
}
function setColor (element){
    const color =getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = "black"
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor () {
    const item = Math.floor(Math.random()*COLORS.length)
    return COLORS [item]
}