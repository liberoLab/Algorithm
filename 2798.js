//https://www.acmicpc.net/problem/2798

/*
https://www.acmicpc.net/problem/2798

첫째 줄에 카드의 개수 N(3 ≤ N ≤ 100)과 M(10 ≤ M ≤ 300,000)이 주어진다. 둘째 줄에는 카드에 쓰여 있는 수가 주어지며,
이 값은 100,000을 넘지 않는 양의 정수이다. 합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.

5장, 합은 21. [카드 값이 5,6,7,8,9]
*/

/*
let num = 21
let card = [5, 6, 7, 8, 9]
let max = 0
*/


let num = 500
let card = [93, 181, 245, 214, 315, 36, 185, 138, 216, 295]
let max = 0


//경우의 수로 찾기
for (let i = 0; i < card.length; i++) {
    //console.log(card[i])
    for (let j = i + 1; j < card.length; j++) {
        //console.log(card[j])
        for (let k = j + 1; k < card.length; k++) {
            //console.log(card[k])
            let sum = card[k] + card[j] + card[i];
            //console.log("sum", sum)
            if (sum > max && sum < num || sum == num) {
                max = sum
            }
        }
    }
} console.log("max", max)