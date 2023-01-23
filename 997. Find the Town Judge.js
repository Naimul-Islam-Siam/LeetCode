/*
   In a town, there are n people labeled from 1 to n. 
   There is a rumor that one of these people is secretly the town judge.

   You are given an array trust where trust[i] = [ai, bi] 
   representing that the person labeled ai trusts the person labeled bi.

   The town judge trusts nobody.
   Everybody (except for the town judge) trusts the town judge.

   There is exactly one person that satisfies properties 1 and 2.
   Return the label of the town judge if the town judge exists and can be identified,
   or return -1 otherwise.


   Input: n = 3, trust = [[1,3],[2,3],[3,1]]
   Output: -1
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function findJudge(n, trust) {
   let trustCount = new Array(n + 1).fill(0);

   for (let i = 0; i < trust.length; i++) {
      trustCount[trust[i][0]]--; // out degree (trst[i][0] trusts trust[i][1] but not vice versa)
      trustCount[trust[i][1]]++; // in degree (trust[i][1] is trusted by trust[i][0])
   }

   for (let i = 1; i < trustCount.length; i++) {
      if (trustCount[i] == n - 1) {
         // n-1 people should trust the judge (everyone except the judge itself)
         return i;
      }
   }

   return -1;
};