/*
   Given the root of a Binary Search Tree (BST), 
   return the minimum difference between the values of any two different nodes in the tree.

   Input: root = [4,2,6,1,3]
   Output: 1
*/

// Time Complexity: O(n)
// Space Complexity: O(H)
function minDiffInBST(root) {
   let prevNode = null;
   let minDiff = Infinity;

   const dfs = (node) => {
      if (!node) {
         return;
      }

      dfs(node.left);

      if (prevNode) {
         minDiff = Math.min(minDiff, node.val - prevNode.val);
      }

      prevNode = node;

      dfs(node.right);
   };

   dfs(root);

   return minDiff;
};