const add = require('../calc.js'),
      expect = require('chai').expect;

describe('加法单元测试',function(){
  it('0+0=0',function(){
    expect(add(0,0)).to.be.equal(0);
  });
  it('1+0=0',function(){
    expect(add(1,0)).to.be.equal(1);
  });
})
