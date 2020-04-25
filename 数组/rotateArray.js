// 旋转数组  
// 方法一：需要额外辅助空间
let rotateArray = (nums, k) => {
    let arr = [];
    for (let i = 0; i < nums.length; i ++) {
        arr[i] = i - k >= 0 ? nums[i -k] : nums[i + nums.length - k];
    }
    return arr;
}

console.log(rotateArray([1,2,3,4,5,6,7], 3));
console.log(rotateArray([-1,-100,3,99], 2));

// 方法二： 原地翻转
let rotateArray1 = (nums, k) => {
    nums.splice(0,0,...nums.splice(nums.length - k));
    return nums;
}

console.log(rotateArray1([1,2,3,4,5,6,7], 3));
console.log(rotateArray1([-1,-100,3,99], 2));