//variable
//store the data
//Ex. string, number, boolean, arrays, objects, undefined, null, bigint, Symbol,.....
//we will declare variables by using "var" , "let" or "const" keyword
//"let" or "const" keyword introduced in ES6
//variables should contain a-z, A-Z , 0-9 , $ and _
//variables should not start with digits
//Syntax.
// var / let / const variablename = value;

//javascript supports the following datatypes  (ES11)
//1) string
//2) number
//3) boolean
//4) object
//5) undefined
//6) null
//7) bigint
//8) Symbol


//bigint
//greter than 2^53-1
//ES11 / ES2020
//suffix with "n".
var largeNumber = 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n;
console.log(largeNumber);


//undefined
//after declaring variable, if we didn't any value, then default value is undefined.
var var_one;
console.log(var_one);     //undefined


//null
//null is the datatype is javascript
//null datatype is used to represent "no value" / "empty"
var var_two = null;
console.log( var_two );


//Symbol
//ES11 / ES2020
//Secuirity to data (private)
var var_three = Symbol(100);
console.log( var_three );



//boolean datatype
//true / false
var flag = true;
console.log( flag );   //true



//number
//1) decimal   2) double  3) hexadecimal    4) octal    5) binary
//hexadecimal number will prefix with "0x" and contains A-F
//octal number will prefix with "0o"
//binary number will prefix with "0b"  and contains 0 and 1
var decimalNum = 100;
var doubleNum = 100.12345;
var hexadecimalNum = 0x123ABC;    //1194684
var octalNum = 0o123;             //83
var binaryNum = 0b1010;           //10
console.log( decimalNum, doubleNum, hexadecimalNum, octalNum, binaryNum );


//string
//collection of characters called as string
//"" (double quotes) , ''(single quotes) and ``(backtick) operator
//``(backtick) operator introduced in ES6
//``(backtick) operator also called as template literal
//``(backtick) operator used to define the "paragraphs"
var sub = "JavaScript";
var wish = `Welcome to ${sub}`;
console.log( wish );   //Welcome to JavaScript

var version = `ES11`;
var name1 = `AnshokIT`;
var msg = `
    '${name1}' Welcomes you
    for '${version}' Training !!!
`;
console.log(msg);


//array
//collection of indexed elements called as array
//index starts with 0
//iterate
//ES6 version
//forEach(), for....of(), for....in()
var num_arr1 = [10,20,30,40,50];
var num_arr2 = [100,200,300,400,500];
num_arr1.forEach(function(element,index){
    console.log(element , num_arr2[index] );
});


var front_end = [`VueJS`,`ReactJS With TypeScript`,`Angular12`];
var backend = [`NodeJS`,`Deno`,`Spring Boot`];
front_end.forEach((element,index)=>{
    console.log( element, backend[index] );  
});

//VueJS  NodeJS
//ReactJS With TypeScript  Deno
//Angular12  Spring Boot


//JSON
//Java Script Object Notation
//Java Script Objects
//Transfer the data
//we can store json data in variables
//Objects ===>  {}
//Arrays ===> []
//data ===> key & value pairs
//key & value separated by using ":"
//key value pairs separated by using ,
var obj = {
    sub_one : "ReactJS",
    sub_two : "NodeJS",
    sub_three : "MongoDB"
};
console.log( obj.sub_one, obj.sub_two, obj.sub_three );















































































