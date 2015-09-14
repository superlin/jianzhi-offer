/**
 * 面试题14：调整数组顺序使奇数位于偶数前面
 *
 * 输入一个整数数组，使奇数位于数组前半部分，偶数位于后半部分
 */

'use strict';

function reorderArray(nums, check) {
	if (!nums || nums.length === 0) {
		return false;
	}

	var begin = 0,
		end = nums.length - 1,
		temp;

	while (begin < end) {

		while (begin < end && !check(nums[begin])) {
			begin++;
		}

		while (begin < end && check(nums[end])) {
			end--;
		}

		if (begin < end) {
			temp = nums[begin];
			nums[begin] = nums[end];
			nums[end] = temp;
		}
	}
}
