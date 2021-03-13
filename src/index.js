module.exports = function reverse (n) {
  str = String(n);
  arr=str.split("");
  if (arr[0] =="-" ){
    arr.shift();
  }
  return (Number(arr.reverse().join("")))
}
