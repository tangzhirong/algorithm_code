// 最长回文子串 中心扩散法 o（n2）
let longestPalindrome = (str) => {
    if (str.length === 0) {
        return str;
    }
    // 记录当前最长回文串长度
    let res = 1;
    // 记录当前最长回文串左右边界
    let ll = 0;
    let rr = 0;
    for (let i = 0; i < str.length; i += 1) {
        // 以i为中心扩散，长度为奇数的情况
        let l = i - 1;
        let r = i + 1;
        while (l >= 0 && r < str.length && str[l] === str[r]) {
            let len = r - l + 1;
            if (len > res) {
                res = len;
                ll = l;
                rr = r;
            }
            l --;
            r ++;
        }
        // 以i为中心扩散，长度为偶数的情况
        l = i;
        r = i + 1;
        while (l >= 0 && r < str.length && str[l] === str[r]) {
            let len = r - l + 1;
            if (len > res) {
                res = len;
                ll = l;
                rr = r;
            }
            l --;
            r ++;
        }
    }
    return str.substring(ll, rr + 1);
}


console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));

// 动态规划  时间复杂度 o（n2） 空间复杂度 o（n2）
let longestPalindrome1 = (str) => {
    let n = str.length;
    let res = "";
    let dp = Array.from(new Array(n), () => new Array(n).fill(0));
    for (let i = n -1; i > 0; i --) {
        for (let j = i; j < n; j ++) {
            dp[i][j] = str[i] === str[j] && ( j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > res.length) {
                res = str.substring(i , j + 1);
            }
        }
    }
    return res;
}

console.log(longestPalindrome1('babad'));
console.log(longestPalindrome1('cbbd'));