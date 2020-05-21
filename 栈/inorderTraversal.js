// 中序遍历二叉树
// 方法一： 递归
let inorderTraversal = (root) => {
    let results = [];
    traverse(root, results);
    return results;
}

let traverse = (root, results) => {
    if (root === null) {
        return;
    }
    traverse(root.left, results);
    results.push(root.value);
    traverse(root.right, results);
}

// 方法二 迭代法 栈
let inorderTraversal1 = (root) => {
    let res = [];
    let stack = [];
    let cur = root;
    while(cur || stack.length) {
        while(cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        res.push(cur.value);
        cur = cur.right;
    }
}