/**
 Do not return anything, modify board in-place instead.
 */

const EMPTY: string = ".";
const valid: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

function solveSudoku(board: string[][]): void {
    let emptyCells: ({row: number, column: number})[] = [];

    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board.length; column++) {
            if (board[row][column] === EMPTY) {
                emptyCells.push({row, column})
            }
        }
    }



    backtrack(0, emptyCells, board);
};

function backtrack(emptyCellInd: number, emptyCells:({row: number, column: number})[], board: string[][]): boolean {
    if (emptyCellInd >= emptyCells.length) {
        return true;
    }
    const {row, column} = emptyCells[emptyCellInd];
    
    for (let i = 0; i < valid.length; i++) {
        let res = valid[i];
        if (validate(board, row, column, res)) {
            board[row][column] = res;
            if (backtrack(emptyCellInd + 1, emptyCells, board)) {
                return true;
            }
            board[row][column] = EMPTY;
        }
    }
}

function validate(board: string[][], row: number, column: number, value: string): boolean {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[row][i*3 + j] === value) return false;
            if (board[i*3 + j][column] === value) return false;
            const dimX = Math.floor(row / 3) * 3;
            const dimY = Math.floor(column / 3) * 3;

            if (board[dimX + i][dimY + j] === value) return false;
        }
    }
    return true;
}
                              
/*
Runtime
96 ms
Beats
100%
Memory
43.9 MB
Beats
87.67%
*/
