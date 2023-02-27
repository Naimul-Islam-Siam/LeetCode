/*
   Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
   Output: 6
   Explanation: 
   - The first sentence, "alice and bob love leetcode", has 5 words in total.
   - The second sentence, "i think so too", has 4 words in total.
   - The third sentence, "this is great thanks very much", has 6 words in total.
   Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
 */

// Time Complexity: O(n*m); n -> length(sentences), m -> (length(sentence))
// Space Complexity: O(1)
function mostWordsFound(sentences) {
   let maxWordCount = -Infinity;

   for (let i = 0; i < sentences.length; i++) {
      let currentSentence = sentences[i];
      let wordCount = 0;

      for (let j = 0; j < currentSentence.length; j++) {
         if (currentSentence[j] == " " || j == currentSentence.length - 1) {
            wordCount++;
         }
      }

      maxWordCount = Math.max(wordCount, maxWordCount);
   }

   return maxWordCount;
};