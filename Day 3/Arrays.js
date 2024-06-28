function getSecondLargest(nums) {
    // Complete the function
    // let lar = nums[0];
    // for (const num of nums){
    //     if (num>lar) lar=num;
    // }
    let a = [...(new Set(nums))].sort((a,b)=>a-b);
    return a[a.length-2]
}