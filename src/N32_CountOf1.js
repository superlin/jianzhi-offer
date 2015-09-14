/**
 * 面试题32：从1到n的整数中1出现的次数
 *
 * 参数：整数n，求1到n这n个十进制整数中1出现的次数
 */

'use strict';

function countOf1(n) {
	if (n <= 0) {
		return 0;
	}

	// 数字转化为字符串处理
	n = n + "";

	var first = n[0] - '0',
		len = n.length;

	// 只有一位数，且大于0，则只有一个1
	if (len === 1 && first > 0) {
		return 1;
	}

	// 例如输入21345，可以分为1-1345和1346-21345
	// 1.（最到位）1346-21345的最高位出现1的情况为10000-19999，共10000个
	// 如果最高位为1，例如输入12345，当前段为1346-11345，最高位只有10000-11345有1，共1345+1=1346个
	// 2.（除了最高位之外）分段为1346-11345,11346-21345，每段10000个数，由于不考虑最高位，相当于00000-10000和10000-20000
	// 选定某一位为1，其余三位可以是0-9的任意数，因此每段4*10e3=4000个，段数为最高位的大小，上面例子最高位为2，即段数2
	// 3.按前面的方法递归计算剩余的1-1345的1的个数
	var numFirstDigit = 0,
		remain = parseInt(n.slice(1), 10);

	if (first > 1) {
		numFirstDigit = powerBase10(len - 1);
	} else if (first === 1) {
		numFirstDigit = remain + 1;
	}

	var numFirstDigits = first * (len - 1) * powerBase10(len - 2),
		numRecursive = countOf1(remain);

	return numFirstDigit + numFirstDigits + numRecursive;
}

function powerBase10(n) {
	var res = 1;
	for (var i = 0; i < n; i++) {
		res *= 10;
	}

	return res;
}
