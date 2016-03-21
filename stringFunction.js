/*

getWordRank is a function that takes a string, rearranges it alphabetically and then proceeds to find anagrams
of the characters that make up the string until we find the original word input. It then returns the rank of 
this word (where it would fall in an array) relative to all the possible permutations of the characters 
(after being arranged alphabetically). e.g if we had a 2 letter string ab. there are 2 permutations ab, ba.
The rank of ba in this case would be 2. 

*/


// create function to swap letters
function swap(chars, i, j){
	var tmp_num = chars[i];
	chars[i] = chars[j];
	chars[j] = tmp_num;
}

function getWordRank(word){
	var counter = [];
	if (word.length < 26){
		var word_array = word.split('').sort();
		var chars = word_array;
		var length = word_array.length;
		var i = 0;
		var rank = 0;

		for (i = 0; i < length; i++){
			counter[i] = 0;
		}

		i = 0;

		while (i < length){
			if (counter[i] < i){
				swap(word_array, i % 2 === 1 ? counter[i] : 0, i);
				word_to_add = chars.join('');
				rank++;
				counter[i]++;
				i = 0;
				if (word_to_add == word){
					return rank + 1;
					break;
				} 
				
			} else {
				counter[i] = 0;
				i++;
			}
		}
	} else {
		return "Too many characters";
	}
}