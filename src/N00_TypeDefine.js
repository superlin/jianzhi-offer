'use strict';

/**
 * 树的节点定义
 */
function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

/**
 * 复杂节点的定义（面试题26）
 */
function ComplexListNode(val) {
	this.val = val;
	this.next = null;
	this.sibling = null;
}
