/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const max = s.length;
  if (max <= 1) {
    return max;
  }

  let start = 0;
  let maxLen = 1;

  for (let end = 1; end < max; end++) {
    const sub = s.slice(start, end);
    // 检查 start ~ end - 1 之间的子串是否包含 end 处的字符
    const index = sub.indexOf(s[end]);

    // 如果不包含，则当前 start ~ end 之间为最大子串
    if (index === -1) {
      maxLen = Math.max(maxLen, sub.length + 1);
      // 否则，丢弃 start + index + 1 之前的字符
    } else {
      start += index + 1;
    }
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("pwwkew"));
