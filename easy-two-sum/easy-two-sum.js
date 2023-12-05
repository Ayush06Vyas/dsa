function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i != j) {
                console.log([i, j]);
                return [i, j];
            }
        }
    }
    return [];
}
;
twoSum([3, 2, 4], 6);
