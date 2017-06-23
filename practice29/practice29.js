function do_math(num1,num2,operator){
  var num;
  switch(operator){
    case "+": 
      num = num1+num2;
      break;
    case "-": 
      num = num1+num2;
      break;
    case "*","x","X": 
      num = num1*num2;
      break;
    case "/": 
      num = num1/num2;
      break;
  }
  return num;
}