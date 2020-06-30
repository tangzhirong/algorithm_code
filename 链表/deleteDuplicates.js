// 删除排序链表中重复出现的元素（只保留不重复出现的元素)
let deleteDuplicates = (head) => {
    if(!head) {
        return head;
    }
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    let curr = head;
    // 是否需要删除
    let flag = 0;

    while(pre !== null) {
        while(curr.next !== null && curr.next.val === pre.next.val) {
            curr = curr.next;
            flag = 1;
        }
        // 存在重复元素，进行删除
        if(flag){
            pre.next = curr.next;
            curr = curr.next;
            flag = 0;
        }else{
            pre = pre.next;
            curr = curr.next;
        }
    }
    return dummy.next;
}