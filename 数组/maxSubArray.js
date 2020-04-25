// 最大子序和 动态规划
let maxSubArray = (nums) => {
    if (nums.length === 0) {
        return 0;
    }
    let dp = [];
    dp[0] = nums[0];
    let max = dp[0];
    for(let i = 1; i < nums.length; i++) {
        dp[i] = dp[i-1] + nums[i] > nums[i] ? dp[i-1] + nums[i] : nums[i];
        max = Math.max(dp[i], max);
    }
    return max;
}

let nums = [-2,1,-3,4,-1,2,1,-5,4];
let result = maxSubArray(nums);
console.log(result);