const findNumberOfIslands = (grid) => {
    const gridWidth = grid[0].length
    const gridHeight = grid.length

    let islandCount = gridWidth * gridHeight
    const parentArray = new Array(gridWidth * gridHeight).fill(-1)

    for (let row = 0; row < gridHeight; row++) {
        for (let col = 0; col < gridWidth; col++) {
            if(grid[row][col] === 0){
                islandCount--
                continue
            }
            if(col < gridWidth -1 && grid[row][col+1] === 1){
                islandCount-= unionIslands(parentArray, getIslandIndex(row, col, gridWidth),
                    getIslandIndex(row, col+1, gridWidth),
                    )
            }
            if(row < gridHeight-1  && grid[row + 1][col] ===1){
                islandCount-= unionIslands(parentArray, getIslandIndex(row, col, gridWidth),
                    getIslandIndex(row + 1, col, gridWidth),
                    )
            }
        }
    }
    return islandCount
}


const getIslandIndex = (row, col, gridWidth) => {
    return (row * gridWidth) + col
}

const unionIslands = (parentArray, x, y) => {
    const parentX = findParent(parentArray, x)
    const parentY = findParent(parentArray, y)
    if(parentX === parentY){
        return 0
    }
    parentArray[parentX] = parentY
    return 1
}

const findParent = (parentArray, x) => {
    if(parentArray[x] === -1)
        return x
    parentArray[x] = findParent(parentArray, parentArray[x])
    return parentArray[x]
}

console.log(findNumberOfIslands([
        [1,1,0,0,0],
        [1,1,0,0,0],
        [0,0,1,0,0],
        [0,0,0,1,1]
]), "****")

