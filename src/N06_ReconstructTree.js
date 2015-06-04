/**
 * 面试题06：重建二叉树
 *
 * 输入二叉树的中序和先序遍历结果（数组），重建二叉树（假设不包含重复数字）
 * 二叉树节点定义见N00_TypeDefine.js
 */

'use strict';

function reconstructTree(preorder, inorder) {
	if (!preorder || !inorder || preorder.length !== inorder.length || preorder.length === 0) {
		return null;
	}

	function reconstruct(preorder, sp, ep, inorder, si, ei) {
		var rootVal = preorder[sp];
		var root = new TreeNode(rootVal);

		// 只有一个节点
		// 中序和先序值相等直接返回节点
		// 否则返回false
		if (sp === ep) {
			if (si === ei && preorder[sp] === inorder[si]) {
				return root;
			} else {
				throw "先序和中序序列不匹配";
			}
		}

		var rootIn = si;
		while (rootIn <= ei && inorder[rootIn] !== rootVal) {
			rootIn ++;
		}

		// 没找到匹配的中序根节点返回错误
		if (rootIn === ei && inorder[rootIn] !== rootVal) {
			throw "先序和中序序列不匹配";
		}

		var leftLen = rootIn - si;
		var leftPreEnd = sp + leftLen;

		// 构建左子树
		if (leftLen > 0) {
			root.left = reconstruct(preorder, sp + 1, leftPreEnd, inorder, si, rootIn - 1);
		}

		// 构建右子树
		if (leftLen < ep - sp) {
			root.right = reconstruct(preorder, leftPreEnd + 1, ep, inorder, rootIn + 1, ei);
		}

		return root;
	}

	return reconstruct(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
}

