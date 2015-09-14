'use strict';

describe("面试题08：旋转数组中的最小数", function() {

  // 1. 功能测试
  it("严格递增的旋转数组", function() {
    var nums = [2, 3, 4, 0, 1];
    expect(minInRotatedArray(nums)).toBe(0);
  });

  it("非严格递增的旋转数组（有重复元素）", function() {
    var nums = [1, 1, 1, 0, 1];
    expect(minInRotatedArray(nums)).toBe(0);
  });

  // 2. 边界值测试
  it("只包含一个元素的旋转数组", function() {
    var nums = [1];
    expect(minInRotatedArray(nums)).toBe(1);
  });

  it("空的旋转数组", function() {
    var nums = [];
    expect(minInRotatedArray(nums)).toBe(false);
  });

  // 3. 特殊值测试
  it("空指针", function() {
    var nums = null;
    expect(minInRotatedArray(nums)).toBe(false);
  });

});
