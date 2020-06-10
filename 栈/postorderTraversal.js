let postOrderTraverse = (root) => {
    let res = [];
    let stack = [];
    let cur = root;
    let lastVisit = null;
    while (cur) {
        stack.push(cur);
        cur = cur.left;
    }

    while (stack.length) {
        cur = stack.pop();
        if (cur.right === null || cur.right === lastVisit) {
            res.push(cur);
            lastVisit = cur;
        } else {
            stack.push(cur);
            cur = cur.right;

            while (cur) {
                stack.push(cur);
                cur = cur.left;
            }
        }
    }
    return res;
}