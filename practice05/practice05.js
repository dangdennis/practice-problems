function fizzBuzz(){
	var str = '';
	for (var i=0; i<=100; i++){
		if (i % 3 === 0) {
			str += ' Fizz';
		} else if (i % 5 === 0) {
			str += ' Buzz';
		} else if (i % 3 === 0 && i % 5 === 0){
			str += ' FizzBuzz';
		} else {
			str += ' ' + i;
		}
	}
	return str;
}