//Regular Expression

//Question 1
var word = "Someword";
console.log(( word[0]) == (word[0].toUpperCase()))

//Question 2
var a = 'Test123*** TEST';
var b = a.replace(/[^a-zA-Z]/gi,'');
console.log(b);

//Question 3
function numeric_values(number)
{
    reg = /^[0-9]+$/;
    if(reg.test(number))
    {
        console.log("numeric values")
    }
    else{
        console.log("not a numeric values")
    }
}
 numeric_values(23)
 numeric_values("abc")

 //Question 4
 function url(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}

console.log(url("http://www.abc.com"));

//Question 5

function hexadecimal(str)
{
 regexp = /^[0-9a-fA-F]+$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(hexadecimal("fff"))
console.log(hexadecimal("h786"))

//Object
//Question 1
var obj = {
           name : "arushi",
           class:"6",
          roll : "87"
}
console.log(obj)
delete obj.roll
console.log(obj)

//Question 2
var obj = {
    name : "arushi",
    class:"6",
   roll : "87"
}
var count = 0;
var i;

for (i in a) {
    if (a.hasOwnProperty(i)) {
        count++;
    }
}
console.log(count)

//Question 3
function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
    }
    Person.prototype.nationality = "English"; 
    console.log(Person("ARUSHI","JINDAL",20,"BLACK"))

 