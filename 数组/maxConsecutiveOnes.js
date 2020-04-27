// 最大连续1的个数
// 方法1: 动态规划
let findMaxConsecutiveOnes = (nums) => {
    let max = 0;
    let dp = [];
    dp[0] = 0;
    for (let i = 1; i < nums.length; i ++) {
        dp[i] = nums[i] === 1 ? dp[i-1] + 1 : 0;
        max = Math.max(dp[i], max);
    }
    return max;
}

let arr = [1,1,0,0,1,1,1,1,3,4,1,0,1,0];
console.log(findMaxConsecutiveOnes(arr));

// 方法2
let findMaxConsecutiveOnes1 = (nums) => {
    let max = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === 1) {
            max ++;
        } else {
            max = 0;
        }
        result = Math.max(max,result);
    }
    return result;
}

let arr1 = [1,1,0,0,1,1,1,1,3,4,1,0,1,0];
console.log(findMaxConsecutiveOnes1(arr1));