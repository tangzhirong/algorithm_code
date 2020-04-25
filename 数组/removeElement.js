let removeElement = (nums, value) => {
    let ans = 0;
    for (let num of nums) {
        if (num !== value) {
            nums[ans] = num;
            ans++;
        }
    }
    return ans;
}

let arr = [1,3,4,3,6,7,8];
const result = removeElement(arr, 3);
console.log(result, arr);