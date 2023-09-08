const assert = require('assert')

const non_repeat_substring = function(str) {
    let max_sub = -1
    let chars = {}
    let start = 0

    for (let end = 0; end < str.length; end++) {
        const rightChar = str[end]

        if (rightChar in chars) {
            start = Math.max(start, chars[rightChar]+1)
        }
        chars[rightChar] = end

        max_sub = Math.max(max_sub, end-start+1)
    }
    return max_sub;
  };

  const string1 = "abbbb"
  const string2 = "abccde"
  const result1 = 2
  const result2 = 3
  assert.strictEqual(non_repeat_substring(string1), result1, `Expected result: ${result1} as longest substring with distinct chars`)
  assert.strictEqual(non_repeat_substring(string2), result2, `Expected result: ${result2} as longest substring with distinct chars`)