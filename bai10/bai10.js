
let input = prompt("Mời bạn nhập vào một chuỗi bất kì : ");

let count = 0;

let inputCheck = input.trim();

for (let i=0;i<input.length;i++){
    if(inputCheck[i] === " "){
        count++;
    }
}

document.write("Chuỗi có số chữ là : " + count );