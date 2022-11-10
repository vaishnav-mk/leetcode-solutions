impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        let list: Vec<&str> = s.trim().split(" ").collect();
        if list.len() == 0 {
            return 0;
        }
        return list[list.len() - 1].len() as i32;
    }
}

          
/*
Runtime
2 ms
Beats
39.65%
Memory
2.1 MB
Beats
36.14%
*/
