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