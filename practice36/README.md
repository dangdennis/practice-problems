function distributeFood(food, hungerArray){
  /*create code that goes through the 
  the hungerArray, and distributes food
  in the most optimum way so that
  everyone is brought to the least hungry
  state possible.  0 is not hungry at all,
  5 is maximum hunger
  
  return the food given to each person to
  bring them to the optimum level*/
}



console.log( distributeFood(5, [2, 3, 4, 5]));
//expected output: [0,1,2,2]

console.log( distributeFood(3, [ 2, 1, 0, 4, 1, 0]));
//expected output: [1,0,0,2,0,0]