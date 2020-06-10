let levelOrder = (root) => {
    let res = [];
    let queue = [];
    let level = 0;
    let cur = root;
    queue.push(cur);

    while (queue.length) {
        res.push([]);
        let len = queue.length;

        for (let i = 0; i < len; i++) {
            cur = queue.shift();
            res[level].push(cur.val);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        level++;
    }
    return res;
}