/**
 * 面试题26：复杂链表的复制
 *
 * 复杂链表的每个节点包含指向下一个节点的引用-next
 * 和指向任意节点或null的引用-sibling
 */

'use strict';

function copyComplexList(root) {
	if (root === null ) {
		return null;
	}
	// 复制每个节点
	var node = root, ptr = null;

	while (node) {
		ptr = new ComplexListNode(node.val);
		ptr.next = node.next;
		node.next = ptr;

		node = ptr.next;
	}

	// 链接sibling
	var cloned = null;
	node = root;
	while (node) {
		cloned = node.next;
		if (node.sibling) {
			cloned.sibling = node.sibling.next;
		}
		node = cloned.next;
	}
	// 拆分链表
	var clonedRoot = null, clonedNode = null;
	node = root;

	if (node !== null) {
		clonedRoot = clonedNode = node.next;
		node.next = clonedNode.next;
		node = node.next;
	}

	while (node !== null) {
		clonedNode.next = node.next;
		clonedNode = clonedNode.next;
		node.next = clonedNode.next;
		node = node.next;
	}

	return clonedRoot;
}
