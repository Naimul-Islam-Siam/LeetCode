/*
   Input: intervals = [[1,3],[6,9]], 
         newInterval = [2,5]
   Output: [[1,5],[6,9]]

   Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], 
         newInterval = [4,8]
   Output: [[1,2],[3,10],[12,16]]
   Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

// Time Complexity: O(n^2)
// Space Complexity: O(1)
function insert(intervals, newInterval) {
   let start = 0, end = 1;
   let i = 0;

   // O(n) while loop iteration
   // but during insertion and deletion rest of the elements get shifted to left and right
   // this add O(n)
   // so overall O(n^2)
   while (i < intervals.length) {
      if (intervals[i][end] < newInterval[start]) {
         i++; // means skip this iteration
      } else if (intervals[i][start] > newInterval[end]) {
         // insert newInterval at i-th postion and return
         intervals.splice(i, 0, newInterval);

         return intervals;
      } else {
         // merge-overlap
         newInterval[start] = Math.min(intervals[i][start], newInterval[start]);
         newInterval[end] = Math.max(intervals[i][end], newInterval[end]);

         // remove the i-th intervals item
         intervals.splice(i, 1); // 1 indicates - remove 1 item only (JavaScript splice method rule);
      }
   }

   // this means program was not returned in the while loop
   // which means end of newInterval is larger than end of intervals's last item
   // so push newInterval to the intervals array
   intervals.push(newInterval);

   return intervals;
};


// Time Complexity: O(n) as there's no insertion or deletion in intervals array so no shifting
// Space Complexity: O(n)
function insert(intervals, newInterval) {
   let start = 0, end = 1, flag = false;
   let index = intervals.length;
   let result = [];

   for (let i = 0; i < intervals.length; i++) {
      if (intervals[i][end] < newInterval[start]) {
         result.push(intervals[i]);
         continue;
      } else if (intervals[i][start] > newInterval[end]) {
         // insert newInterval at i-th postion and return
         result.push(newInterval);
         flag = true;
         index = i;
         break;
      } else {
         // merge-overlap
         newInterval[start] = Math.min(intervals[i][start], newInterval[start]);
         newInterval[end] = Math.max(intervals[i][end], newInterval[end]);
      }
   }

   while (index < intervals.length) {
      result.push(intervals[index]);
      index++;
   }

   if (flag == false) {
      result.push(newInterval);
   }

   return result;
};