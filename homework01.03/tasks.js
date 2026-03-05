//task1
/* function foo () {
let x = "hi, this is my first homework";
return x.length;
}
console.log(foo());
*/

//task2
/*
function foo() {
    let x = "hello";
    console.log(x.toUpperCase());
}
foo();
*/

//task3
/*
function sumofnumbers() {
    let x = 4;
    let y = 5;
    
    return x+y;
}
console.log(sumofnumbers());
*/
/*
  //task4
  let x = "hello";
  let rev = "";
  for(let i = x.length - 1; i >= 0; i--) {
    rev+= x[i];
  }
console.log(rev);

*/
//task5
/*
let x = "Learning JavaScrit";
console.log(x.includes("Java"));
*/
//task6
/*
let numList = [3, 6, 9, 12];
console.log(numList.indexOf(9));
*/
//task7
/*
let expenses = [50, 75, 100];
let sum = 0;
for(let n of expenses) {
    sum+=n;
}
console.log(sum);
*/
//task8
/*
function foo(text, sub) {
    return text.includes(sub);
}
console.log(foo("hello world", "world"));
*/
//task9
/*

function sumofnums() { 
    let arr = [3,5,11,23];
        let sum = 0;
    for(let n of arr) {
        sum+= n;
    }

    return sum;
}
    
console.log(sumofnums());
*/

//task10
/*
function foo(num) {
    
    if(num % 2 == 0) {
        return "even";
    }
        else {
            return "odd";
        }
    }
    console.log(foo(5));
    console.log(foo(10));

*/
//task11
/*
function typeofvalue(value) {
    if(value === null) {
        return "null";
    }
    if(Array.isArray(value)) {
        return "Array";
    }
    return typeof value;

}
console.log(typeofvalue(null));
console.log(typeofvalue([1,2,3]));
console.log(typeofvalue("hello"));  
console.log(typeofvalue(function() {}));
console.log(typeofvalue(7));
console.log(typeofvalue(undefined));
console.log(typeofvalue(NaN));
console.log(typeofvalue(false));
console.log(typeofvalue({a: 3}));
console.log(typeofvalue(122n));
*/
//task12

/*
function boolean(value) {
    if(Boolean(value) === false) {
        return "true";
    }
    else {
        return "false";
    }
}

    console.log(boolean(null));
    console.log(boolean(undefined));
    console.log(boolean(NaN));
    console.log(boolean(false));
    console.log(boolean(0));
    console.log(boolean(""));

  */
 //task13
/*
function compare(a, b) {
    return {
        loose: a == b,
        strict: a === b};
}
console.log(compare(3, "3"));
*/
//task 14
/*
function isvalidNumber(value) {
  if(typeof value !== "number") {
    return false;
  }           
  if(isNaN(value)){
     return false;
  }                        
  if(!Number.isFinite(value)) {
    return false;
  }            
  if(!Number.isSafeInteger(value)){
     return false;
  }       
  return true;
}


console.log(isvalidNumber(3));               
console.log(isvalidNumber("3"));           
console.log(isvalidNumber(NaN));            
console.log(isvalidNumber(Infinity));       
console.log(isvalidNumber(122n));            
console.log(isvalidNumber(9007199254740991)); 
console.log(isvalidNumber(9007199254740992)); 
    
    */
  //task15
  /*
  function number(value) {
    if(typeof(value) !== "number") {
        return Number(value);
  }  

 if(Number.isNaN(value)) {
    return null;
}
  }
console.log(number(NaN));
    console.log(number("3"));
    */
   //task16
   /*
   function boolean(x) {
return Boolean(x);
   }
    console.log(boolean(null));
    console.log(boolean(5));
    console.log(boolean(NaN));
    console.log(boolean("30"));
    console.log(boolean(0));
    console.log(boolean({b: 5}));   
    */
   //task 17
   /*
   function object(obj) {
    if(typeof obj === "object" && obj !== null && !Array.isArray(obj) && typeof obj !== "function") {
                return true;
            }
            return false;
        }
    console.log(object(null));
    
*/
//task 18
/*
function primitive(value) {
    if(value === null || typeof value === "undefined" || typeof value === "number" || typeof value === "string" || typeof value === "boolean" || typeof value === "symbol" || typeof value === "bigint") 
{
        return true;
}
else { 
    return false;
 }
    }
console.log(primitive(null));
*/
//task 19
/*
function sum(num1, num2) {
if(typeof num1 === "number" && typeof num2 === "number")
 {
    return num1 + num2;
 }
 else {
    return "invalid input";
 }
}
console.log(sum(3, 5));
console.log(sum("3", 5));
*/
// 01/03 homework
//1
/*
function isEven(num) {
    if(num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
    }
    console.log(isEven(4));
    console.log(isEven(5));
    */
   //2
   /*
   function sumUpTo(n) {
    let sum = 0;
    while(n > 0) {
        sum += n;
    n--;
    }    
    return sum;
}
console.log(sumUpTo(7));
*/
//3
/*
function minInArray(arr) {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];

        }
    }
    return min;
}
console.log(minInArray([3, 1, 4, 2]));
*/
//4
/*
function countDiits(n) {
    let count = 0;
    if(n < 0) {
        n = Math.abs(n);
    }
    if(n === 0) {
        return 1;
    }
    while(n > 0) {
        count++;
        n = Math.floor(n / 10);
    }
    return count;
}
console.log(countDiits(354));
*/
//5
/*
function sumarray(arr) {
    let sum = 0;
    for(let n of arr) {
        sum += n;
    }
    return sum;
}
console.log(sumarray([1, 2, 3, 4]));
*/
//6
/*
function average(arr) {
    let sum = 0;
    for(let n of arr) {
        sum += n;

    }
    return sum / arr.length;
}
console.log(average([1, 2, 3, 4]));
*/
//7
/*
function countChar(str, char) {
let count = 0;
for(let c of str) {
    if(c === char) {
        count++;
    }
}
   return count;
}
console.log(countChar("hello", "l"));
*/
//8
/*
function removeFirstChar(str) {
    if(str.length > 0) {
        return str.slice(1);
    }
}
console.log(removeFirstChar("hello"));
*/
//9
/*
function power(base, exp) {
    return Math.pow(base, exp);
}
console.log(power(2,3));
*/
//10
/*
function contains(arr, value) {
    for(let n of arr) {
        if(n === value) {
            return true;
        }
    }
    return false;
}
console.log(contains([2,3,4], 3));
*/
//11
/*
function repeatString(str,n) {
let x = "";
while(n > 0) {
    x += str;
    n--;
}
return x;
}
console.log(repeatString("alo", 4));
*/
//12
function firstAndLast(arr) {
    
    let x = arr[0];
    let y = arr[arr.length - 1];
    if(x === undefined && y === undefined) {
        return [];
    }
return [x,y];
}
console.log(firstAndLast([1,4]));