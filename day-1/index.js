// Problem 1: Remove Duplicates from Sorted Array

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let k = 1; 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// Problem 2: Move Zeroes

function moveZeroes(nums) {
    let insertPos = 0; 
    for (let num of nums) {
        if (num !== 0) {
            nums[insertPos] = num;
            insertPos++;
        }
    }
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
}

// Problem 3: Majority Element

function majorityElement(nums) {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}


// Problem 4: Best Time to Buy and Sell Stock

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}

// Problem 5: Find All Duplicates in an Array

function findDuplicates(nums) {
    const result = [];
    for (let num of nums) {
        const index = Math.abs(num) - 1;
        if (nums[index] < 0) {
            result.push(index + 1);
        } else {
            nums[index] = -nums[index];
        }
    }
    return result;
}


