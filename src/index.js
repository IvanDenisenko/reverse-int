module.exports = function reverse (n) {
  str = String(n);
  arr=str.split("");
  return (Number(arr.reverse().join("")))
}
