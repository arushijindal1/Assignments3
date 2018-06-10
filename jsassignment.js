//question 1
function convertBToD(input)
{
  return parseInt( input.toString(10))
}
console.log(convertBToD("101"))

// question 2
function convertDToO(input)
 {
            
        decimal = input.toString(8)
        console.log(decimal)
 }
     
    convertDToO(9)

function convertDToB(input) 
 {
            
        octal = input.toString(2)
        console.log(octal);
 }
         
     convertDToB(6)

function convertDToH(input)
 {
            
        hexadecimal = input.toString(16)
        console.log(hexadecimal)
            }
             
     convertDToH(6);

//question 3
function randomNumbers(numberOfRandom)
{
        for(let i=0;i<numberOfRandom;i++){
             console.log(parseInt(Math.random()))
        }
}
  randomNumbers(8)
    
//question 4
function dec(input,numberOfdecimalplace)
{
 return input.toFixed(numberOfdecimalplace)
}
console.log(dec(9.1092, 2))

//question 5
var a = [ 2,4,5,8,1]
function maxvalue(input)
{
  return  Math.max.apply(null,input)
}
console.log(maxvalue(a))

//question 6
var a = [ 2,4,5,8,1]
function minvalue(input)
{
  return  Math.min.apply(null,input)
}
console.log(minvalue(a))

//question 7
var gcd = function(a, b)
{
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
}
console.log(gcd(6, 10));

//question 8
function power_of_2(n)
{
    if (typeof n !== 'number') 
         return 'Not a number'; 
   
       return n && (n & (n - 1)) === 0;
}
   
//question 9
var a=239.447
console.log(a.toFixed(2))

//question 10  Doubt


//question 11
function capitalizeFirstLetter(string) 
{
 return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(capitalizeFirstLetter("arushi"))

//question 12
var num1, num2;
num1 = 12
num2 = 9
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger number is "+ num1)
  }   
else if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger number is "+ num2)
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal");
  }

//Question 13  Doubt

//question 14
    var i,j,chr;
    for(i=1; i <=6; i++)
    {
       for (j=1; j < i; j++)
         {
        chr=chr+("*");        
          }
     console.log(chr);
     chr=' ';    
    }
    
//question 15
function comb(str){
    var a = [];
    var res = [];
    for (i=0;i<str.length;i++){
         a = [str[i]];
        var index=0;
        while(res[index]){
            a.push(''+res[index]+str[i]);
            index++;
        }
        res = res.concat(a);
    }
    return res;
    }
    
    console.log(comb('hello'))

    
    
    
    
    
    
    
    
    
    
    
    
   



