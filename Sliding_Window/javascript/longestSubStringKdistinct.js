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
  