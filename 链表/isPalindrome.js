// 判断回文链表
let isPalindrome = (head) => {
    let slow = head;
    let fast = head;
    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let l2 = slow.next;
    slow.next = null;
    // 将l2翻转，和head比较，看是否相等
    let reversed = reverse(l2);
    while(reversed && head) {
        if(reversed.val === head.val) {
            reversed = reversed.next;
            head = head.next;
        } else {
            return false;
        }
    }
    return true;
}

function reverse(head) {
    if(!head || head.next === null) {
        return head;
    }
    let cur = head;
    let pre;
    pre.next = head;
    let next;
    while(cur) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}