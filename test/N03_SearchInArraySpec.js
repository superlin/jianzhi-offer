'use strict';

describe("面试题03：二维数组中的查找", function() {
	var arr = [
  		[1,2,8,9],
  		[2,4,9,12],
  		[4,7,10,13],
  		[6,8,11,15]
  	];

  // 1. 未找到目标值
  it("小于最小值", function() {
    expect(searchInArray(arr, 0)).toBe(false);
  });

  it("大于最大值", function() {
    expect(searchInArray(arr, 20)).toBe(false);
  });

  it("最小值与最小值之间，但是找不到目标值", function() {
    expect(searchInArray(arr, 5)).toBe(false);
  });

  // 2. 找到目标值
  it("找到目标值，且目标值是最小值", function() {
    expect(searchInArray(arr, 1)).toBe(true);
  });

  it("找到目标值，且目标值是最大值", function() {
    expect(searchInArray(arr, 15)).toBe(true);
  });

  it("找到目标值，且目标值位于最大值最小值之间", function() {
    expect(searchInArray(arr, 7)).toBe(true);
  });

  // 3. 边界值
  it("空数组", function() {
    expect(searchInArray([], 7)).toBe(false);
  });

  // 4. 特殊值
   it("数组为null", function() {
    expect(searchInArray(null, 7)).toBe(false);
  });

});
