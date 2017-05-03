function convertToOldRoman(number) {
  var oldRomans = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}, roman = '', i;
  for (i in oldRomans) {
    while (number >= oldRomans[i]){
      roman += i;
      number -= oldRomans[i];
    }
  }
  return roman;
}

module.exports = convertToOldRoman;
