/* Empty Values
An empty value has nothing to do with undefined.
An empty string variable has both a value and a type.
*/
var car = "";
document.getElementById("demo").innerHTML =
"The value is: " +
car + "<br>" +
"The type is:" + typeof car;

/* Null
In JavaScript null is "nothing". It is supposed to
be something that doesn't exist.
Unfortunately, in JavaScript, the data type of null
is an object.
*/
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
var person = null;

document.getElementById("divNull").innerHTML = typeof person;

/* Difference Between Undefined and Null */
document.getElementById("divDiff").innerHTML =
typeof undefined + "<br>" +
typeof null + "<br>" +
(null === undefined) + "<br>" +
(null == undefined);
