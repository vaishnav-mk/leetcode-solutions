/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head: ListNode = new ListNode();
    let current = head;
    let carry: number = 0;
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        const newValue = sum % 10;
        if (l1) {
            l1.val = newValue;
            current.next =  l1;
        } else {
            l2.val = newValue;
            current.next = l2;
        }
        current = current.next;
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }
    if (carry) {
        current.next = new ListNode(carry);
    }
    return head.next;
};

/*
Runtime: 187 ms, faster than 36.05% of TypeScript online submissions for Add Two Numbers.
Memory Usage: 47.2 MB, less than 99.78% of TypeScript online submissions for Add Two Numbers.
*/
