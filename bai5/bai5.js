
let firstNumber = prompt("Mời bạn nhập số đầu tiên :");

let secondNumber = prompt("Mời bạn nhập số thứ hai :");

if (+firstNumber % +secondNumber === 0) {
    alert("firstNumber là bội số của secondNumber");
} else {
    alert("firstNumber không là bội số của secondNumber");
}