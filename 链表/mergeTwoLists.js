// 合并两个有序链表
let mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode(0);
    let pre = dummy;
    while(l1 && l2){
        if(l1.val < l2.val) {
            pre.next = l1;
            l1 = l1.next;
        }else{
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    pre.next = l1 ? l1 : l2;
    return dummy.next;
}