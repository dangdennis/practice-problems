function sortArrDataType(arr){
	var sortedArr = [[],[],[]];
	arr.forEach(function(el){
		if(typeof el === "string") {
			sortedArr[0].push(el);
		} else if (typeof el === "number"){
			sortedArr[1].push(el);
		} else {
			sortedArr[2].push(el);
		}
	});
	return sortedArr;
};