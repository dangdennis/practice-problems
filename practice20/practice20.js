function randomize_list(arr){
	var len = arr.length;
	var randomArr = [];
	for (var i=len;i>0;i++){
		var element = arr.pop();
		var newPosition = Math.floor(Math.random()*len);
		randomArr[newPosition] = element;
	}
	return randomArr;
}
var a = [5,75,3,1,6,3,123,7,3,1243,432,6,12123,124,1235,123,3245,123];
randomize_list(a);