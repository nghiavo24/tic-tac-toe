/* PSEUDOCODE:
CREATE 3X3 GRID WITH CLICKABLE SQUARES (USING HTML?)
MAKE BACKGROUND COLOR CHANGES WHEN CLICK ON TO INDICATE WHICH PLAYER IS
MAKE THE SQUARE UNCLICKABLE AFTER THE COLOR CHANGED
CREATE A MESSAGE ABOVE THE GRID TO SHOW WHOSE TURN IT IS
CREATE A 'RESET' BUTTON TO CLEAR THE GAME
*/

const cells = document.querySelectorAll(".cell");
const playerTurn = document.querySelector('#playerTurn');
const restartBtn = document.querySelector('#restartBton');

let counter = 0;

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if(counter %2 === 0) {
            cell.textContent = 'X';
        } else if(counter %2 !== 0) {
            cell.textContent = "O";
        } 
        counter+=1;
        console.log("round: " + counter)
        console.log(cell.innerHTML)
    });
});

