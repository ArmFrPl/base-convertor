function convertToBinary(num) {
  let result = '';

  for (let i = num; i > 0; i = Math.floor(i / 2)){
    result += i % 2;
  }

  return result.split("").reverse().join("");
}

function convertToHexa(num) {

  if (num < 0) {
    num += 0xFFFFFFFF + 1;
  }

  let result = '';
  let vals = ["A", "B", "C", "D", "E", "F"];

  for (let i = num; i > 0; i = Math.floor(i / 16)){
    if(i % 16 >= 10) {
      result += vals[i % 16 - 10];
    }else {
      result += i % 16;
    }
  }
  return result.split("").reverse().join("");
}

module.exports = {
  convertToHexa,
  convertToBinary
};