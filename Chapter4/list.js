function arrayToList(arr) {
    let list = null;
    for(let i = arr.length-1;i>=0;i--) {
        list = {value:arr[i],rest : list}; 
    }
return list;
}
function listToArray(list) {
    let arr = [];
while(list != null) {
arr.push(list.value);
list = list.rest;
}
return arr;
}
arr = [10,20,30];
console.log(arr);
console.log(arrayToList(arr));
console.log(listToArray(arrayToList(arr)));

function prepend(num,list){
    return {value:num,rest:list}
}
console.log(prepend(10,prepend(20,null)))

function nth(list ,index) {
if(!list) return undefined;
else if (index==0) return list.value;
else return nth(list.rest,index-1);
}

console.log(nth(arrayToList(arr),1));
