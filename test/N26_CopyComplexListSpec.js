'use strict';

describe("面试题26：复杂链表的复制", function() {

  // 1. 功能测试
  it("sibling指向自身", function() {
    var node = new ComplexListNode(1);
    var node2 = new ComplexListNode(2);
    node.next = node2;
    node.sibling = node;
    node2.sibling = node2;

    var cloned = copyComplexList(node);
    expect(cloned.val).toBe(1);
    expect(cloned.next.val).toBe(2);
    expect(cloned.sibling).toBe(cloned);
    expect(cloned.next.sibling).toBe(cloned.next);

    expect(cloned).not.toBe(node);
  });

  it("两个节点的sibling形成环状", function() {
    var node = new ComplexListNode(1);
    var node2 = new ComplexListNode(2);
    node.next = node2;
    node.sibling = node2;
    node2.sibling = node;

    var cloned = copyComplexList(node);
    expect(cloned.val).toBe(1);
    expect(cloned.next.val).toBe(2);
    expect(cloned.sibling).toBe(cloned.next);
    expect(cloned.next.sibling).toBe(cloned);

    expect(cloned).not.toBe(node);
  });

  it("链表只有一个节点", function() {
    var node = new ComplexListNode(1);
    node.sibling = node;

    var cloned = copyComplexList(node);
    expect(cloned.val).toBe(1);
    expect(cloned.sibling).toBe(cloned);

    expect(cloned).not.toBe(node);
  });

  // 2. 边界值
  it("空链表", function() {
    expect(copyComplexList(null)).toBe(null);
  });

});
