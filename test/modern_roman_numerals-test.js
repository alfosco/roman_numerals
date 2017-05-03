const convertToNewRoman = require('../new_roman_numerals')
const expect = require('chai').expect

describe('coverts numbers to new romans function', function(){
  it('returns the new roman numeral equivalent for a given integer', function(){
    expect(convertToOldRoman(4)).to.eq("IIII")
    expect(convertToOldRoman(83)).to.eq("LXXXIII")
    expect(convertToOldRoman(136)).to.eq("CXXXVI")
    expect(convertToOldRoman(2436)).to.eq("MMCCCCXXXVI")
  })
})
