package main

import (
	"fmt"
)
import "math"

// 7
func findMinEditDistance(word1, word2 string) int {
	m := len(word1)
	n := len(word2)
	dp := make([][]int, m+1)
	for i := range dp {
		dp[i] = make([]int, n+1)
	}

	for i := 1; i <= m; i++ {
		dp[i][0] = i
	}
	for j := 1; j <= n; j++ {
		dp[0][j] = j
	}

	for i := 1; i <= m; i++ {
		for j := 1; j <= n; j++ {
			if word1[i-1] == word2[j-1] {
				dp[i][j] = dp[i-1][j-1]
			} else {
				dp[i][j] = int(math.Min(float64(dp[i-1][j-1]), math.Min(float64(dp[i][j-1]), float64(dp[i-1][j])))) + 1
			}
		}
	}
	return dp[m][n]
}

func main() {
	fmt.Println("Hello and welcome, %s!", findMinEditDistance("horse", "ros"))

}
