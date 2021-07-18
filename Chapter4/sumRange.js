function range(start,end,step = 1) {
    let arr = [];
    if(step > 0 )
    {
        for(let i = start;i<=end;i+= step) {
            arr.push(i);
        }
    }
    else {
        for(let i = start;i>=end;i+= step) {
            arr.push(i);
        }
    }
    return arr;
}

function sum(arr) {
    let temp = 0;
    for(let ele of arr) {
        temp += ele;
    }
    return temp;
}
console.log(range(1,10,2));
console.log(sum(range(1,10,2)));

console.log(range(5,2,-1));
console.log(sum(range(5,2,-1)));