
let input = prompt("Mời bạn nhập chữ bất kì : ");

let result = input[0].toUpperCase();

for (let i=1 ; i< input.length ; i++){
    result += input[i].toLowerCase();
}

document.write(result);