/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    const numsLength = nums.length;
let result = 0;

const travel = (sum, depth) => {
    console.log(depth)
    if (depth === numsLength) {        
        if (sum === target) {
            result += 1;
        }
        return;
    }
    
    travel(sum + nums[depth], depth + 1);
    travel(sum - nums[depth], depth + 1);
}

travel(0, 0);
return result;
};