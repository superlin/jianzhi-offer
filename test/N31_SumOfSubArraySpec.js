'use strict';

describe("面试题31：连续字数组的最大和", function() {

  // 1. 功能测试
  it("数组中有正数和负数", function() {
    expect(findGreatestSum([1,-2,3,10,-4,7,2,-5])).toBe(18);
  });

  it("数组中全是负数", function() {
    expect(findGreatestSum([-2,-5,-3,-1,-4,-7,-12,-15])).toBe(-1);
  });

  it("数组中全是正数", function() {
    expect(findGreatestSum([2,5,3,1,4,7,12,15])).toBe(49);
  });

  // 2. 边界值
  it("空数组", function() {
    expect(findGreatestSum([])).toBe(false);
  });

  it("null", function() {
    expect(findGreatestSum(null)).toBe(false);
  });

});
