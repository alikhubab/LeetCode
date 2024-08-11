class RegionsBySlashesByDisjointSetTriangles {
    fun regionBySlashes(grid: Array<String>): Int{

        val gridSize = grid.size
        val totalTriangles = gridSize * gridSize * 4

        val parentArray = IntArray(totalTriangles){-1}

        var regionCount = totalTriangles

        for (row in 0 until gridSize){
            for (col in 0 until gridSize){
                if(row > 0){
                    regionCount -= unionTriangles(parentArray,
                        getTriangleIndex(gridSize, row -1 , col, 2),
                        getTriangleIndex(gridSize, row, col, 0),
                        )
                }
                if(col > 0){
                    regionCount -= unionTriangles(parentArray,
                        getTriangleIndex(gridSize, row, col-1, 1),
                        getTriangleIndex(gridSize, row, col, 3),
                        )
                }
                if(grid[row][col] != '/'){
                    regionCount -= unionTriangles(parentArray,
                        getTriangleIndex(gridSize, row, col, 0),
                        getTriangleIndex(gridSize, row, col, 1),
                        )
                    regionCount -= unionTriangles(parentArray,
                        getTriangleIndex(gridSize, row, col, 2),
                        getTriangleIndex(gridSize, row, col, 3),
                        )
                }
                if(grid[row][col] != '\\'){
                    regionCount -= unionTriangles(parentArray,
                        getTriangleIndex(gridSize, row, col, 0),
                        getTriangleIndex(gridSize, row, col, 3),
                    )
                 regionCount -= unionTriangles(parentArray,
                        getTriangleIndex(gridSize, row, col, 2),
                        getTriangleIndex(gridSize, row, col, 1),
                    )
                }
            }
        }
        return regionCount
    }


    private fun getTriangleIndex(gridSize: Int, row: Int, col: Int, triangleNumber: Int) : Int{
        return (gridSize * row + col) * 4 + triangleNumber
    }

   private fun unionTriangles(parentArray: IntArray, x: Int, y: Int  ): Int {
        val parentX = findParent(parentArray, x)
        val parentY = findParent(parentArray, y)

        if(parentX != parentY){
            parentArray[parentX] = parentY
            return 1
        }
        return 0
    }

    private fun findParent(parentArray: IntArray, x: Int): Int {
        if (parentArray[x] == -1)
            return x
        parentArray[x] = findParent(parentArray, parentArray[x])
        return parentArray[x]
    }
}
