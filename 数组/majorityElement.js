// 多数元素  排序 o(nlongn)
let majorityElem = (nums) => {
    nums.sort();
    return nums[Math.floor(nums.length / 2)];
}

let arr = [1,2,2,1,0,2,2];
console.log(majorityElem(arr));

// o(n)  hash
let majorityElem1 = (nums) => {
    let m = new Map();
    for(let i = 0; i < nums.length; i ++) {
        if (!m.has(nums[i])) {
            m.set(nums[i], 1);
        } else {
            m.set(nums[i], m.get(nums[i]) + 1);
        }
    }
    for (let item of m.entries()) {
        if (item[1] > nums.length / 2) {
            return item[0];
        }
    }
}

let arr1 = [1,3,3,1,0,3,3];
console.log(majorityElem1(arr1));