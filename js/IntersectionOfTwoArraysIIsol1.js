function intersect(num1, num2){
    const count1 = new Map();
    const count2 = new Map();

    for (const num of num1){
        count1.set(num, (count1.get(num) || 0) + 1 )
    }
    console.log('count1>>', count1)
    for(const num of num2){
        count2.set(num, (count2.get(num) || 0) + 1 )
    }

    const res = []

    for(const [num, cnt] of count1){
        if(count2.has(num)){
            const minCount =
                Math.min(cnt, count2.get(num))
            for(let i = 0; i <minCount; i++){
                res.push(num);
            }
        }
    }
    return res;
}

console.log(intersect([1,2,2, 3, 3,5], [2,2,3,5]))
