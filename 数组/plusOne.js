// 加一 66
// eg: [1,4,5,6] => [1,4,5,7]
// [1,4,5,9] => [1,4,6,0]
// [9,9,9,9] => [1,0,0,0,0]

let plusOne = (nums) => {
    for(let i = nums.length - 1; i >= 0; i--) {
        nums[i] = (nums[i] + 1) % 10;
        if (nums[i] !== 0) {
            return nums;
        }
    }
    nums.unshift(1);
    return nums;
}

let arr1 = [1,4,5,6];
let arr2 = [1,4,5,9];
let arr3 = [9,9,9,9];
let result1 = plusOne(arr1);
console.log(result1);
let result2 = plusOne(arr2);
console.log(result2);
let result3 = plusOne(arr3);
console.log(result3);