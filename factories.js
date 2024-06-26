// Ship factory
export function Ship(length, hits, sunk) {
    return {
        length,
        starting_location,
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
    let rows = 10, columns = 10;
    let boardArray = new Array(rows);
    for (let i = 0; i < rows; i++) {
        boardArray[i] = new Array(columns).fill(0);
    }
    return {
        boardArray, 
        placeShip(ship, orientation, x, y) {
            // NOTE: indexes start at 1 (because x-1 y-1 in for loops)
            // vertical orientation starts at bottom coord and goes UP
            // horizontal orientation starts at left coord and goes RIGHT
            if (orientation == 'horizontal') {
                for (let i = 0; i < ship.length; i++) {
                    boardArray[x-1][y-1+i] = 1;
                }
            }
            if (orientation == 'vertical') {
                for (let i = 0; i < ship.length; i++) {
                    boardArray[x-1+i][y-1] = 1;
                }
            }
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

const testBoard = Gameboard();
const testShip = Ship(3, 0, false);
const testShip2 = Ship(4, 0, false);

function printGameBoard(testBoard) {
    testBoard.boardArray.forEach(row => {
        console.log(row.join(', '));
    })
}
testBoard.placeShip(testShip, 'horizontal', 2, 2);
testBoard.placeShip(testShip, 'vertical', 5, 5);
printGameBoard(testBoard);