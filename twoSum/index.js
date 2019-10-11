/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const v = numsMap[target - num];

    if (typeof v === "number") {
      return [v, i];
    }

    numsMap[num] = i;
  }
};
