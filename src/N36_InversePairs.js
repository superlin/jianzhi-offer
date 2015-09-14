/**
 * 面试题36：数组中的逆序对
 *
 * 数组中的两个数字如果前面的一个数字比后面的一个数字大，则这两个数字就组成一个逆序对
 * 输入一个数组，求这个数组中的逆序对的数目
 */

'use strict';

function inversePairs(nums) {
	if (nums === null || nums.length <= 0) {
		return 0;
	}

	nums = nums.slice(0);

	var copy = nums.slice(0);

	function countInversePairs(nums, copy, start, end) {
		if (start === end) {
			copy[start] = nums[start];
			return 0;
		}

		var len = Math.floor((end - start) / 2);

		// 主要思想归并排序
		// 注意copy和nums在下面两句中交换了位置
		// 主要是交换copy和nums的地位，来回复制
		// 这样可以省去归并排序中将部分有序的数组往回复制的过程
		// 但是最后的nums数组就不一定是有序的了（来回拷贝偶数次则nums有序，否则copy有序）
		// 这种方法理解不太容易
		var left = countInversePairs(copy, nums, start, start + len),
			right = countInversePairs(copy, nums, start + len + 1, end);

		// 可以将下面注释部分取消注释，并注释前面两句
		// 这样就和归并排序的过程一样，但是比较容易理解

		// var left = countInversePairs(nums, copy, start, start + len);
		// var right = countInversePairs(nums, copy, start + len + 1, end);

		var i = start + len,
			j = end,
			indexCopy = end,
			count = 0;

		while (i >= start && j >= start + len + 1) {
			if (nums[i] > nums[j]) {
				copy[indexCopy] = nums[i];
				count += j - start - len;
				i--;
			} else {
				copy[indexCopy] = nums[j];
				j--;
			}
			indexCopy--;
		}

		for (; i >= start; i--) {
			copy[indexCopy--] = nums[i];
		}

		for (; j >= start + len + 1; j--) {
			copy[indexCopy--] = nums[j];
		}

		// for (i = start; i <= end; i++) {
		// 	nums[i] = copy[i];
		// }

		return left + right + count;
	}

	return countInversePairs(nums, copy, 0, nums.length - 1);
}
