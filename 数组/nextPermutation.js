// 下一个排列
 let nextPermutation = (nums) => {
     if (nums.length <= 1) {
         return;
     }
     let i = nums.length - 2;
     let j = nums.length - 1;
     let k = nums.length - 1;

     // 从后往前找到第一个下降点
     while(i >=0 && nums[i] > nums[j]) {
        i--;
        j--;
     }
     // 不是最后一个排列
     if (i >= 0) {
        // 在[j,end]从后往前找第一个比nums[i]大的元素，交换
        while(nums[k] < nums[i]) {
            k--;
        }
        let temp = nums[i];
        nums[i] = nums[k];
        nums[k] = temp;
     }
     // reverse [j,end]
     let m = j;
     let n = nums.length - 1;
     while(m < n) {
        let temp = nums[m];
        nums[m] = nums[n];
        nums[n] = temp; 
        m++;
        n--;
     }
     console.log('result:', nums);
 }

nextPermutation([1,2,3,8,5,7,6,4]);