//https://www.acmicpc.net/problem/14681

let x = 12
let y = 5

if (x > 0 && y > 0) {
    console.log("Quadrant 1")
} else if (x < 0 && y > 0) {
    console.log("Quadrant 2")
} else if (x < 0 && y < 0) {
    console.log("Quadrant 3")
} else if (x > 0 && y < 0) {
    console.log("Quadrant 4")
} else {
    console.log("0")
}