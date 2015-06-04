/**
 * 面试题10：二进制中1的个数
 *
 * 描述：计算一个数字的二进制表示时1的个数
 * 例如9的二进制表示为1001，那么1的个数为2
 */

'use strict';

function numberOf1(num) {
	var count = 0;
	var base = 1;
	while (base) {
		if (num & base) {
			count ++;
		}
		// >>>操作用于unsigned int
		base = (base << 1) >>> 0;
	}

	return count;
}
