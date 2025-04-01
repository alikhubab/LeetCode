class EditDistance {
 public:
  int minDistance(string word1, string word2) {
    const int m = word1.length();//first word length
    const int n = word2.length();//second word length
    // dp[i][j] := min # of operations to convert word1[0..i) to word2[0..j)
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));

    for (int i = 1; i <= m; ++i)
      dp[i][0] = i;

    for (int j = 1; j <= n; ++j)
      dp[0][j] = j;

    for (int i = 1; i <= m; ++i)
      for (int j = 1; j <= n; ++j)
        if (word1[i - 1] == word2[j - 1])//same characters
          dp[i][j] = dp[i - 1][j - 1];//no operation
        else
          dp[i][j] = min({dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]}) + 1;
                             //replace       //delete        //insert
    return dp[m][n];
  }
};

// horse -> rose
/* [[1,2,3,4,_],
 *  [1,2,3,4,5],
 *  [2,2,2,3,4],
 *  [3,2,3,3,4],
 *  [4,3,3,3,4],
 *  [5,4,4,4,3]]
 *
 */

// 3
class EditDistance1 {
  public:
    int minDistance(string word1, string word2) {
      const int m = word1.length();
      const int n = word2.length();

      vector<vector<int>> dp(m + 1, vector<int>(n + 1));

      for ( int i = 1; i <= m; ++i)
        dp[i][0] = i;

      for ( int j = 1; j <= n; ++j)
        dp[0][j] = j;

      for ( int i = 1; i <=m; ++i)
        for ( int j = 1; j <= n; ++j)
          if (word1[i - 1] == word2[j - 1])
            dp[i][j] = dp[i - 1][j - 1];
          else
            dp[i][j] = min({dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]}) + 1;

      return dp[m][n];
    }

};


/*
 *
 *
 */































