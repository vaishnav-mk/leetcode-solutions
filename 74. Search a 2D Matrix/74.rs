impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        for i in matrix.iter() {
            if i[0] <= target && target <= i[i.len() - 1] {
                return i.iter().position(|&a| a == target).is_some()
            }
        }
        return false;
    }
}

/*
Runtime
2 ms
Beats
46.85%
Memory
2.2 MB
Beats
67.83%
*/
