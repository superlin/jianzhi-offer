'use strict';

describe("面试题20：顺时针打印矩阵", function() {

  // 1. 功能测试
  it("矩阵规模m*n", function() {
    var arr = [[1,2,3], [2,3,4], [3,4,5], [4,5,6]];
    expect(printMatrix(arr)).toEqual([1,2,3,4,5,6,5,4,3,2,3,4]);
  });

  it("矩阵规模1*n", function() {
    var arr = [[1,2,3]];
    expect(printMatrix(arr)).toEqual([1,2,3]);
  });

  it("矩阵规模m*1", function() {
    var arr = [[1],[2],[3]];
    expect(printMatrix(arr)).toEqual([1,2,3]);
  });

  it("矩阵规模1*1", function() {
    var arr = [[1]];
    expect(printMatrix(arr)).toEqual([1]);
  });

  // 2. 边界值
  it("边界值", function() {
    expect(printMatrix(null)).toBe(false);
    expect(printMatrix([])).toBe(false);
    expect(printMatrix([[]])).toBe(false);
  });

});
