const assert = require('assert')

function smallest_subarray_with_given_sum(s, arr) {
    let smallestLength = Infinity
    let start = 0, total = 0

    for (let end = 0; end < arr.length; end++) {
        total += arr[end]
        while (total >= s) {
            const len = (end-start)+1
            smallestLength = Math.min(smallestLength, len)
            total -= arr[start]
            start += 1
        }
    }

    if (smallestLength !== Infinity) {
        return smallestLength
    }

    return 0
}

const sum1 = 7
const sum2 = 8
const list1 =  [2,1,5,2,3,2]
const list2 =  [2,1,5,2,8]
const list3 =  [3,4,1,1,6]
const result1 = 2
const result2 = 1
const result3 = 3

assert.strictEqual(smallest_subarray_with_given_sum(sum1, list1), result1, `Expected Minimum length of a subarray of that totals >= ${sum1} is: ${result1}`);
assert.strictEqual(smallest_subarray_with_given_sum(sum1, list2), result2, `Expected Minimum length of a subarray of that totals >= ${sum1} is: ${result2}`);
assert.strictEqual(smallest_subarray_with_given_sum(sum2, list3), result3, `Expected Minimum length of a subarray of that totals >= ${sum2} is: ${result3}`);