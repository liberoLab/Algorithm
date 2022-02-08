//https://www.acmicpc.net/problem/2750

let arr = [5, 2, 3, 4, 1]
let num = arr[0]

/*
기본 정렬
array.sort();

내림차순 오름 차순 방법
array.sort(function (a,b){
return a - b; 오름차순
return b - a; 내림차순
})
*/
arr.sort(function (a, b) {
    return a - b;
});

console.log(arr);