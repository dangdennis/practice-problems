function find_middle_letters(str){
	if(str.length % 2 !== 0) {
		var position = Math.floor(str.length/2);
		return str[position];
	} else {
		var position = str.length/2;
		return str[position] + str[position-1]
	}
}