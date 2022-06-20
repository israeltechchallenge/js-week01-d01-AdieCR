
function moduloEx6(number, comparer) {
  //your code

    //your code
    let str = "";
    let result = number % comparer;
    if (number > comparer && result > 0){
      str = 'The number ' + number + ' is bigger than ' + comparer + '. But the modulo of '+ number + ' % '+ comparer + ' is '+ result;
    }else if (number> num2 && !result > 0 ){
      str = 'The number ' + number+ ' is bigger than ' + comparer;
    }else if (number < num2){
      str = 'The number ' + number + ' is less than ' + comparer;
    }else {
      str = 'The number ' + number + ' is equal to ' + comparer;
    }
   return str;
  
  
  
  }
  document.getElementById('output').innerText = moduloEx6(500, 16);
  
  // Do not remove or change this line, or the tests won't work
  //export { moduloEx6 };
