// 二分法
let searchIndex = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while(left < right) {
        let mid = Math.round((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if(nums[left] === target) {
        return left;
    } else {
        nums.splice(left, 0, target);
        return left;
    }
}


let nums = [1,4,7,10,12,20,21];
let target = 4;
let result = searchIndex(nums,target);
console.log(result, nums);
