function generate(numRows: number): number[][] {
    let res: number[][] = [];
    for(let i =0; i <numRows; i++) {
        res[i] = [1];
        for(let j = 1; j < i; j++) {
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
        }
        res[i][i] = 1
    }
    return res;
};

/*
Runtime
89 ms
Beats
73.86%
Memory
42.9 MB
Beats
67.43%
*/
