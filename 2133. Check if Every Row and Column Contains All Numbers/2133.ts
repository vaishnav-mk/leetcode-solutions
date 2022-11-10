function checkValid(board: number[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        let map = new Map();
        for (let j = 0; j < board.length; j++) {
            if (map.has(board[i][j])) {
                return false;
            }
            map.set(board[i][j], board[i][j]);
        }
    }
    for (let i = 0; i < board.length; i++) {
        let map = new Map();
        for (let j = 0; j < board.length; j++) {
            if (map.has(board[j][i])) {
                return false;
            }
            map.set(board[j][i], board[j][i]);
        }
    }
    return true;
};

/*
Runtime
126 ms
Beats
100%
Memory
50.2 MB
Beats
100%
*/
