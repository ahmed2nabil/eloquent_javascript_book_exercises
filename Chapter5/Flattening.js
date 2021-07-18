function flatten(arr) {
return arr.reduce((a , b) => a.concat(b),[]);
}

let arrays = [[1,2,3],[10,20],[23,50]];

console.log(flatten(arrays));