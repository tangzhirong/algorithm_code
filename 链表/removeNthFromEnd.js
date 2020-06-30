// 删除链表倒数第n个节点
let removeNthFromEnd = (head, n) => {
    const dummy = new ListNode(0);
    dummy.next = head;
    let l1 = dummy;
    let l2 = dummy;
    // 先让l1走n步
    while(n--) {
        l1 = l1.next;
    }
    // 然后l1、l2一起走，直到l1走到链表末端
    while(l1) {
        l1 = l1.next;
        l2 = l2.next;
    }
    // 删除元素
    l2.next = l2.next.next;
    return dummy.next;
}