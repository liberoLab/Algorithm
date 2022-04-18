/*
행렬의 덧셈
https://programmers.co.kr/learn/courses/30/lessons/12950?language=javascript
*/

function solution(arr1, arr2) {
  let newArr1 = [];
  let newArr2 = [];
  let sum = [];
  let arrSum = [];
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr1 = arr1[i];
    newArr2 = arr2[i];
    for (let i = 0; i < newArr1.length; i++) {
      sum = newArr1[i] + newArr2[i];
      arrSum.push(sum);
    }
    answer.push(arrSum);
    arrSum = [];
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

/*
function solution(arr1, arr2) {
  return arr1.map((x, i) => x.map((y, j) => y + arr2[i][j]));
}
*/

/*
처음에 1번 예제 하드코딩 한것

function solution(arr1, arr2) {
  let newArr1 = [];
  let newArr2 = [];
  let newArr3 = [];
  let newArr4 = [];
  let sum = 0;
  let sum2 = 0;
  let sumArr = [];
  let sumArr2 = [];

  newArr1 = arr1[0];
  newArr2 = arr2[0];
  newArr3 = arr1[1];
  newArr4 = arr2[1];

  console.log(newArr1);
  console.log(newArr2);
  console.log(newArr3);
  console.log(newArr4);

  sum = newArr1[0] + newArr2[0];
  sumArr.push(sum);
  sum = newArr1[1] + newArr2[1];
  sumArr.push(sum);

  sum = newArr3[0] + newArr4[0];
  sumArr2.push(sum);
  sum = newArr3[1] + newArr4[1];
  sumArr2.push(sum);

  console.log(sumArr);
  console.log(sumArr2);

  let answer = [];
  answer.push(sumArr, sumArr2);

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
*/
