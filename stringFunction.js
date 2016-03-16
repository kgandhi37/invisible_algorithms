/*
Script to take a given string, rearrange in alphabetical order and find all possible permutations of the characters in the string.
Will return the position or "rank" of where the original input is within the anagram array.
Can be no more than 25 letters and repetition is allowed.
Initialise: words = getAnagrams("stringhere")
*/


// create function to swap letters
function swap(chars, i, j){
	var tmp_num = chars[i];
	chars[i] = chars[j];
	chars[j] = tmp_num;
}

// getting all the anagrams
function getAnagrams(word){
	// initialise counter
	var counter = [];
	// initialise anagrams
	var anagrams = [];
	// make sure input string isn't larger than 25 chars
	if (word.length < 26){
		// splitting string into array of characters and sorting
		var word_array = word.split('').sort();
		var chars = word_array
		var length = word_array.length;
		var i = 0;

		for (i=0; i<length; i++){
			counter[i] = 0;
		}

		// adding initial word to array

		anagrams.push(word_array.join(''));

		// reset i
		i = 0;

		while (i < length){
			if (counter[i] < i){
				swap(word_array, i % 2 === 1 ? counter[i] : 0, i);
				counter[i]++;
				i = 0;
				word_to_add = chars.join('');
				// stop repetition
				// if (anagrams.indexOf(word_to_add) == -1){
				// anagrams.push(word_to_add);
				// }
				anagrams.push(word_to_add);
			} else {
				counter[i] = 0;
				i++;
			}
		}

		rank = anagrams.indexOf(word) + 1;

		return rank;

	} else {

		return "Too many characters";
	}
}





