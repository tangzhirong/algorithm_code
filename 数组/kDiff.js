// kdiff: [1,1,2,3,4,5] k=1 
let kDiff = (nums, k) => {
    let m = new Map();
    let nums1 = [];
    let result = [];
    for (let i = 0; i < nums.length; i ++) {
        if (!m.has(nums[i])) {
            nums1.push(nums[i]);
            m.set(nums[i], i);
        }
    }
    for (let i = 0; i < nums1.length; i ++) {
        if(m.has(nums1[i] - k) && m.get(nums1[i]-k) > i) {
            result.push([nums1[i] - k, nums1[i]]);
        }
        if(m.has(nums1[i] + k) && m.get(nums1[i]+k) > i) {
            result.push([nums1[i], nums1[i] + k]);
        }
    }
    return result.length;
}

console.log(kDiff([1,2,3,2,4,5], 1));

let kDiff1 = (nums, k) => {
    if (k < 0) return 0;
    let visit = new Set();
    let map = new Set();
    for (let n of nums) {
        if(visit.has(n-k)) {
            map.add(n-k);
        }
        if(visit.has(n+k)) {
            map.add(n);
        }
        visit.add(n);
    }
    return map.size;
}

console.log(kDiff1([1,2,3,2,4,5], 1));