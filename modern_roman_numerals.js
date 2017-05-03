function convertToNewRoman(number) {
  var newRomans = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}, roman = '', i;
  for (i in newRomans) {
    while (number >= newRomans[i]){
      roman += i;
      number -= newRomans[i];
    }
  }
  return roman;
}

module.exports = convertToNewRoman;
