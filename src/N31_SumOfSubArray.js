/**
 * 面试题31：连续字数组的最大和
 *
 * 整型数组，有正数有负数，数组中一个或者连续多个整数组成一个子数组
 * 求所有子数组的和的最大值，时间复杂度O(n)
 */

'use strict';

function findGreatestSum(nums) {
	if (nums === null || nums.length <= 0) {
		return false;
	}

	var currentSum = 0,
		greatestSum = -Infinity;

	nums = Array.prototype.slice.call(nums, 0);

	nums.forEach(function(e) {

		if (currentSum < 0) {
			currentSum = e;
		} else {
			currentSum += e;
		}

		if (currentSum > greatestSum) {
			greatestSum = currentSum;
		}
	});

	return greatestSum;
}
