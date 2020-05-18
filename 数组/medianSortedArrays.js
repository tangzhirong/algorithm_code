// 两个有序数组求中位数  o(log(m + n))
let findMedianSortedArrays = (nums1, nums2) => {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let left = Math.floor((len1 + len2) / 2);
    let right = Math.ceil((len1 + len2) / 2);
    return (getKth(nums1, 0, len1-1, nums2, 0, len2-1, left) + getKth(nums1, 0, len1-1, nums2, 0, len2-1, right)) / 2;
}

let getKth = (nums1, start1, end1, nums2, start2, end2, k) => {
    let len1 = end1 - start1 + 1;
    let len2 = end2 - start2 + 1;
    // 让第一个数组长度始终小于第二个，保证如何数组空了，一定是第一个
    if (len1 > len2) return getKth(nums2, start2, end2, nums1, start1, end1);
    if (len1 === 0) return nums2[start2 + k -1];
    if (k === 1) return Math.min(nums1[start1], nums2[start2]);
    let i = start1 + Math.min(len1, Math.floor(k / 2)) - 1;
    let j = start2 + Math.min(len2, Math.floor(k / 2)) - 1;
    if (nums1[i] < nums2[j]) {
        return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
    } else {
        return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
    }
}

const nums1 = [1,3,4,7];
const nums2 = [2,5,9,10];
console.log(findMedianSortedArrays(nums1, nums2));