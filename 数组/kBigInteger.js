// 快速选择
let findKBigInteger = (nums, k) => {
    let size = nums.length;
    return quickselect(nums, 0, size - 1, size - k);
}

let swap = (nums, a, b) => {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }

let partition = (nums, left, right, pivot_index) => {
    let pivot = nums[pivot_index];
    // 1. move pivot to end
    swap(nums, pivot_index, right);
    let store_index = left;

    // 2. move all smaller elements to the left
    for (let i = left; i <= right; i++) {
      if (nums[i] < pivot) {
        swap(nums, store_index, i);
        store_index++;
      }
    }

    // 3. move pivot to its final place
    swap(nums, store_index, right);

    return store_index;
  }

let quickselect = (nums, left, right, k) => {
    let privot_index = Math.floor(Math.random() * (right - left + 1) + left);
    privot_index = partition(nums, left, right, privot_index);
    if (privot_index === k) {
        return nums[k];
    } else if (privot_index > k) {
        return quickselect(nums, left, privot_index - 1, k);
    } else {
        return quickselect(nums, privot_index + 1, right, k);
    }
}

let result = findKBigInteger([3,2,1,5,6,4],4);
console.log(result);
