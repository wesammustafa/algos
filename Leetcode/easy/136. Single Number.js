
// time complexity O(n) & space complexity O(n) 
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
    let set = new Set()
    
    for(let i=0; i<nums.length; i++){
        if(set.has(nums[i])){
            set.delete(nums[i])
        }else{
            set.add(nums[i])
        }
    }
    
    return [...set][0]  
};


// solution using bitwise exclusive OR operation (^)
// time complexity O(n) & space complexity O(1)
var singleNumber = function(nums) {
    let ans = 0;
     for (let i of nums) {
         ans ^= i;
     }
    
    return ans;
};