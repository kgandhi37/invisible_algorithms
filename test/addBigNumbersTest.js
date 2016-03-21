var assert = chai.assert

describe('addBigNumbers', function(){
	it('should fail when number 1 is not a number', function(){
		number_1 = "1px";
		number_2 = "1";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, 'Please make sure input is a number number');
	});
	it('should fail when number 2 is not a number', function(){
		number_1 = "1";
		number_2 = "1px";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, 'Please make sure input is a number number');
	});
	it('should fail when number 1 has more than one decimal point', function(){
		number_1 = "1.1.1";
		number_2 = "1";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, 'Please make sure input is a number number');
	});
	it('should fail when number 2 has more than one decimal point', function(){
		number_1 = "1";
		number_2 = "1.1.1";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, 'Please make sure input is a number number');
	});
	it('should work when number 1 is zero', function(){
		number_1 = "0";
		number_2 = "1";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '1');
	});
	it('should work when number 2 is zero', function(){
		number_1 = "1";
		number_2 = "0";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '1');
	});
	it('should work when both numbers are zero', function(){
		number_1 = "0";
		number_2 = "0";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '0');
	});
	it('should work when both number 1 and number 2 are whole integers', function(){
		number_1 = "1";
		number_2 = "1";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '2');
	});
	it('should work when ONLY number 1 is a decimal', function(){
		number_1 = "0.1";
		number_2 = "1";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '1.1');
	});
	it('should work when ONLY number 2 is a decimal', function(){
		number_1 = "1";
		number_2 = "1.1";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '2.1');
	});
	it('should work when both numbers are decimals', function(){
		number_1 = "0.4";
		number_2 = "1.1";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '1.5');
	});
	it('should work when number 1 is a decimal and number 2 is 0', function(){
		number_1 = "0.5";
		number_2 = "0";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '0.5');
	});
	it('should work when number 2 is a decimal and number 1 is 0', function(){
		number_1 = "0";
		number_2 = "0.5";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '0.5');
	});
	it('should work when the WHOLE part of number 1 is longer than the WHOLE part of number 2', function(){
		number_1 = "1000";
		number_2 = "100";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '1100');
	});
	it('should work when the WHOLE part of number 2 is longer than the WHOLE part of number 1', function(){
		number_1 = "10";
		number_2 = "100";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '110');
	});
	it('should work when number 1 starts with 0 and is a whole number', function(){
		number_1 = "01";
		number_2 = "1";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '02');
	});
	it('should work with number 2 starts with 0 and is a whole number', function(){
		number_1 = "1";
		number_2 = "01";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '02');
	});
	it('should work when both numbers start with 0 and are whole', function(){
		number_1 = "01";
		number_2 = "01";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '02');
	});
	it('should work when the DECIMAL part of number 1 is longer than the DECIMAL part of number 2', function(){
		number_1 = "0.001";
		number_2 = "1.1";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '1.101');
	});
	it('should work when the DECIMAL part of number 2 is longer than the DECIMAL part of number 1', function(){
		number_1 = "1.1";
		number_2 = "1.001";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '2.101');
	});
	it('should work when there is nothing defined before the decimal point for number 1', function(){
		number_1 = ".01";
		number_2 = "1.1";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '1.11');
	});
	it('should work when there is nothing defined before the decimal point for number 2', function(){
		number_1 = "1.1";
		number_2 = "0.01";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '1.11');
	});
	it('should work when there is nothing defined before the decimal point for both numbers', function(){
		number_1 = ".01";
		number_2 = ".11";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '0.12');
	});
	it('should work when number 1 is very large (64 chars)', function(){
		number_1 = "1111111111111111111111111111111111111111111111111111111111111111";
		number_2 = "111";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '1111111111111111111111111111111111111111111111111111111111111222');
	});
	it('should work when number 2 is very large (64 chars)', function(){
		number_1 = "111";
		number_2 = "1111111111111111111111111111111111111111111111111111111111111111";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '1111111111111111111111111111111111111111111111111111111111111222');
	});
	it('should work when both numbers are very large (64 chars)', function(){
		number_1 = "1111111111111111111111111111111111111111111111111111111111111111";
		number_2 = "1111111111111111111111111111111111111111111111111111111111111111";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '2222222222222222222222222222222222222222222222222222222222222222');
	});
	it('should work when number 1 is very large decimal (64 chars)', function(){
		number_1 = "0.1111111111111111111111111111111111111111111111111111111111111111";
		number_2 = "0.111";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '0.2221111111111111111111111111111111111111111111111111111111111111');
	});
	it('should work when number 2 is very large decimal (64 chars)', function(){
		number_1 = "0.111";
		number_2 = "0.1111111111111111111111111111111111111111111111111111111111111111";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '0.2221111111111111111111111111111111111111111111111111111111111111');
	});
	it('should work when both numbers are very large decimals (64 chars)', function(){
		number_1 = "0.1111111111111111111111111111111111111111111111111111111111111111";
		number_2 = "0.1111111111111111111111111111111111111111111111111111111111111111";
		answer = addBigNumbers(number_1, number_2);
		assert.equal(answer, '0.2222222222222222222222222222222222222222222222222222222222222222');
	});

});