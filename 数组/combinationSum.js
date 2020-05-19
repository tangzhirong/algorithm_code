// 组合总数  递归+回溯
let combinationSum = (nums, target) => {
    if (target < 0 || nums.length === 0) {
        return;
    }
    // 存储所有满足条件的数组
    let result = [];
    // 存储当前数组
    let curArr = [];
    let sortArr = nums.sort(); 
    console.log(sortArr);
    recall(sortArr, 0, target, curArr, result);
    return result;
}

let recall = (nums, beginIndex, currentTarget, curArr, result) => {
    if (currentTarget < 0) {
        return;
    }
    for (let i = beginIndex; i < nums.length; i ++) {
        let x = nums[i];
        curArr.push(x);
        if (x < currentTarget) {
            recall(nums, i, currentTarget - x , curArr, result);
        } else if (x === currentTarget) {
            result.push([].concat(curArr));
        } else {
            curArr.pop(); // 回溯
            return;
        }
        curArr.pop(); // 回溯
    }
}

console.log(combinationSum([2,3,6,7], 7));