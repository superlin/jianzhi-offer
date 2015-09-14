/**
 * 面试题21：最小栈
 *
 * 定义最小栈，实现能够得到最小值的方法min，是的min、pop、push的复杂度都是O(1)
 */

'use strict';

function MinStack() {
	this.minval = false;
	this.vals = [];
}

MinStack.prototype.min = function() {
	return this.minval;
};

MinStack.prototype.pop = function() {
	if (this.vals.length === 0) {
		return false;
	}

	var val = this.vals.pop(),
		res;
	if (val < 0) {
		res = this.minval;
		this.minval -= val;
		return res;
	} else {
		return this.minval + val;
	}
};

MinStack.prototype.push = function(val) {
	if (this.vals.length === 0) {
		this.vals.push(0);
		this.minval = val;
	} else {
		this.vals.push(val - this.minval);
		if (val < this.minval) {
			this.minval = val;
		}
	}
};
