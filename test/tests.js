const calculator = require('../calculator');
const expect = require('expect.js');

describe('calculator', () => {
  it('given no numbers, should just return 0', () => {
    expect(calculator('', 0));
  });

  it('given a single number, it should return the number itself', () => {
    expect(calculator('12')).to.be(12);
  });

  it('given some random set of numbers, it should return the right sum', () => {
    expect(calculator('1,2,3')).to.be(6);
  });

  it('give some numbers and a single one that is larger than 1000, it should be ignored', () => {
    expect(calculator('1,2,1000')).to.be(3);
  });

  it('given new lines a seperator, can handle the split as well', () => {
    expect(calculator('0\n2\n3')).to.be(5);
  });

  it('accept some random delimitter input that allows you to seek and change the delimitter output', () => {
    expect(calculator('//;\n0;2;3')).to.be(5);
  });

  it('accept some random delimitter with random length', () => {
    expect(calculator('//desudesu\n0desudesu2desudesu3')).to.be(5);
  });

  it('accept multiple delimitters of some random length given the amount of context changed', () => {
    expect(calculator('//[d][x]\n0d2x3')).to.be(5);
  });

  it('should throw an exception when the input has multiple delimitters in a row', () => {
    f = () => {
      calculator('//;\n1;2;;;;;');
    };
    expect(f).to.throwException();
  });

  it('should throw some exception if some number in the stream is negative', () => {
    f = () => {
      calculator('//;\n0;-2;3');
    };
    expect(f).to.throwException();
  });
});
