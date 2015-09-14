/**
 * 面试题20：顺时针打印矩阵
 *
 * 输入一个矩阵，从里往外顺时针打印矩阵
 */

'use strict';

function printMatrix(arr) {
	if (arr === null || arr.length <= 0 || arr[0].length <= 0) {
		return false;
	}

	var res = [],
		start = 0,
		rows = arr.length,
		cols = arr[0].length,
		i, j, remrows, remcols, endx, endy;

	while (rows > start * 2 && cols > start * 2) {
		remrows = rows - 2 * start;
		remcols = cols - 2 * start;

		endx = cols - 1 - start;
		endy = rows - 1 - start;
		// 从左到右一行
		if (remrows >= 1) {
			for (i = start; i <= endx; i++) {
				res.push(arr[start][i]);
			}
		}
		// 从上到下一列
		if (remcols >= 1) {
			for (j = start + 1; j <= endy; j++) {
				res.push(arr[j][endx]);
			}
		}
		// 从右到左一行
		if (remrows >= 2) {
			for (i = endx - 1; i >= start; i--) {
				res.push(arr[endy][i]);
			}
		}
		// 从下到上一列
		if (remcols >= 2) {
			for (j = endy - 1; j >= start + 1; j--) {
				res.push(arr[j][start]);
			}
		}
		start++;
	}

	return res;
}
