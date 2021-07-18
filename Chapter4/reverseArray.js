function reverseArrayinPlace(arr) {
    let temp =0;
    for(let i = 0;i<arr.length/2;i++) {
        temp = arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
}

let arr = [1,2,3,4,5,20,100];
console.log(arr);
reverseArrayinPlace(arr);
console.log(arr);