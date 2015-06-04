/**
 * 面试题18：树的子结构
 *
 * 输入两颗二叉树A和B，判断B是不是A的结构
 */

'use strict';

function hasSubTree(rootA, rootB) {
	if (rootA === null || rootB === null) {
		return false;
	}

	var found = false;

	if (rootA.val === rootB.val) {
		found = doesTree1HavaTree2(rootA, rootB);
	}

	if (!found) {
		found = hasSubTree(rootA.left, rootB);
	}

	if (!found) {
		found = hasSubTree(rootA.right, rootB);
	}

	return found;
}

function doesTree1HavaTree2(rootA, rootB) {
	if (rootB === null) {
		return true;
	}

	if (rootA === null) {
		return false;
	}

	if (rootA.val !== rootB.val) {
		return false;
	}

	return doesTree1HavaTree2(rootA.left, rootB.left) && doesTree1HavaTree2(rootA.right, rootB.right);
}
