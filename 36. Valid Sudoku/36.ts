function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        let map = new Map();
        for (let j = 0; j < board.length; j++) {
            if (map.has(board[i][j]) && board[i][j] != '.') {
                return false;
            }
            map.set(board[i][j], board[i][j]);
        }
    }
    for (let i = 0; i < board.length; i++) {
        let map = new Map();
        for (let j = 0; j < board.length; j++) {
            if (map.has(board[j][i]) && board[j][i] != '.') {
                return false;
            }
            map.set(board[j][i], board[j][i]);
        }
    }
    for (let i = 0; i < board.length; i++) {
        let map = new Map();
        for (let j = 0; j < board.length; j++) {
            let tile = board[((i % 3) * 3) + (j % 3)][(Math.floor(i/3) * 3) + (Math.floor(j/3))];
            if (map.has(tile) && tile != '.') {
                return false;
            }
            map.set(tile, tile);
        }
    }
    return true;
};

/*
Runtime
129 ms
Beats
72.16%
Memory
45.8 MB
Beats
82.55%
*/
