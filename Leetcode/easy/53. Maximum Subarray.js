/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSub = nums[0];
    let currSum = 0;
    
    for (let n of nums) {
        if (currSum < 0)
            currSum = 0;
        currSum += n;
        maxSub = Math.max(maxSub, currSum);
    }
    
    return maxSub;
};