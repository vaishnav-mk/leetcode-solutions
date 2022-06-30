impl Solution {
    pub fn defang_i_paddr(address: String) -> String {
        let mut res = address.clone();
        str::replace(&res[..], ".", "[.]")
    }
}
/*
Runtime: 0 ms, faster than 100.00% of Rust online submissions for Defanging an IP Address.
Memory Usage: 1.9 MB, less than 95.16% of Rust online submissions for Defanging an IP Address.
*/
