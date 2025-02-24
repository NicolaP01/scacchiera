window.onload = createGrid;

let size = 8;
function createGrid() {
    const board = document.getElementById("board");
    for (let x = 0; x < size; x++) {
        const row = document.createElement("div");
        board.appendChild(row);
        for (let y = 0; y < size; y++) {
            const square = document.createElement('div');
            square.classList.add('square');
            if ((x + y) % 2 === 0) {
                square.classList.add('white');

            } else {
                square.classList.add('black');
            }
            row.appendChild(square);
        }
    }
}

function invertColor() {
    let squares = document.getElementsByClassName('square')
    console.log(squares.length)
    for (i = 0; i < squares.length; i++) {
        let square = squares[i];
        if (square.classList.contains('white')) {
            square.classList.remove('white')
            square.classList.add('black')
        }
        else {
            square.classList.remove('black')
            square.classList.add('white')
        }
    }
}

function changeSize() {
    size = document.getElementById("size").value;
    let square=document.getElementById("board");

    createGrid();
}