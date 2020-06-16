const player = document.getElementById('player');
let gameProgress = [];
let gameOver = false;
function play(num) {
    if (gameOver != true) {
        const box = document.getElementById(num);
        if (player.innerText === 'X') {
            box.innerText = 'X';
            box.style = 'color: red;'
            player.innerText = 'O';
            gameProgress[num] = 'X';
        }
        else if (player.innerText === 'O') {
            box.innerText = 'O';
            player.innerText = 'X';
            gameProgress[num] = 'O';
        }
        console.log(gameProgress);
    
        if (gameProgress[0] != undefined && gameProgress[0] === gameProgress[1] && gameProgress[0] === gameProgress[2]) {
            alert(`Player ${gameProgress[0]} is the winner!`);
            gameOver = true;
        }
        else if (gameProgress[3] != undefined && gameProgress[3] === gameProgress[4] && gameProgress[3] === gameProgress[5]) {
            alert(`Player ${gameProgress[3]} is the winner!`);
            gameOver = true;
        }
        else if (gameProgress[6] != undefined && gameProgress[6] === gameProgress[7] && gameProgress[6] === gameProgress[8]) {
            alert(`Player ${gameProgress[6]} is the winner!`);
            gameOver = true;
        }
        else if (gameProgress[0] != undefined && gameProgress[0] === gameProgress[3] && gameProgress[0] === gameProgress[6]) {
            alert(`Player ${gameProgress[0]} is the winner!`);
            gameOver = true;
        }
        else if (gameProgress[1] != undefined && gameProgress[1] === gameProgress[4] && gameProgress[1] === gameProgress[7]) {
            alert(`Player ${gameProgress[1]} is the winner!`);
            gameOver = true;
        }
        else if (gameProgress[2] != undefined && gameProgress[2] === gameProgress[5] && gameProgress[2] === gameProgress[8]) {
            alert(`Player ${gameProgress[2]} is the winner!`);
            gameOver = true;
        }
        else if (gameProgress[0] != undefined && gameProgress[0] === gameProgress[4] && gameProgress[0] === gameProgress[8]) {
            alert(`Player ${gameProgress[0]} is the winner!`);
            gameOver = true;
        }
        else if (gameProgress[2] != undefined && gameProgress[2] === gameProgress[4] && gameProgress[2] === gameProgress[6]) {
            alert(`Player ${gameProgress[2]} is the winner!`);
            gameOver = true;
        }

        let i = true;
        for(x = 0; x <= 8; x++) {
            if (gameProgress[x] === undefined) {
                i = false;
            }  
        }
        if (i === true) {
            alert('No Winner, Game Over');
            gameOver = true;
        }
        // else if (gameProgress > 8) {
        //     alert('No Winner, Game Over');
        //     gameOver = true;
        // }
    }
}

function reset() {
    gameProgress = [];
    gameOver = false;
    for (x = 0; x <= 8; x++) {
        document.getElementById(x).innerText = '';
    }
}