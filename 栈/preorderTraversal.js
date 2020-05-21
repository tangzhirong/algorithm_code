// 前序遍历二叉树
let preorderTraversal = (root) => {
    let res = [];
    let stack = [];

    if (root) {
        stack.push(root);
    }

    while(stack.length) {
        let cur = stack.pop();
        res.push(cur.value);

        // 先访问左子树、再访问右子树
        if(cur.right !== null) {
            stack.push(cur.right);
        }
        if(cur.left !== null) {
            stack.push(cur.left);
        }
    }
    return res;
}