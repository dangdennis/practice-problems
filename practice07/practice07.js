function pigLatin(str) {
    var consonantClusters = ['ch','sh','sm','st','th','st'];
    var vowels = ['a','e','i','o','u'];
	str = str.toLowerCase()
        .split(' ')
        // attaching letters
        .map(function(word){
          // If beginning with vowels
          for(var i = 0; i<vowels.length; i++) {
            if (word.charAt(0) === vowels[i]) {
              return word + "way";
            }
          // If beginning with consonant clusters
          }  
          for(var j = 0; i<consonantClusters.length; i++) {
            if (word.charAt(0) === consonantClusters[i]) {
              return word.slice(2) + consonantClusters[i] + "way";
            }
          // If just beginning with non-cluster consonants
          } 
          return word.slice(1) + word.charAt(0) + "ay";
          })
        .join(' ');
	return str;
}
var test = "I am a little tea pot";
console.log(pigLatin(test));