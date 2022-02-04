//https://www.acmicpc.net/problem/10818


let num = [20, 10, 35, 30, 7]
let max, min = 0

for (let item of num) {
    if (max < item || max === 0) {
        max = item
    }
}

for (let item of num) {
    if (min > item || min === 0) {
        min = item
    }
}

/*
    결과 혹은 임시저장할것을 먼저 선언한다. 
*/
let min_result = 0
for (let i = 0; i < num.length; i++) {
    if (min_result > num[i] || i === 0) {
        min_result = num[i]
    }
}

console.log(min_result)
console.log(max + " " + min)

//// --- shot code
let max_shot_code = num.reduce((previousValue, currentValue) => previousValue > currentValue ? previousValue : currentValue)
let min_shot_code = num.reduce((previousValue, currentValue) => previousValue < currentValue ? previousValue : currentValue)

// console.log(`max : ${max_shot_code} min : ${min_shot_code}`)


let max_shot_code2 = num.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue))
let min_shot_code2 = num.reduce((previousValue, currentValue) => Math.min(previousValue, currentValue))
// console.log(`max : ${max_shot_code2} min : ${min_shot_code2}`)