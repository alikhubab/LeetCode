/**
 * @param {string[]} grid
 * @return {number}
 */


// const st = // \/
//     / /
//     \/

var regionsBySlashes = function(grid) {
    let count = 0
    for (let i = 0; i < grid.length; i) {

        count++
        const _1 = grid[i][0]
        const _2 = grid[i][1]


        let _3
        let _4
        if(i !== grid.length-1){
            _3 = grid[i+1][0]
            _4 = grid[i+1][1]
        }


        if(i===grid.length-1){
            break
        }else i+=2

        if(_1 === '/')
            count++
        if(_2 === '\\')
            count++
        else if(_1=== "\\")
            count++

        if(i !== grid.length-1) {
            if (_3 === "\\")
                count++
            else if (_3 !== ' ' && (_1 === "\\" || _2 === '/'))
                count++
            if (_4 === "/")
                count++
            else if (_4 !== ' ' && (_2 === "/" || _1 === '\\'))
                count++
        }

    }
    console.log(count)
};

let grid = ["/\\", "\\/"]
grid = [" /","/ "]
grid = [" /","  "]
grid = ["/\\","\\/","/\\","\\/",]
grid = [" /\\"," \\/","\\  "]
console.log(regionsBySlashes(grid));
