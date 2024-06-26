// Ship factory
export function Ship(length, hits, sunk) {
    return {
        hit() {
            hits = hits + 1;
        },
        isSunk() {
            if (hits >= length) {
                sunk = true;
            }
            else {
                sunk = false;
            }
        }
    }
}

export function Gameboard() {
    let rows = columns = 10;
    let boardArray = new Array(rows);
    for (let i = 0; i < rows; i++) {
        boardArray[i] = new Array(columns).fill(0);
    }
    return {
        boardArray, 
        placeShip() {
            // placeholder
        },
        receiveAttack() {
            // takes in coords, determine if attack hit a ship
            // then send hit function
            // or record missed shot
        },
        allSunk() {
            
        }
    }
   

}

function printGameBoard(boardArray) {
    boardArray.forEach(row => {
        console.log(row.join(', '));
    })
}