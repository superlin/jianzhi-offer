'use strict';

describe("面试题06：重建二叉树", function() {
  // 1. 普通二叉树
  it("不完全二叉树", function() {
    var root = reconstructTree([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6]);
    expect(root.left.left.val).toBe(4);
    expect(root.left.left.left).toBe(null);
  });

  it("完全二叉树", function() {
    var root = reconstructTree([1,2,4,5,3,6,7], [4,2,5,1,6,3,7]);
    expect(root.left.right.val).toBe(5);
    expect(root.right.left.left).toBe(null);
  });

  // 2. 特殊二叉树
  it("没有右子的二叉树", function() {
    var root = reconstructTree([1,2,3,4], [4,3,2,1]);
    expect(root.left.left.left.val).toBe(4);
  });

  it("没有左子的二叉树", function() {
    var root = reconstructTree([1,2,3,4], [1,2,3,4]);
    expect(root.right.right.right.val).toBe(4);
  });

  // 3. 特殊值
  it("先序或中序序列为null", function() {
    expect(reconstructTree(null, [1])).toBe(null);
    expect(reconstructTree([1], null)).toBe(null);
    expect(reconstructTree(null, null)).toBe(null);
  });

  it("先序或中序序列为空数组", function() {
    expect(reconstructTree([], [])).toBe(null);
  });

  it("先序和中序序列长度不一样", function() {
    expect(reconstructTree([1], [1,2])).toBe(null);
  });

  it("先序和中序序列不匹配", function() {
    // 使用匿名函数才能捕获，像前面的方式则不行
    expect(function(){
      reconstructTree([1], [2]);
    }).toThrow("先序和中序序列不匹配");

    expect(function(){
      reconstructTree([1,3], [1,2]);
    }).toThrow("先序和中序序列不匹配");
  });

});
