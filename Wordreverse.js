//World Reverse Program //

let string = "i am from bhopal";
var x = string.split(' ');
console.log(string)
x.reverse(x);
var y='';
for(let i=0; i<x.length; i++)
{
    y=y+x[i] +' ';
}
var l =y.length-1;
var z ='';
for(let i =l; i>=0; i--)
{
    z=z+y[i];
}
console.log(z)