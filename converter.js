function convertToBinary(num) {
  let arr = [];

  for (let i = num; i > 0; i = Math.floor(i / 2)){
    arr.push(i % 2);
  }

  let result = '';
  for (let j = arr.length - 1; j >= 0; j--) {
    result += arr[j];
  }
  return result;
}

function convertToHexa(num) {

  if (num < 0) {
    num += 0xFFFFFFFF + 1;
  }

  let arr = [];
  let vals = ["A", "B", "C", "D", "E", "F"];

  for (let i = num; i > 0; i = Math.floor(i / 16)){
    if(i % 16 >= 10) {
      arr.push(vals[i % 16 - 10]);
    }else {
      arr.push(i % 16);
    }
  }

  let result = '';
  for (let j = arr.length - 1; j >= 0; j--) {
    result += arr[j];
  }
  return result;
}

module.exports = {
  convertToHexa,
  convertToBinary
}