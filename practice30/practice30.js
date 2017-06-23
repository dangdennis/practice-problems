function random_range(start_num,end_num){
	if(Array.isArray(start_num)) {
		var i = Math.floor(Math.random() * start_num.length);
		return start_num[i];
	} else {
		return Math.floor(Math.random() * (end_num - start_num)) + 2;	
	}
}