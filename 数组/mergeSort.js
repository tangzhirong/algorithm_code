// 合并两个有序数组
let mergeSort = (nums1, m, nums2, n) => {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = len1 + len2 + 1;
    while (len1 >= 0 && len2 >= 0) {
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length ));
    }
    arrayCopy(nums2, 0, nums1, 0, len2 + 1);
}

let nums1 = [1,5,8,0,0,0];
let nums2 = [2,4,7];
let result = mergeSort(nums1, 3, nums2, 3);
console.log(nums1);
