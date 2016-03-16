/*
Function to add numbers as strings. Allows us to add large numbers that the standard JS math can't handle properly.

Allows decimals.

Example:

var num1 = "1111.11";
var num2 = "22222.2";
var added_numbers = addBigNumbers(num1, num2);

return a string value 23333.31

*/

function addBigNumbers(a, b) {
	// Declaring variables used
	var answer = "";
	var carry = 0;
	var zeros_append = 0;
	var zeros_prepend = 0;
	var max_whole = 0;
	var max_decimal = 0;
	var max_length = 0;
	var i = 0;
	var max_float = 0;

	// period checks!
	if (a.indexOf('.') !== -1 || b.indexOf('.') !== -1){

		// split into array

		var a_arr = a.split('.');
		var b_arr = b.split('.');

		// making sure both have a decimal

		if (!a_arr[1]){
			a_arr.push("0");
		}
		if (!b_arr[1]){
			b_arr.push("0");
		}

		// appending 0's to number before decimal point to make same length
		if (a_arr[0].length > b_arr[0].length){
			max_whole = a_arr[0].length;
			zeros_append = max_whole - b_arr[0].length;
			for (i=0; i<zeros_append; i++){
				b_arr[0] = "0" + b_arr[0];
			}
		} else if (b_arr[0].length > a_arr[0].length){
			max_whole = b_arr[0].length;
			zeros_append = max_whole - a_arr[0].length;
			for (i=0; i<zeros_append; i++){
				a_arr[0] = "0" + a_arr[0];
			}
		} else {
			max_whole = a_arr[0].length;
		}

		// prepending 0's to number after decimal to make same length
		if (a_arr[1].length > b_arr[1].length){
			max_decimal = a_arr[1].length;
			zeros_prepend = max_decimal - b_arr[1].length;
			for (i=0; i<zeros_prepend; i++){
				b_arr[1] = b_arr[1] + "0";
			}
		} else if (b_arr[1].length > a_arr[1].length){
			max_decimal = b_arr[1].length;
			zeros_prepend = max_decimal - a_arr[1].length;
			for (i=0; i<zeros_prepend; i++){
				a_arr[1] = a_arr[1] + "0";
			}
		} else {
			max_decimal = a_arr[1].length;
		}

		// rejoining array to sum
		a_str = a_arr.join('');
		b_str = b_arr.join('');

		// length of string in total now
		max_length = a_str.length;

		// perform calculation
		for (i = max_length - 1;  i> -1; i--){
				
				var sum = String(parseInt(a_str.charAt(i)) + parseInt(b_str.charAt(i)) + carry);

               if (sum.length == 2){
                       answer = sum.charAt(1) + answer;
                       carry = 1;
               } else {
                       carry = 0;
                       answer = sum + answer;
               }
               
       }
       if (carry == 1){
           answer = 1 + answer;
       }
       var slice_decimal = max_length - max_decimal;
       var sliced_answer = [answer.slice(0, slice_decimal), answer.slice(slice_decimal)].join('.');
       return sliced_answer;

	} else {

		if (a.length > b.length){
			max_length = a.length;
			zeros = max_length - b.length;
			for (i=0; i<zeros; i++){
				b = "0" + b;
			}
		} else if (b.length > a.length){
			max_length = b.length;
			zeros = max_length - a.length;
			for (i=0; i<zeros; i++){
				a = "0" + a;
			}
		} else {
			max_length = a.length;
		}

		// starting with the last character (n-1) - add each individual character - carry over number if sum has a length of 2

		for (i = max_length - 1;  i> -1; i--){
					
					var sum = String(parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + carry);

	               if (sum.length == 2){
	                       answer = sum.charAt(1) + answer;
	                       carry = 1;
	               } else {
	                       carry = 0;
	                       answer = sum + answer;
	               }
	               
	       }
	       if (carry == 1){
	           answer = 1 + answer;
	       }
	       return answer;


	}

	

}