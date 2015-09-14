/**
 * 面试题08：旋转数组中的最小数
 *
 * 描述：将一个数组最开始的若干元素搬到数组的末尾，称之为数组的旋转
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如数组{3，4,5,1,2}是{1,2,3,4,5}的一个旋转
 */

'use strict';

function minInRotatedArray(nums) {
	if (!nums || nums.length <= 0) {
		return false;
	}

	var left = 0,
		right = nums.length - 1,
		mid = left,
		mustloop = false;

	while (nums[left] >= nums[right]) {
		if (right - left === 1) {
			mid = right;
			break;
		}

		mid = Math.floor((left + right) / 2);

		// 左边、中间、右边都相等时，无法判断最小值的位置，只能遍历
		if (nums[left] === nums[right] && nums[mid] === nums[right]) {
			mustloop = true;
			break;
		}

		if (nums[mid] >= nums[left]) {
			left = mid;
		} else {
			right = mid;
		}
	}

	// 需要遍历
	if (mustloop) {
		mid = left;
		for (var i = left + 1; i <= right; i++) {
			if (nums[mid] > nums[i]) {
				mid = i;
			}
		}
	}

	return nums[mid];
}
