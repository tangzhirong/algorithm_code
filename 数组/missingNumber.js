// 缺失数字 
// 方法一：知道n的情况下，hashmap  o(n)
let missingNumber = (nums, n) => {
    let m = new Map();
    for(let i = 0; i < nums.length; i ++) {
        m.set(nums[i], 1);
    }
    for(let i = 0; i < n; i ++) {
        if(!m.get(i)) {
            return i;
        }
    }
}

console.log(missingNumber([0,1,6,3,4,2,7], 8));

// 方法二：不知道n  o(n2)
let missingNumber1 = (nums) => {
    for(let i = 0; ; i ++) {
        if(nums.indexOf(i) === -1) {
            return i;
        }
    }
}

console.log(missingNumber1([0,1,6,3,4,2,7], 8));

// 方法三：不知道n 排序  o(nlogn)
let missingNumber2 = (nums) => {
    nums.sort();
    for(let i = 0; i < nums.length - 1; i ++) {
        if (nums[0] !== 0) {
            return 0;
        }
        if (nums[i + 1] !== nums[i] + 1) {
            return nums[i] + 1;
        }
    }
    return nums[i];
}

console.log(missingNumber2([0,1,6,3,4,2,7], 8));