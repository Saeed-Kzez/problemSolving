function addListEnds(arr) {
  let s = arr[0] + arr[arr.length-1]; 
  return s ;  
}
//console.log(addListEnds( [1,2,3,4,5]));

function addEvenNumbers(n) { 
     let temp = 0 ;
    for ( let i =1 ; i <= n ; i++ ) {
        if ( i % 2 === 0 ) {
            temp = temp + i ; 
        }  
    }
      return temp ;
}   
//console.log(addEvenNumbers(10));  
function calculateFactorial(n) {
    let temp = 1;
    for ( let i = 1 ; i <= n  ; i++ ) {
        temp = temp * i;   
    }
    return temp ;
}
//console.log(calculateFactorial (5));

function calculateAverage(arr) {
    let temp = 0;
    for (let i = 0 ; i <= arr.length-1 ; i++ ) {
            temp = temp +  arr [i] ; 
    }
    return temp/arr.length;
}
//console.log(calculateAverage([4,6,8,10]));

function calculateHypotenuse(a, b) {
  let hypo = ( Math.pow(a,2)+ Math.pow(b,2) )  ;
  return  Math.sqrt(hypo) ;
}
//console.log(calculateHypotenuse (3,4) );

function calculatePower(base, exponent) {
    let temp =1;
    for ( let i=0   ; i <= exponent  ; i++ ){
        temp = temp*base ;

    }
    return temp;
}
//console.log(calculatePower(2,4)); 

function isArraySorted(arr) {  
    for ( let i = 0 ; i < arr.length-1 ; i++ ) {
            if (arr[i] > arr[ i +1 ] ) 
            
            return "not sorted";
    }
    return "sorted";

}
//console.log(isArraySorted ([10, 20, 30 ,40 ])) ;
//console.log(isArraySorted ([10, 20, 50 ,40 ])) ;

function checkSpaceInString(str) { 
    for ( let i = 0 ; i < str.length ; i++ ){  
        if ( str[i] == " " ) {
            return "space";
        }
    }
    return "No space";
} 
//console.log(checkSpaceInString("saeedkzez" ));    

function checkInRange(num, lowerLimit, upperLimit) {
 while (num >= lowerLimit && num <= upperLimit ) {
    return "yes";
 }   
 return "no" ;
}
//console.log(checkInRange(15, 1 ,10)); 

function checkIfEmpty(str) {
    if (str === "" ) {
        return " Empty";
    }
    return "Not Empty";
}
//console.log(checkIfEmpty (" Saaed" ) );
//console.log(checkIfEmpty ("") );  

function countParameters(...args) {
    let temp = 0 ;
   for ( let i = 1 ; i <= args.length ; i++  ) {
    temp = temp + 1 ;
   } 
   return temp ;

}
//console.log(countParameters(1,2,3,4,5,6)); 

function checkIdenticalSublists(list1, list2) { 
    if ( list1.length !== list2.length ) { 
        return " Not Identical ";
    }
    
    for ( let i = 0 ; i < list1.length ; i++ ) { 
        if (list1[i] !== list2[i]) {   
        return "Not Identical";
        }
    }
    return " Identical";
} 
//console.log(checkIdenticalSublists ([1,2,3], [1,2,3])); 
function findInterval(arr) {
  if ( arr.length <= 1 ) {
    return 0 ;  
  }
   let min = arr[0] ; 
   let max = arr[0] ;  
for ( let i = 1 ; i < arr.length ; i++ ) {
if ( arr[i] > arr[i+1] ) {
    max = arr[i] ;
}   

 if (( arr[i] < arr[i+1] )) {   
    min = arr[i] ;

}

}
return max - min ;

}
//console.log(findInterval(  [5,2,9,1]  ));

function generateStarRating(rating) { 
    let temp = " " ;
    for ( let i = 1 ; i <= rating; i++ ) {
        temp = temp + "*" ;
    }
            return temp;

}
//console.log (generateStarRating (4 )) ; 

function findElementIndex(arr, element) {
    for ( let i = 0  ; i < arr.length   ; i++   ) { 
        if ( arr[i] === element ) { 
          return i;
        }
          
    }
    return -1;  
} 
//console.log (findElementIndex ( [ 2, 4 ,6 ,8 ,10] , 8  )  ) ; 
///////////////////////////////////////////////////////////

function calculateMean(num) {
  let khans = 0 ;
  let temp = 0 ;
  while (num > 0 ) {
     let rem = num % 10 ; 
     temp = rem + temp ;
     num = (num -rem )/10;
    khans = khans +1 ; 
  }
  return temp/khans;
}
//console.log(calculateMean (12345)) ;

//

const calculateSumOfDigits = (num) => { 
let result = 0 ;
 for (let i = 0 ; num > 0 ; i++ ) { 
let rem = num%10 ;
result = result + rem ;
num = (num - rem )/10; 
}
 return result ;
}
//console.log(calculateSumOfDigits(12345));

