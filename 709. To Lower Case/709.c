char* toLowerCase(char* str) {
    int i;
    for(i = 0; i< strlen(str); i++){
        if(str[i] >= 65 && str[i] <= 90)
            str[i] += 32;
    }
    
    return str;
}

/*
Runtime: 0 ms, faster than 100.00% of C online submissions for To Lower Case.
Memory Usage: 5.7 MB, less than 57.75% of C online submissions for To Lower Case.
*/
