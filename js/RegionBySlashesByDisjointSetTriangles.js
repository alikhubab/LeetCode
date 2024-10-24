

function regionsBySlashes(grid){
    const gridSize = grid.length
    const totalTriangles = gridSize * gridSize * 4
    let numberOfRegions = totalTriangles

    const parentArray = new Array(totalTriangles).fill(-1)

    for(let row=0; row <gridSize; row ++)
        for (let col=0; col< gridSize; col++){
            if(row>0){
                numberOfRegions-= unionTriangles(parentArray,
                    getTriangleIndex(gridSize, row -1, col, 2),
                    getTriangleIndex(gridSize, row , col, 0),
                )
            }
            if(col>0)
                numberOfRegions-= unionTriangles(parentArray,
                    getTriangleIndex(gridSize, row, col-1, 1),
                    getTriangleIndex(gridSize, row, col, 3)
                )

            if(grid[row][col] !== '/'){
                numberOfRegions-=unionTriangles(parentArray,
                    getTriangleIndex(gridSize, row, col, 0),
                    getTriangleIndex(gridSize, row, col, 1),
                )
                numberOfRegions-=unionTriangles(parentArray,
                    getTriangleIndex(gridSize, row, col, 2),
                    getTriangleIndex(gridSize, row, col, 3),
                )
            }
            if(grid[row][col] !== '\\'){
                numberOfRegions-=unionTriangles(parentArray,
                    getTriangleIndex(gridSize, row, col, 0),
                    getTriangleIndex(gridSize, row, col, 3),
                )
                numberOfRegions-=unionTriangles(parentArray,
                    getTriangleIndex(gridSize, row, col, 2),
                    getTriangleIndex(gridSize, row, col, 1),
                )
            }
        }
    return numberOfRegions
}


function getTriangleIndex(gridSize, row, col, triangleNumber){
        return (gridSize * row + col) * 4 + triangleNumber
    }

    function unionTriangles(parentArray, x, y){
        const parentX = findParent(parentArray, x)
        const parentY = findParent(parentArray, y)

        if(parentX === parentY){
            return 0
        }

        parentArray[parentX] = parentY
        return 1
    }

    function findParent(parentArray, x){
        if(parentArray[x] === -1)
            return x
        parentArray[x] = findParent(parentArray, parentArray[x])
        return parentArray[x]
    }



console.log(regionsBySlashes(["/\\","\\/"]))
// console.log(regionsBySlashes([" /","/ "]))
