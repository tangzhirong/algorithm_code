// twoSum: hashMap  O(n)
let twoSum = (nums, target) => {
    let m = new Map();
    for(let i = 0; i < nums.length; i++) {
        let key = target - nums[i];
        if (m.has(key)) {
            return [m.get(key), i];
        } else {
            m.set(nums[i], i);
        }
    }
    return [];
}

let result1 = twoSum([1,3,6,7,9], 4);
console.log(result1);

// threeSum hashMap 嵌套 O(n2)  
let threeSum1 = (nums, target) => {
    let m = new Map();
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let key = target - nums[i] - nums[j];
            if (m.has(key)) {
                return [m.get(key), i, j];
            } else {
                m.set(nums[j], j);
            }
        }
    }
    return [];
}
let result2 = threeSum1([1,3,6,7,9], 10);
console.log(result2);


// threeSum 排序+双指针 O(n2)  
let threeSum2 = (nums, target) => {
    let ans = [];
    const len = nums.length;
    if (nums === null || len < 3) {
        return ans;
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i ++) {
        if (nums[i] > target) {
            break;
        }
        if (nums[i] === nums[i -1]) {
            continue;
        }
        let L = i + 1;
        let R = len - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum === target) {
                ans.push([i, L, R]);
                while(nums[L] === nums[L+1]) {
                    L++;
                }
                while(nums[R] === nums[R-1]) {
                    R--;
                }
                L++;
                R--;
            } else if (sum < target) {
                L++;
            } else if (sum > target) {
                R--;
            }
        }
    }
    return ans;
}
let result3 = threeSum2([1,3,6,7,9], 10);
console.log(result3);