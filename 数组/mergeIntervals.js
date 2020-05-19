// 合并区间  [[1,3], [2,6], [8,10], [15,18]]
let merge = (intervals) => {
    if(!intervals || intervals.length === 0) {
        return [];
    }
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i ++) {
        // 重叠
        if (intervals[i][0] < result[result.length - 1][1]) {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}

console.log(merge([[1,3], [2,6], [8,10], [15,18]]));