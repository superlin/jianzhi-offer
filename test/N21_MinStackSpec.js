'use strict';

describe("面试题21：最小栈", function() {
	var stack = new MinStack();
  stack.push(2);
  stack.push(1); // [2,1]

  it("新压入的数字比最小值大", function() {
    stack.push(3); // [2,1,3]
    expect(stack.min()).toBe(1);
  });

  it("新压入的数字比最小值小", function() {
    stack.push(0); // [2,1,3,0]
    expect(stack.min()).toBe(0);
  });

  it("新弹出的数字是最小值", function() {
    var val = stack.pop(); // [2,1,3]
    expect(val).toBe(0);
    expect(stack.min()).toBe(1);
  });

  it("新弹出的数字不是是最小值", function() {
    var val = stack.pop(); // [2,1]
    expect(val).toBe(3);
    expect(stack.min()).toBe(1);
  });

});
