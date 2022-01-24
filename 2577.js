let a = 150
let b = 266
let c = 427

/*
let total = a * b * c
let strTotal = new String(total)
let count = 0
for (let item of strTotal) {
    //17037300
    if (item === "0") {
        count++
    }
}
console.log(count)
*/

let total = a * b * c
let strTotal = new String(total)
let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//17037300
for (let i = 0; i < 10; i++) {
    let strnum = num[i]
    //console.log(z)
    let count = 0
    for (let item of strTotal) {
        //console.log("숫자", item)
        if (strnum === item) {
            count++
        }
    }
    console.log(count)
}
