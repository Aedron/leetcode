/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const result = [];
  let i = 0;
  let [n1, n2] = [l1, l2];

  var calcNode = function(n1, n2) {
    const sum = (n1 ? n1.val : 0) + (n2 ? n2.val : 0) + (result[i] || 0);
    const m = sum % 10;
    const n = Math.floor(sum / 10);

    result[i] = m;
    result[i + 1] = n;
  };

  var arrayToNode = function(array) {
    let node = { val: null, next: null };
    const root = node;
    array.forEach((i, index) => {
      node.val = i;
      if (index < array.length - 1) {
        node.next = { val: null, next: null };
        node = node.next;
      }
    });
    return root;
  };

  calcNode(n1, n2);

  while (n1 || n2) {
    n1 = n1 && n1.next;
    n2 = n2 && n2.next;
    i++;
    calcNode(n1, n2);
  }

  while (result[result.length - 1] === 0) {
    result.pop();
  }

  console.log(result, JSON.stringify(arrayToNode(result)));

  return arrayToNode(result);
};
