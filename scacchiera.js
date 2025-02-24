window.onload = createGrid;

let size = 8;
function createGrid() {
    let board = document.getElementById("board");
    for (let column = 0; column < size; column++) {
        let row = document.createElement("div");
        row.className = "row";
        board.appendChild(row);
        for (let line = 0; line < size; line++) {
            let square = document.createElement('div');
            square.classList.add('square');
            if ((column + line) % 2 === 0) {
                square.classList.add('white');

                let message = document.createElement("p");
                message.innerText = "y:" + column + " x:" + line;
                message.classList.add('message');

                let button = document.createElement("button");
                button.classList.add('colorw');
                button.onclick = function () {
                    square.classList.remove('white');
                    square.classList.add('white-yellow');
                }

                square.appendChild(button);
                button.appendChild(message);

            }
            else {
                square.classList.add('black');

                let message = document.createElement("p");
                message.innerText = "y:" + column + " x:" + line;
                message.classList.add('message');

                let button = document.createElement("button");
                button.classList.add('colorb');
                button.onclick = function () {
                    square.classList.remove('black');
                    square.classList.add('black-orange');
                }
                
                square.appendChild(button);
                button.appendChild(message);
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
    let row = document.getElementsByClassName("row")
    let board = document.getElementById("board");
    for (let i = 0; i < row.length * 2; i++) {
        board.removeChild(board.firstChild);
        board.removeChild(board.firstChild);
    }
    createGrid();
}

function changeColor() {
    let squares = document.getElementsByClassName('square');
    for (i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains('white')) {
            squares[i].classList.remove('white')
            squares[i].classList.add('white-yellow')
        }
        else {
            squares[i].classList.remove('black')
            squares[i].classList.add('black-orange')
        }
    }
}

