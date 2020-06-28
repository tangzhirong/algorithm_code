// 链表排序: 递归+归并排序 
let sortList = (head) => {
    if(!head || !head.next) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = null;
    let l1 = head;
    let l2 = slow.next;
    return mergeSort(sortList(l1),sortList(l2));
}

let mergeSort = (l1,l2) => {
    let res = new ListNode(0);
    let pre = res;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            pre.next = l1;
            l1 = l1.next;
        } else {
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    pre.next = l1 ? l1 : l2;
    return res.next;
}