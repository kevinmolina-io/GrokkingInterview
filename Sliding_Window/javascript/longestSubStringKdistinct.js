const assert = require('assert')

const longest_substring_with_k_distinct = function(str, k) {
    let distinctChars = {}
    let start = 0
    let maxSubstring = -1
  
    for (let end = 0; end < str.length; end++) {
      if (!distinctChars[str[end]]) {
        distinctChars[str[end]] = 0
      }
      distinctChars[str[end]] += 1
  
      while (Object.keys(distinctChars).length > k) {
        distinctChars[str[start]] -= 1
        if (distinctChars[str[start]] == 0) {
          delete distinctChars[str[start]]
        }
        start += 1
      }
  
      maxSubstring = Math.max(maxSubstring, end - start + 1)
    }
  
    return maxSubstring;
  };
  
  const string1 = "araaci"
  const string2 = "cbbebi"
  const distinct1 = 2
  const distinct2 = 1
  const distinct3 = 3
  const result1 = 4
  const result2 = 2
  const result3 = 5

  assert.strictEqual(longest_substring_with_k_distinct(string1, distinct1), result1, `Expected Max Length of substring to be: ${result1}`)
  assert.strictEqual(longest_substring_with_k_distinct(string1, distinct2), result2, `Expected Max Length of substring to be: ${result2}`)
  assert.strictEqual(longest_substring_with_k_distinct(string2, distinct3), result3, `Expected Max Length of substring to be: ${result3}`)