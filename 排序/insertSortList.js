// 链表插入排序
let insertSortList = (head) => {
    if(head === null) {
        return head;
    }
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    let curr = head;
    let next = null;

    while(curr){
        pre = dummy;
        // 保存下一个待插入的节点
        next = curr.next;
        // 寻找插入位置
        while(pre.next && pre.next.val < curr.val) {
            pre = pre.next;
        }
        // 插入curr
        curr.next = pre.next;
        pre.next = curr;
        curr = next;
    }
    return dummy.next;
}