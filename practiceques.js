// QUESTION 1
var a = 1
var b = 2
console.log(a)
console.log(b)

//QUESTION 2
function mul (a,b)
{
    return a*b
}
console.log(mul(2,3))

//QUESTION 3
var c = 'arushi'
var d = 'jindal'
var e = c+d
console.log(e)
console.log(e.length)

//QUESTION 4
var str = "please locate where locate occurs!";
console.log(str.indexOf('where')) 
console.log(str.lastIndexOf("locate"))

//QUESTION 5
var str = "please locate where locate occurs!"
var res = str.slice(7, 13); 
console.log(res)

//Question 6
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "Google"); 
console.log(res)

//QUESTION 7
var str="Hello World"
console.log(str.toUpperCase())

var str ="hello world"
console.log(str.toLowerCase())

//QUESTION 8
var text="hello"
var tex = text.split("m ")
console.log(tex)

//QUESTION 9
var fruits=["banana","orange","apple","mango"]
fruits.push("kiwi")
console.log(fruits)

fruits.pop()
console.log(fruits)
fruits.splice(2,1)
console.log(fruits)

console.log(fruits.indexOf("orange"))
console.log(typeof fruits)

fruits[2]="cherry"
console.log(fruits)

console.log(fruits.toString(fruits))

//QUESTION 10
var x=9.656
console.log(x.toString())
console.log(x.toFixed(2))

//question 11
var a=7.656
console.log(Math.round(a))
console.log(Math.sqrt(a))

//QUESTION 12
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b})) 

//QUESTION 13
console.log(Math.floor(Math.random() * 99) + 0 )
console.log(Math.floor(Math.random() * 9) + 0 )
