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