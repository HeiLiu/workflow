const expect = require('chai').expect
const { add } = require('../index')

describe('hello-npm-script', () => {
  // 方方面面都考虑进去
  describe('#add', () => {
    it('should return sum when param are numbers', () => {
      expect(add(1, 3)).to.equal(4)
      expect(add(2, 5)).to.equal(7)
    })
    it('should return NAN when param is invalid', () => {
      // expect(isNaN(add(0, 's'))).to.be.ok
      expect(isNaN(add(1, '2'))).to.equal(true)
    })
  })
})