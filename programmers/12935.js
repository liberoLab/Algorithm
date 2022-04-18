/*
제일 작은 수 제거하기
https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript
*/

function solution(arr) {
  arr.sort((a, b) => b - a);
  if (arr.length != 1) {
    arr.pop();
  } else {
    arr[0] = -1;
  }
  return arr;
}

console.log(solution([4, 3, 2, 1]));
