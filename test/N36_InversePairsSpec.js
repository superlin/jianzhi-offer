'use strict';

describe("面试题36：数组中的逆序对", function() {

  // 1. 功能测试
  it("数组未排序", function() {
    expect(inversePairs([4, 2, 1, 3])).toBe(4);
  });

  it("数组升序", function() {
    expect(inversePairs([1, 2, 3, 4])).toBe(0);
  });

  it("数组降序", function() {
    expect(inversePairs([4, 3, 2, 1])).toBe(6);
  });

  // 2. 边界值
  it("数组中只有两个数", function() {
    expect(inversePairs([4, 3])).toBe(1);
    expect(inversePairs([3, 4])).toBe(0);
  });

  it("数组中只有一个数", function() {
    expect(inversePairs([1])).toBe(0);
  });

  it("空数组", function() {
    expect(inversePairs([])).toBe(0);
  });

  it("null", function() {
    expect(inversePairs(null)).toBe(0);
  });
});
