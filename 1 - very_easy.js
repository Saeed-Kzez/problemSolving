function checkPassOrFail(marks) {
 if ( marks >= 41 ) {
   return "pass" ;
 }   
 else { 
   return "fail" ; 
 }
}
//console.log (checkPassOrFail(20)) ;

function findLargest(num1, num2) {
  if (num1 === num2 ){
   return "error";
  }
 else if ( num1 > num2 ){
   return num1 ;
 }
 else return num2 ;
}
//console.log(findLargest(10,20)); 

function addNumbers(num1, num2) {
     let sum = num1+num2;
     return sum;
}
//console.log(addNumbers (20,30));

function convertHoursToMinutes(hours) {
    let numofminutes = hours*60 ;
    return numofminutes ; 
}
//console.log(convertHoursToMinutes(3)); 

function isGreaterThanFive(num) {
 if (num > 5 ){
   return "yes";
 }   
 else return "no";
}
//console.log(isGreaterThanFive(10) );

function calculateDiscount(originalPrice, discountedPrice) {
    if (discountedPrice >= originalPrice) {
      return "false";
    }
    else { 
      let discount = originalPrice - discountedPrice ;
      return discount ;
    }
}
//console.log (calculateDiscount (500 , 400 ));

function isDivisibleByFive(num) {
    if (num % 5 === 0 ) {
      return "yes";
    }
    else return " no";
}
//console.log (isDivisibleByFive( 25 ));

function checkOddOrEven(num) {
 if (num % 2 === 0 ) {
   return "even";
 }    
 else {
   return "odd";   
 }
}
//console.log (checkOddOrEven(20));

function checkVotingEligibility(age) {
 if ( age >= 18 ){
   return "Eligible";
 }   
 else return "Not Eligible";
}
//console.log (checkVotingEligibility (23)); 

function doubleNumber(num) {
   let sum = num*2;
    return sum ;
}
//console.log (doubleNumber(5));

function minutesToSeconds(minutes) {
 let sum = minutes*60 ; 
 return sum ;    
}
//console.log (minutesToSeconds(5)); 

 function metersToCm(meters) {
 let numofcm = meters*100 ;
  return numofcm ;   
}
//console.log (metersToCm (5.2)); 

function checkNegative(num) { 
   if (num < 0 ){ 
      return "negative";
}
else return "positive " ;
}
//console.log (checkNegative(-6) ) ; 

function calculateCube(num) {
 let sum = num*num*num ;
 return sum ; 
}
//console.log(calculateCube (4 )) ;

function calculateTriangleArea(base, height) {
 let area = base*0.5*height ; 
 return area; 
}
//console.log(calculateTriangleArea (5,10 ) ) ; 

function calculateCarriageCapacity(carriageArea, personArea) {
 let sum =  carriageArea / personArea ;
 return sum ;       
}
//console.log(calculateCarriageCapacity (100,5));

function calculateProfitLoss(sellingPrice, costPrice) {
 let sum = sellingPrice - costPrice ;
 if (sum === 0 ) {
   return "Break-even";
 }     
 else if ( sum > 0 ){
 return "profit";
 }
  else return "loss";
}   
//console.log(calculateProfitLoss (100 , 150)) ;

function checkSumLessThanThird(num1, num2, num3) {
    let sum12 = num1+ num2 ;
    if ( sum12 < num3 ) 
      return "true" ; 
   else return "false";
}
//console.log(checkSumLessThanThird (5, 7, 15)); 

function calculatePower(base, exponent) {
 return Math.pow(base,exponent) ;
  
}
//console.log(calculatePower (2,3)) ; 

function calculateSimpleInterest(principal, rate, time) {
 let interest = ( principal*rate*time)/ 100 ;   
 return interest ;
}
//console.log (calculateSimpleInterest (1000, 5, 2 )) ; 

function calculateSquareRoot(num) {
 return Math.sqrt(num);   
}
//console.log (calculateSquareRoot (25)); 

function calculateLog(num, base) {
 return Math.log10( num , base) ;  
}
//console.log (calculateLog(100 , 10) );

function getFirstElement(arr) {
    return arr[0]; 
}
//console.log(getFirstElement ( [40,25,16,72])); 

function calculateCircleArea(radius) {
    let PI = 3.14; 
    return radius*radius*PI;
}
//console.log(calculateCircleArea(7));

function calculateStarNumber(n) {
    let s = 6*n * ( n - 1) +1 ;
    return s ;
}
//console.log(calculateStarNumber(5));
function ageToDays(age) {
    let day = age*365;
    return day ; 
}
//console.log( ageToDays (2)) ; 
function evaluateDivision(num1, num2) {
    let s = num1/ num2 ;
    if (num2===0 ) {
        return "false"; }
         
        else { 
            return s.toFixed(2); 
    }
    
}
//console.log(evaluateDivision (1,3) ) ; 
function pentagonalNumber(n) {
    let pent = n*(3*n -1)/2;
    return pent ;
}
//console.log(pentagonalNumber (5)); 

function calculateBonus(baseSalary, bonusRate) {
    let bonus = baseSalary *(  bonusRate/100);
    return bonus ;
}
//console.log(calculateBonus(50000,10));

function concatenateStrings(str1, str2) {
    return str1+str2 ;
}
//console.log(concatenateStrings("saeed ","kzez"));

 function scottishScreaming(str) {
     return str.toUpperCase();
}
//console.log(scottishScreaming ("saeed kzez"));
function calculateStellaOctangula(n) {
    let s = n*(2*n*n-1);
    return s ;
}
//console.log(calculateStellaOctangula (5) ) ;
function calculateCubeDiagonal(side) {
 let s = Math.sqrt(3) * side ;
 return s ;   
}
//console.log (calculateCubeDiagonal(4)); 
