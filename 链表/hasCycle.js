// 判断链表是否有环
let hasCycle = (head) => {
    let slowP = head;
    let fastP = head;

    while(fastP){
        if(fastP.next === null){
            return false;
        }
        slowP = slowP.next;
        fastP = fastP.next.next;
        if(slowP === fastP) {
            return true;
        }
    }
    return false;
}