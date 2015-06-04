'use strict';

describe("面试题10：二进制中1的个数", function() {

  // 1. 正数
  it("小正数", function() {
    var num = 5;
    expect(numberOf1(num)).toBe(2);
  });

  it("大正数", function() {
    var num = 0x7FFFFFFF;
    expect(numberOf1(num)).toBe(31);
  });

  // 2. 负数
  it("小负数", function() {
    var num = 0x80000000;
    expect(numberOf1(num)).toBe(1);
  });

  it("大负数", function() {
    var num = 0xFFFFFFFF;
    expect(numberOf1(num)).toBe(32);
  });

  // 3. 0
  it("0", function() {
    var num = 0;
    expect(numberOf1(num)).toBe(0);
  });

});
