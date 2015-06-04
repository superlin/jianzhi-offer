'use strict';

describe("面试题18：树的子结构", function() {
  var rootA = new TreeNode(8);
  var node2 = new TreeNode(8);
  var node3 = new TreeNode(7);
  var node4 = new TreeNode(9);
  var node5 = new TreeNode(2);
  var node6 = new TreeNode(4);
	var node7 = new TreeNode(7);

  rootA.left = node2;
  rootA.right = node3;
  node2.left = node4;
  node2.right = node5;
  node5.left = node6;
  node5.right = node7;

  // 8-------
  // |      |
  // 8---   7
  // |  |
  // 9  2---
  //    |  |
  //    4  7

  // 1. 功能测试
  it("B是A的子树", function() {
    var rootB = new TreeNode(8);
    var node10 = new TreeNode(9);
    var node11 = new TreeNode(2);
    rootB.left = node10;
    rootB.right = node11;

    // 8---
    // |  |
    // 9  2

    expect(hasSubTree(rootA, rootB)).toBe(true);
  });

  it("B不是A的子树", function() {
    var rootB = new TreeNode(8);
    var node10 = new TreeNode(9);
    var node11 = new TreeNode(1);
    rootB.left = node10;
    rootB.right = node11;

    // 8---
    // |  |
    // 9  1

    expect(hasSubTree(rootA, rootB)).toBe(false);
  });

  // 2. 边界值
  it("其中一棵树null或都为null", function() {
    expect(hasSubTree(rootA, null)).toBe(false);
    expect(hasSubTree(null, null)).toBe(false);
    expect(hasSubTree(null, rootA)).toBe(false);
  });

  it("B没有左子树", function() {
    var rootB = new TreeNode(8);
    var node10 = new TreeNode(8);
    var node11 = new TreeNode(9);

    // 8
    // |
    // 8
    // |
    // 9

    rootB.left = node10;
    node10.left = node11;

    expect(hasSubTree(rootA, rootB)).toBe(true);
  });

  it("B没有右子树", function() {
    var rootB = new TreeNode(8);
    var node10 = new TreeNode(7);
    var node11 = new TreeNode(9);
    rootB.right = node10;
    node10.right = node11;

    // 8---
    //    |
    //    7---
    //       |
    //       9

    expect(hasSubTree(rootA, rootB)).toBe(false);
  });

});
