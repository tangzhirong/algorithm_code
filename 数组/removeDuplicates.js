// 方法一： Array.from(new Set())、Array.includes()、Array.splice()
// 方法二：hash  时间O(n)  空间O(n)
let removeDuplicates = (nums) => {
    let hash = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = true;
            result.push(nums[i]);
        }
    }
    return result;
}

let result = removeDuplicates([1,2,1,5,6,2]);
console.log(result);

// 方法三：先排序，再前后比较  O(nlogn)
let removeDuplicates1 = (nums) => {
    let result = [];
    let sortedNums = nums.sort();
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] !== sortedNums[i - 1]) {
            result.push(sortedNums[i]);
        }
    }
    return result;
}

let result1 = removeDuplicates1([1,2,1,5,6,2]);
console.log(result1);