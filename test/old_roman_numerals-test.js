const convertToOldRoman = require('../old_roman_numerals')
const expect = require('chai').expect

describe('coverts numbers to romans function', function(){
  it('returns the roman numeral equivalent for a given integer', function(){
    expect(convertToOldRoman(4)).to.eq("IIII")
    expect(convertToOldRoman(83)).to.eq("LXXXIII")
    expect(convertToOldRoman(136)).to.eq("CXXXVI")
    expect(convertToOldRoman(2436)).to.eq("MMCCCCXXXVI")
  })
})
