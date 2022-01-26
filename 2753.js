//윤년 조건
//1. 4의 배수 + 100의 배수 아님
//2. 400의 배수

let year = 1999

//year = year % 400 == 0 ? "1" : "0"

if (year % 400 == 0) {
    console.log(1)
} else if (year % 4 == 0 && year % 4 !== 0) {
    console.log(1)
} else {
    console.log(0)
}
