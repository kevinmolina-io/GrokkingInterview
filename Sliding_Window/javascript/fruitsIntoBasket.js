const assert = require('assert')

const fruits_into_baskets = function(fruits) {
    // basket = {C: 2, A: 1} // keep track of the chars
    // max_length = -1, 1, 2, 2, 3  
    // [A, B, C, A, C]
    //        S
    //                E 
    let basket = {}
    let max_length = -1
    let start = 0
    for (let end = 0; end < fruits.length; end++) {
        if (!basket[fruits[end]]) {
            basket[fruits[end]] = 0
        }
        basket[fruits[end]] += 1

        while (Object.keys(basket).length > 2) {
            basket[fruits[start]] -= 1
            if (basket[fruits[start]] == 0) {
                delete basket[fruits[start]]
            }
            start += 1
        }

        max_length = Math.max(max_length, end-start+1)
    }
    return max_length;
  };
  
  const fruitA = ['A', 'B', 'C', 'A', 'C']
  const fruitB = ['A', 'B', 'C', 'B', 'B', 'C']
  const resultA = 3
  const resultB = 5
  assert.strictEqual(fruits_into_baskets(fruitA), resultA, `Expected Max length of subarray of max 2 fruits is ${resultA}`);
  assert.strictEqual(fruits_into_baskets(fruitB), resultB, `Expected Max length of subarray of max 2 fruits is ${resultB}`);