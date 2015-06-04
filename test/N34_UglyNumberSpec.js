'use strict';

describe("面试题34：丑数", function() {

  it("功能测试", function() {
    expect(getUglyNumber(2)).toBe(2);
    expect(getUglyNumber(6)).toBe(6);
    expect(getUglyNumber(9)).toBe(10);
  });

  it("边界值", function() {
    expect(getUglyNumber(1)).toBe(1);
    expect(getUglyNumber(-1)).toBe(0);
  });

  it("性能测试", function() {
    expect(getUglyNumber(1500)).toBe(859963392);
  });

});
