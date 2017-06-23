function returnArrBiggerWords(str, arr) {
	var newArr = [];
	for (var i=0; i<arr.length; i++){
		if (arr[i].length > str.length){
			newArr.push(arr[i]);
		}
	}
	return newArr;
	// filter method
	// var newArr = arr.filter(function(word){
	// 	return word.length > str.length;
	// })
	// return newArr;
};