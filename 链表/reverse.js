// 翻转链表
let reverse = (head) => {
    if(!head || !head.next) {
        return head;
    }
    let pre = null;
    let curr = head;
    let next = null;
    while(curr){
        // 把下一个翻转的节点保存下来
        next = curr.next;
        // 翻转当前节点
        curr.next = pre;
        // 继续往下走
        pre = curr;
        curr = next;
    }
    return pre;
}