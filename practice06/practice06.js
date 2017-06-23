function fibonacci(num){
	var str = "0";
	var prevNum = 0;
	var nextNum = 1;
	var currentNum = 1;
	for (var i=2; i<=num; i++){
		currentNum = prevNum + nextNum;
		prevNum = nextNum;
		nextNum = currentNum;
		str += " "+prevNum;
	}
	return str;
}