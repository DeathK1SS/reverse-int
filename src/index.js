module.exports = function reverse (n) {
    let num = n.toString();
    let reversedString = num.split("").reverse().join("");
  return parseInt(reversedString);
}
