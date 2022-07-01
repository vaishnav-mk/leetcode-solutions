function addBinary(a: string, b: string): string {
    if (b.length > a.length) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    let added: string = "";
    let carry: boolean = false;
    for (let i: number = 0; i < a.length; i++) {
        let addOneDigit: number = 0;
        a[a.length - 1 - i] === '1' ? addOneDigit++ : null;
        carry ? addOneDigit++ : null;

        (i < b.length && b[b.length - 1 - i] === '1') ? addOneDigit++ : null;
        

        if (addOneDigit == 2) {
            addOneDigit = 0;
            carry = true;
        } else if (addOneDigit == 3) {
            addOneDigit = 1;
            carry = true;
        } else {
            carry = false;
        }
        added = addOneDigit + added;
    }
    if (carry) {
        return '1' + added;
    }
    return added;
};

/*
Runtime: 129 ms, faster than 22.02% of TypeScript online submissions for Add Binary.
Memory Usage: 45.1 MB, less than 53.07% of TypeScript online submissions for Add Binary.
*/
