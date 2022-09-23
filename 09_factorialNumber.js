// if n=5
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 5 ;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);

// if n=5
function factorial(num){
    let answer = 1;
    if (num == 0 || num == 1){
      return answer;
    }else{
      for(var i = num; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let num = 10 ;
  answer = factorial(num)
  console.log("The factorial of " + num + " is " + answer);

