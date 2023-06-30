import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

const boardContainer = document.createElement("div")
document.body.append(boardContainer)

for(let i = 0; i < board.grid.length; i++) {
    const ul = document.createElement("ul")
    boardContainer.append(ul)
    for(let j = 0; j < board.grid[i].length; j++) {
        const li = document.createElement("li")
        li.setAttribute("data-x", i)
        li.setAttribute("data-y", j)
        // li.innerHTML = board.grid[i][j]
        ul.append(li)
    }
}
const liItems = document.querySelectorAll('ul')
liItems.forEach(li => li.addEventListener('click', isClick))

function isClick(e){
    const isShip = board.makeHit(e.target.dataset.x, e.target.dataset.y)

    if(isShip){
        e.target.style.backgroundColor = "green"
    }
    else{
        e.target.style.backgroundColor = "red"
    }
    const noMoves = board.isGameOver()
    if(noMoves) {
        document.querySelectorAll('li').forEach(li => {
            li.style.backgroundColor = "gray"
        })
        reset()
    }
}

function reset(){
    const h3 = document.createElement("h3")
    h3.innerText = "YOU WON!"
    boardContainer.prepend(h3)
    liItems.forEach(li => li.removeEventListener('click', isClick))
    setTimeout(() => {
        h3.classList.add("btn")
        h3.innerText = "Reset"
        h3.addEventListener('click', () =>{
            h3.style.display = "none"
            liItems.forEach(li => li.addEventListener('click', isClick))
            board.numRemaining = 3
            document.querySelectorAll('li').forEach(li => {
                li.style.backgroundColor = "white"
            })
        })
    }, 4000)
}

// Your code here
