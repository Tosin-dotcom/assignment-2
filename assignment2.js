
function chessBoard(board) {
    a = ""
    for (let i = 0; i < board; i++) {
        for (let j = 0; j < board; j++) {
            if ((j + i) % 2 == 0) {
                a += " "
            }
            else {
                a += "#"
            }
        }
        a += "\n"
    }
    return a
}


console.log(chessBoard(8))

