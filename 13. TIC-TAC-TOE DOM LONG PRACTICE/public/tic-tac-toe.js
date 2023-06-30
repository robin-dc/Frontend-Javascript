// Your code here
let grid = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']]
let trackMove = []
let nextMove = "X"

// SAVING THE GAME STATE
const browserStorage = localStorage.getItem('tictactoe')
const trackMoveStorage = localStorage.getItem('trackMove')

if(browserStorage){
    grid = JSON.parse(browserStorage)
}
if(trackMoveStorage){
    trackMove = JSON.parse(trackMoveStorage)
}



window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container')
    const h1 = document.querySelector('h1')


    function game(){
        grid.forEach((row, rowIndex) => {
            const ul = document.createElement('ul')
            container.append(ul)
            row.forEach((box, colIndex) => {
                const li = document.createElement('li')
                li.setAttribute("data-x", rowIndex)
                li.setAttribute("data-y", colIndex)
                li.innerText = grid[li.dataset.x][li.dataset.y]
                ul.append(li)
            })
        })

        const rows = document.querySelectorAll('ul')
        rows.forEach(box => {
            box.addEventListener('click', renderTiles)
        })
    }
    game()

    document.querySelectorAll('li').forEach(liItem => {
        if(liItem.innerHTML !== ' '){
            liItem.classList.add("clicked")
        }
    })

    // RENDERS EACH TILE IN THE BOARD
    function renderTiles(e){
        localStorage.removeItem('tictactoe')
        localStorage.removeItem('trackMove')

        const li = e.target

        const xCoordinate = li.dataset.x
        const yCoordinate = li.dataset.y

        if (li.classList.contains('clicked')) {
            const jsonGrid = JSON.stringify(grid)
            const jsonTrackMove = JSON.stringify(trackMove)
            localStorage.setItem('tictactoe', jsonGrid)
            localStorage.setItem('trackMove', jsonTrackMove)
            return
        }
        li.classList.add('clicked');


        who()
        putMove(xCoordinate, yCoordinate)
        li.innerText = grid[xCoordinate][yCoordinate]

        h1.innerText = checkCombinations(grid)
        // console.log(checkWin(grid))
        const jsonGrid = JSON.stringify(grid)
        const jsonTrackMove = JSON.stringify(trackMove)
        localStorage.setItem('tictactoe', jsonGrid)
        localStorage.setItem('trackMove', jsonTrackMove)
    }

    // SWITCH OVER WHO'S THE NEXT PLAYER: O || X
    function who(){
        if(trackMove[trackMove.length - 1] === "X"){
            nextMove = "O"
        }
        else{
            nextMove = "X"
        }
        trackMove.push(nextMove)
    }

    function putMove(x, y){
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[i].length; j++){
                if(i == x && j == y){
                    grid[i][j] = nextMove
                }
            }
        }
    }

    // REMOVE CLICK EVENT WHEN THERE'S A WINNER OR TIE
    function removeClickEvent(){
        document.querySelectorAll("ul").forEach(tile => {
            tile.removeEventListener("click", renderTiles)
        })
    }

    // WINNING COMBINATIONS
    function checkCombinations(grid) {

        if(horizontalWinnerChecker()){
            // console.log("Win Horizontally")
            removeClickEvent()
            localStorage.removeItem('tictactoe')
            localStorage.removeItem('trackMove')
            return "Winner: " + trackMove[trackMove.length - 1]
        }
        else if(verticalWinnerChecker()){
            // console.log("Win Vertically")
            removeClickEvent()
            localStorage.removeItem('tictactoe')
            localStorage.removeItem('trackMove')
            return "Winner: " + trackMove[trackMove.length - 1]

        }
        else if(diagonalWinnerChecker()){
            // console.log("Win Diagonally")
            removeClickEvent()
            localStorage.removeItem('tictactoe')
            localStorage.removeItem('trackMove')
            return "Winner: " + trackMove[trackMove.length - 1]

        }
        else if(trackMove.length === 9 && !horizontalWinnerChecker() && !verticalWinnerChecker() && !diagonalWinnerChecker()){
            localStorage.removeItem('tictactoe')
            localStorage.removeItem('trackMove')
            removeClickEvent()
            return "Tie"
        }
        else{
            return "Start!"
        }

        function checkArray(arr){
            for(let i = 0; i < arr.length; i++){
                if(arr[i] === ' '){
                    return false
                }
            }
            return true
        }

        function horizontalWinnerChecker(){
            const horizontal = [
                [grid[0][0], grid[0][1], grid[0][2]],
                [grid[1][0], grid[1][1], grid[1][2]],
                [grid[2][0], grid[2][1], grid[2][2]]
            ]

            let isTrue = false

            for(let i = 0; i < horizontal.length; i++){
                let row = horizontal[i]
                if(checkArray(row)){
                    isTrue = row.every(item => item === row[0])
                    if(isTrue){
                        return isTrue
                    }
                }
            }
            return isTrue
        }

        function verticalWinnerChecker(){
            const vertical = [
                [grid[0][0], grid[1][0], grid[2][0]],
                [grid[0][1], grid[1][1], grid[2][1]],
                [grid[0][2], grid[1][2], grid[2][2]]
            ]

            let isTrue = false

            for(let i = 0; i < vertical.length; i++){
                let col = vertical[i]
                if(checkArray(col)){
                    isTrue = col.every(item => item === col[0])
                    if(isTrue){
                        return isTrue
                    }
                }
            }
            return isTrue
        }

        function diagonalWinnerChecker(){
                const diagonal = [
                    [grid[0][0], grid[1][1], grid[2][2]],
                    [grid[0][2], grid[1][1], grid[2][0]]
                ]

                let isTrue = false

                for(let i = 0; i < diagonal.length; i++){
                    let dia = diagonal[i]
                    if(checkArray(dia)){
                        isTrue = dia.every(item => item === dia[0])
                        if(isTrue){
                            return isTrue
                        }
                    }
                }
                return isTrue
      }}

      // NEW GAME AND GIVE UP BUTTON
      const newGameBtn = document.getElementById('new-game')
      const giveUpBtn = document.getElementById('give-up')

      newGameBtn.addEventListener('click', () => {
        document.querySelectorAll('ul').forEach(ul => ul.remove())
        grid = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']]
        trackMove = []

        game()
        h1.innerText = "Tic Tac Toe"
        giveUpBtn.removeAttribute("disabled", "")
        localStorage.removeItem('tictactoe')
        localStorage.removeItem('trackMove')
      })

      giveUpBtn.addEventListener('click', () => {
        removeClickEvent()
        h1.innerText = "Winner: " + trackMove[trackMove.length-1]
        giveUpBtn.setAttribute("disabled", "")
      })

})
