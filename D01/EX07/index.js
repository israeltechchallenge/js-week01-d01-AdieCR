function getRandomInt() {
  //your code
  let num = parsInt(Math.random()*100);
   
  return num;
}

function moduloEx7() {
  //your code
  let number= getRandomInt();
  let comparer= getRandomInt();
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
document.getElementById('output').innerText = moduloEx7();

