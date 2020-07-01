// 分隔链表 86
let partition = (head, x) => {
    if(!head) {
        return head;
    }
    let dummy1 = new ListNode(0);
    let curr1 = dummy1;
    let dummy2 = new ListNode(0);
    let curr2 = dummy2;

    while(head){
        if(head.val < x){
            curr1.next = head;
            curr1 = curr1.next;
        }else{
            curr2.next = head;
            curr2 = curr2.next;
        }
        head = head.next;
    }
    // 链接l1、l2
    curr1.next = dummy2.next;
    curr2.next = null;
    return dummy1.next;
}