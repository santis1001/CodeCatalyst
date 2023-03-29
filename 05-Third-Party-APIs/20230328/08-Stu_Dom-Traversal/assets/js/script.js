// Assemble: Create/select DOM elements
var rootEl = $('#root');

var a1 = $('.item-a1');
var b1 = $('.item-b1');
var c1 = $('.item-c1');

var a2 = $('.item-a2');
var b2 = $('.item-b2');
var c2 = $('.item-c2');

var a3 = $('.item-a3');
var b3 = $('.item-b3');
var c3 = $('.item-c3');

let tictac = [[null, null, null], [null, null, null], [null, null, null]];
var turn = 1;

function turns(x,y){
    var letterrtn;
    
    if(turn%2==0){                
        letterrtn ='X'
        tictac[x][y] = 1;
    }else{        
        letterrtn = 'O'
        tictac[x][y] = 0;
    }
    turn++;

    console.log(tictac);
    
    return letterrtn;       
}

function evaluateBoard(board) {
    // check rows
    for (let row = 0; row < 3; row++) {
        if (board[row][0] !== null && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
            // game over, winner found
            return board[row][0] === 1 ? 'X' : 'O';
        }
    }

    // check columns
    for (let col = 0; col < 3; col++) {
        if (board[0][col] !== null && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
            // game over, winner found
            return board[0][col] === 1 ? 'X' : 'O';
        }
    }

    // check diagonals
    if (board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        // game over, winner found
        return board[0][0] === 1 ? 'X' : 'O';
    }

    if (board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        // game over, winner found
        return board[0][2] === 1 ? 'X' : 'O';
    }

    // check for tie
    let isTie = true;
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === null) {
                isTie = false;
                break;
            }
        }
    }

    if (isTie) {
        // game over, tie game
        return 'Tie';
    }

    // game not over yet
    return null;
}
function startEva(){
    var winner = evaluateBoard(tictac);
    
    switch(winner){
        case 'X':
            if(window.confirm("Winner: "+winner+"\nplay again?")){
                resetValues();
            }
            break;
        case "O":
            if(window.confirm("Winner: "+winner+"\nplay again?")){
                resetValues();
            }
            break;
        case 'Tie':
            if(window.confirm("Its a tie\nplay again?")){
                resetValues();
            }
            break;
        default:
            break;
    }

}
function resetValues(){
    tictac = [[null, null, null], [null, null, null], [null, null, null]];
    turn = 1;
    
    a1.text('');
    b1.text('');
    c1.text('');
    
    a2.text('');
    b2.text('');
    c2.text('');

    a3.text('');
    b3.text('');
    c3.text('');
}
// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
a1.on('click', function () {
    a1.text(turns(0,0));
    startEva();
});
b1.on('click', function () {
    b1.text(turns(0,1));
    startEva();
});
c1.on('click', function () {
    c1.text(turns(0,2));
    startEva();
});

a2.on('click', function () {
    a2.text(turns(1,0));
    startEva();
});
b2.on('click', function () {
    b2.text(turns(1,1));
    startEva();
});
c2.on('click', function () {
    c2.text(turns(1,2));
    startEva();
});

a3.on('click', function () {
    a3.text(turns(2,0));
    startEva();
});
b3.on('click', function () {
    b3.text(turns(2,1));
    startEva();
});
c3.on('click', function () {
    c3.text(turns(2,2));
    startEva();
});