const countDigits = (num) => {
digit = 0 ; 
while ( num > 0 ) { 
    let rem = num % 10 ; 
    num = (num - rem)/10 ;
    digit = digit +1 ; 
}
return digit ; 
}
//console.log(countDigits(1234)); 

 const makeSumEven = (num1 , num2)=> { 
     let sum = num1 + num2 ; 
    if (sum%2 === 0  ) {
        return sum ;
    }
    return sum +1 ;
 
 }
 //console.log(makeSumEven (4,3)); 

  const largestSwap = (num) => {
    let temp = num%10 ; 
    num = (num - temp )/10 ; 
    if (temp > num ){ 
        return false ;
    }
    return true ;
  }
  //console.log (largestSwap(27));

const FindMaxDigit =(num) => {
let max = 0 ;
 while( num > 0  ) {
    let rem = num % 10; 
    if (rem > max ){ 
        max = rem ;
    }
    num = (num - rem )/10;  
 }
 return max ;

}
//console.log(FindMaxDigit(1235464879));
  

const FindMinDigit = (num) => { 
        let min = 9;
        
     while ( num > 0 ) { 
        let rem = num % 10 ; 
        if ( rem < min ) { 
            min = rem ;
        }
        num = (num - rem)/10 ;
     }
     return min ;
    }
//console.log(FindMinDigit (123546) ); 

const findLarger = (num1, num2 ) => {
    if (num1 > num2) {
        return num1;
    }
    return num2 ;
}
//console.log (findLarger(99 , 100));

const removeVowels = (str) => {
let res = "";
for ( let i = 0 ; i < str.length ; i++) { 
    const char = str[i] ;
    if ( char !== "a" &&  char !== "e" && char !== "y" && char !== "u" && char !== "i" && char !== "o") {
        res = res + char ;
    }
}
return res  ; 
}
//console.log(removeVowels( "saeed kzez"));

//////////////////////////////////////////////

const dashingNumbersss = (num) => { 
let str = num.toString();
let res = " " ;
for ( let i = 0 ; i < str.length ; i++ ) { 

    res = res +str[i];

    if ( i < str.length-1 ) {
       res = res+"-"; 
    }
 }
     return res;

}
//console.log(dashingNumbersss(12345));

let fruit = [ "sana" , "saeed" , "salam" , "noor"];
let result = fruit.join(" 2 "); 
//console.log(result);  
 
const lastandfirstsame = (world) => { 
if ( world[0] === world[world.length-1] ) { 
  return true ;
} 
   return false;

} 
 
// console.log(lastandfirstsame("Saeed"));
// console.log(lastandfirstsame("test"));

const are_equal = (ob1 ,ob2 ) =>   ob1=== ob2  ;
//console.log( are_equal("saeed" , "saeed"));


const last_digit = (n) => { 
   let res = 0; 
   res = ( n % 10 );
    return res;
}
//console.log(last_digit(12345)); 

const is_sorted = ( s = []) => { 
for ( let i = 0 ; i < s.length ; i++ ){ 
  for( let j = 0  ; j< s.length-1 ; j++ ){
    if ( s[j] > s[j+1]) {
    return false
    }   
}  
}
  return true ; 
}
//console.log(is_sorted([1,2,2,500,4,56])); 

// 31/3

const calculate_profit_loss=(cost_price, selling_price) => {    
let result = selling_price - cost_price ;
if ( result >= 0 ) {
    return "profit =  " + result ;
}
else 
    return "lose =  " + result ;

}
//console.log(calculate_profit_loss(100 , 120 )); 
//************** */
//const find_missing_number = (numbers) => {
    
const removeSpecialCharacters = (str) => {
    return str.replace( /[^a-zA-Z0-9\s]/g,"" );
}  
//console.log(removeSpecialCharacters ("He&%$#@!llo"));
 
const removevools = ( str) => str.replace( /[euoy]/g, "" )  
//console.log (removeVowels  ("hello ") ); 

const findLarger2 = (num1, num2) =>  { 
    if (num1 > num2) {  ;
    return num1; }
        return "not large" ;

}
//console.log(findLarger2 (7,10)); 

const isPalindrome = (str) => {
    
}
// console.log("was it a car or a cat i saw"); 


const  houseOfCards =(n) => {   
let numofcard = (n* (n+1)*((2*n)+1) )/6;
return numofcard ;
}
//console.log(houseOfCards(4));

const calletculateFermatNumber = (n) => {
      let result = (Math.pow(2,Math.pow(2,n)))+1; 
        return result; 
    }
// console.log(calletculateFermatNumber(3));

const addToArray = (arr, num) =>  {
    arr.push(num); 
    return arr ;
}
// console.log(addToArray ([1, 2 , 3 ] , 4)); 

const calculateSum = (arr) => {
    arr.reduce(arr );
}
console.log(calculateSum ([10 , 20 , 30, 40 , 50]));