//https://www.acmicpc.net/problem/4344

/*
let grades1 = [50, 50, 70, 80, 100]
let grades2 = [100, 95, 90, 80, 70, 60, 50]
let grades3 = [70, 90, 80]
let grades4 = [70, 90, 81]
let grades5 = [100, 99, 98, 97, 96, 95, 94, 93, 91]

let sum = 0
let temp = 0
for (item of grades1) {
    sum += item
}
sum = sum / grades1.length
console.log(sum)

for (item of grades1) {
    if (item > sum) {
        temp += 1
    }
}
console.log(temp)
total = temp / grades1.length * 100

console.log(total.toFixed(3), "%")
*/

let grades1 = [50, 50, 70, 80, 100]
let grades2 = [100, 95, 90, 80, 70, 60, 50]
let grades3 = [70, 90, 80]
let grades4 = [70, 90, 81]
let grades5 = [100, 99, 98, 97, 96, 95, 94, 93, 91]
let total = [grades1, grades2, grades3, grades4, grades5]
let value = 0


for (avg of total) {
    let sum = 0
    let temp = 0
    for (item of avg) {
        sum += item
    }
    sum = sum / avg.length

    for (item of avg) {
        if (item > sum) {
            temp += 1
        }
    }

    value = temp / avg.length * 100

    console.log(value.toFixed(3), "%")
}