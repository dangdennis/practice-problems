function distributeFood(food, hungerArray){
  var foodDistributed = hungerArray.map(() => 0 );
  var hungriestIndex,hungriest;
  
  while (food > 0) {
    //basically just find the max in the array
    hungriest = Math.max.apply(Math,hungerArray);
    for(var i = 0; i < hungerArray.length; i++) {
       if(hungerArray[i] === hungriest && food > 0) {
         food--;
         hungerArray[i]--;
         foodDistributed[i]++;
       }
    }
  }
  return foodDistributed;
}

console.log(distributeFood(5, [2, 3, 4, 5]));
// //expected output: [0,1,2,2]

console.log( distributeFood(3, [ 2, 1, 0, 4, 1, 0]));
// //expected output: [1,0,0,2,0,0]

// Another solution:
// function distributeFood(food, hungerArray) {

//            var output = new Array(hungerArray.length).fill(0);

//            for(var i = 0; i < food; i++) {
//                 var mostHungry = hungerArray[0];
//                 var mostHungryIndex = 0;
//                 for (var j = 1; j < hungerArray.length; j++) {
//                     if (hungerArray[j] > mostHungry) {
//                         mostHungry = hungerArray[j];
//                         mostHungryIndex = j;
//                     }
//                 }
//                 hungerArray[mostHungryIndex]--;
//                 output[mostHungryIndex]++;
//             }
//             return output;
//         }