class RegionsBySlashes {
    val DIRECTIONS = listOf(
        Pair(0,1),
        Pair(0,-1),
        Pair(1,0),
        Pair(-1,0),
    )
    fun regionsBySlashes(grid: Array<String>): Int{
        val gridSize = grid.size

        val expandedGrid = Array(gridSize * 3){IntArray(gridSize * 3)}

        for (i in grid.indices){
            for (j in grid.indices){
                val baseRow = i * 3
                val baseCol = j * 3

                when (grid[i][j]){
                    '\\' -> {
                        expandedGrid[baseRow][baseCol] = 1
                        expandedGrid[baseRow + 1][baseCol + 1] = 1
                        expandedGrid[baseRow + 2][baseCol + 2] = 1
                    }
                    '/' -> {
                        expandedGrid[baseRow][baseCol+2] = 1
                        expandedGrid[baseRow+1][baseCol+1] = 1
                        expandedGrid[baseRow+2][baseCol] = 1
                    }
                }
            }
        }
        var numberOfRegions = 0
        for (i in 0 until  grid.size * 3){
            for(j in 0 until gridSize * 3){
                if(expandedGrid[i][j] == 0){
                    floodFill(expandedGrid, i, j)
                    numberOfRegions++
                }
            }
        }
        return numberOfRegions
    }

    fun floodFill(expandedGrid: Array<IntArray>, row: Int, col: Int){
        val queue = ArrayDeque<Pair<Int, Int>>()
        queue.add(Pair(row, col))
        expandedGrid[row][col] = 1

        while (queue.isNotEmpty()){
            val currentCell = queue.removeFirst()
            for (d in DIRECTIONS){
                val newRow = currentCell.first + d.first
                val newCol = currentCell.second + d.second

                if(isValidCell(expandedGrid, newRow, newCol)){
                    expandedGrid[newRow][newCol] = 1
                    queue.add(Pair(newRow, newCol))
                }
            }
        }
    }

    fun isValidCell(expandedGrid: Array<IntArray>, row: Int, col: Int): Boolean{
        val n = expandedGrid.size
        return row in 0..<n && col in 0 ..< n && expandedGrid[row][col] == 0
    }
}
