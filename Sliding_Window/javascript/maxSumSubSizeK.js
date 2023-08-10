const assert = require('assert');

function max_sub_array_of_size_k(k, arr) {
    // TODO: Write your code here
    let maxSum = -1
    let start = 0
    let total = 0
    for (let end = 0; end < arr.length; end++) {
        total += arr[end]
        if (end >= k-1) {
            maxSum = Math.max(maxSum, total)
            total -= arr[start]
            start += 1
        }
    }

    return maxSum
}

const kSize = 3
const list = [2, 1, 5, 1, 3, 2]
const result = 9
const kSize2 = 2
const list2 = [2, 3, 4, 1, 5]
const result2 = 7
    
assert.strictEqual(max_sub_array_of_size_k(kSize, list), result, `Expected Maximum sum of a subarray of size K to be: ${result}`);
assert.strictEqual(max_sub_array_of_size_k(kSize2, list2), result2, `Expected Maximum sum of a subarray of size K to be: ${result2}`);