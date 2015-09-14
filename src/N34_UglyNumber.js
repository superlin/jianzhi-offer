/**
 * 面试题34：丑数
 *
 * 只包含因子2,3,5的数称之为丑数，求按从大到小排列的第n个丑数
 */

'use strict';

function getUglyNumber(index) {
	if (index <= 0) {
		return 0;
	}

	var uglyNums = [1],
		mult2 = 0,
		mult3 = 0,
		mult5 = 0,
		min, len;

	while (uglyNums.length < index) {
		min = Math.min(uglyNums[mult2] * 2, uglyNums[mult3] * 3, uglyNums[mult5] * 5);
		uglyNums.push(min);

		len = uglyNums.length;
		while (uglyNums[mult2] * 2 <= uglyNums[len - 1]) {
			++mult2;
		}
		while (uglyNums[mult3] * 3 <= uglyNums[len - 1]) {
			++mult3;
		}
		while (uglyNums[mult5] * 5 <= uglyNums[len - 1]) {
			++mult5;
		}
	}

	return uglyNums[uglyNums.length - 1];
}
