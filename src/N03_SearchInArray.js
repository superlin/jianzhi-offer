/**
 * 面试题03：二维数组中的查找
 *
 * 描述：每行从左到右递增，每列从上到下递增，查找该数组中是否有目标元素
 */

'use strict';

function searchInArray(arr, target) {
	if (!arr || arr.length <= 0 || !arr[0] || arr[0].length <= 0 || target === undefined) {
		return false;
	}

	var found = false,
		rows = arr.length,
		cols = arr[0].length,
		row = 0,
		col = cols - 1;

	while (row < rows && col >= 0) {
		if (arr[row][col] === target) {
			found = true;
			break;
		} else if (arr[row][col] > target) {
			--col;
		} else {
			++row;
		}
	}

	return found;
}
