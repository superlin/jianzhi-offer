'use strict';

describe("面试题32：从1到n的整数中1出现的次数", function() {

  it("功能测试", function() {
    expect(countOf1(5)).toBe(1);
    expect(countOf1(10)).toBe(2);
    expect(countOf1(55)).toBe(16);
    expect(countOf1(99)).toBe(20);
  });

  it("边界值", function() {
    expect(countOf1(0)).toBe(0);
    expect(countOf1(1)).toBe(1);
  });

  it("性能测试", function() {
    expect(countOf1(21345)).toBe(18821);
  });

});
