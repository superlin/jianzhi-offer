'use strict';

describe("面试题14：调整数组顺序使奇数位于偶数前面", function() {

  function isEven(num) {
    return num % 2 === 0;
  }

  // 1. 功能测试
  it("奇数偶数交替出现", function() {
    var nums = [1,2,3,4,5];
    reorderArray(nums, isEven);
    expect(nums).toEqual([1,5,3,4,2]);
  });

  it("奇数全在偶数前面", function() {
    var nums = [1,3,5,4,6,8];
    reorderArray(nums, isEven);
    expect(nums).toEqual([1,3,5,4,6,8]);
  });

  it("偶数全在奇数前面", function() {
    var nums = [2,4,6,3,5];
    reorderArray(nums, isEven);
    expect(nums).toEqual([5,3,6,4,2]);
  });

  // 2. 边界值
  it("数组为null", function() {
    expect(reorderArray(null, isEven)).toBe(false);
  });

  it("空数组", function() {
    expect(reorderArray([], isEven)).toBe(false);
  });

  it("数组只包含一个数字", function() {
    var nums = [1];
    reorderArray(nums, isEven);
    expect(nums).toEqual([1]);
  });

});
