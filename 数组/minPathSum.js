// 最小路径和
let minPathSum = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let dp = Array.from(new Array(m), () => new Array(n).fill(Number.MAX_VALUE));
    dp[0][0] = grid[0][0];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j ++) {
            // 可以从左边到达
            if (i > 0) {
                dp[i][j] = Math.min(dp[i][j], dp[i-1][j] + grid[i][j]);
            }
            // 可以从上边到达
            if (j > 0) {
                dp[i][j] = Math.min(dp[i][j], dp[i][j-1] + grid[i][j]);
            }
        }
    }
    return dp[m-1][n-1];
}

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]));