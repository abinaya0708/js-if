document.write("1.Positive value or not"+"<br>");
document.write("Output:");
var a=0;
if(a>0){
	document.write("this is positive value"+"<br>");
}
else if(a<0){
	document.write("this is negative value"+"<br>");
}
else{
	document.write("this is zero"+"<br>");
}

document.write("2.Even number or odd"+"<br>");
document.write("Output:");

var a=3;
if(a%2==0){
	document.write("this is even value"+"<br>");
}

else{
	document.write("this is odd"+"<br>");
}

document.write("3. Two digit value or not"+"<br>");
document.write("Output:");
var a=50;
if(a>9){
	document.write("this is two digit value"+"<br>");
}

else{
	document.write("it is not a two digit number"+"<br>");
}

document.write("4. Eligible for vote"+"<br>");
document.write("Output:");

var a=12;
if(a>=18){
	document.write("eligible for vote"+"<br>");
}

else{
	document.write("not eligible for vote "+"<br>");
}

document.write("5. Eligible for license"+"<br>");
document.write("Output:");

var a=20;
if(a>=18){
	document.write("eligible for license"+"<br>");
}

else{
	document.write("not eligible for license "+"<br>");
}


document.write("6.Two numbers are equal  or greater or less than"+"<br>");
document.write("Output:");
var a=10;
var b=10;
if(a>b){
	document.write("greater than"+"<br>");
}

else if(a<b){
	document.write("less than"+"<br>");
}
else{
	document.write("equal"+"<br>");
}
document.write("7. Password is correct or not"+"<br>");
document.write("Output:");
var reg_password="abinaya";
var enter_password="abinaya";
if(reg_password===enter_password){
	document.write("Your password is correct"+"<br>");
}
else{
	document.write("Your password is incorrect"+"<br>");
}
document.write("8. Password is strong or not"+"<br>");
document.write("Output:");
var enter_password="abinayaaa";
var length=enter_password.length;
if(length>=8){
	document.write("Your password is strong"+"<br>");
}
else{
	document.write("Your password is weak"+"<br>");
}

document.write("9. Grade"+"<br>");
document.write("Output:");


var grade=91;

if(grade>90){
	document.write("Grade A"+"<br>");
}

else if(grade>80){
	document.write("Grade B"+"<br>");
}
else if(grade>60){
	document.write("Grade C"+"<br>");
}
else if(grade>40){
	document.write("Grade D"+"<br>");
}

else{
	document.write("fail"+"<br>");
}


document.write("10. Saving amount"+"<br>");
document.write("Output:");
var a=90000;


if(a<2000){
	document.write("basic mobile"+"<br>");
}
else if(a<=20000){
	document.write("android mobile"+"<br>");
}
else if(a<=50000){
	document.write("ipad"+"<br>");
}

else if(a>50000){
	document.write("Apple"+"<br>");
}




document.write("11.Marriage eligibility"+"<br>");
document.write("Output:");
var gender="female";
var age="25";

if((gender="male")||(gender="Male")||(gender="MALE")){
	if(age>21){
		document.write("male-eligible for marriage"+"<br>");
	}
	else if(age<21){
		document.write("male-not-eligible for marriage"+"<br>");
	}
	else{
		document.write("enter correct gender"+"<br>");
	}	
}
 else if((gender="female")||(gender="Female")||(gender="FEMALE")){
	if(age>18){
		document.write("female-eligible for marriage"+"<br>");
	}
	else if(age<18){
		document.write("female-not-eligible for marriage"+"<br>");
	}
	else{
		document.write("enter correct gender"+"<br>");
	}	
}
document.write("12. Divisible by 6 or not"+"<br>");
document.write("Output:");
var a=13;

if(a%6==0){
	document.write("divisible by 6"+"<br>");
}
else{
	document.write("not divisible by 6"+"<br>");
}


document.write("13. which one is largest value---2 values"+"<br>");
document.write("Output:");
var firstNumber=15;
var secondNumber=15;

if (firstNumber>secondNumber){
	document.write("first number is a largest one"+"<br>");
}
 else if (firstNumber<secondNumber){
	document.write("second number is a largest one"+"<br>");
}
else{
	document.write("two values are equal"+"<br>"); 
}

document.write("14. which one is largest value---3 values"+"<br>");
document.write("Output:");
var firstNumber=50;
var secondNumber=70;
var thirdNumber=190;

if ((firstNumber>secondNumber)&&(firstNumber>thirdNumber)){
	document.write("first number is a largest one"+"<br>");
}
 else if ((firstNumber<secondNumber)&&(secondNumber>thirdNumber)){
	document.write("second number is a largest one"+"<br>");
}
else if ((firstNumber<thirdNumber)&&(secondNumber<thirdNumber)){
	document.write("third number is a largest one"+"<br>");
}
else{
	document.write("three values are equal"+"<br>"); 
}

document.write("15. Ascending order---3 values"+"<br>");
document.write("Output:");
var a=50;
var b=50;
var c=10;

// 6 possibilities

// a,b,c
// a,c,b
// b,c,a
// b,a,c
// c,a,b
// c,b,a 

if((a<b)&&(a<c)){
	if(b<c){
		document.write(a,b,c +"<br>");
	}
	else{
		document.write(a,c,b +"<br>");
	}
}

else if((b<a)&&(b<c)){
	if(c<a){
		document.write(b,c,a+"<br>");
	}
	else{
		document.write(b,a,c+"<br>");
	}
}
else if((c<a)&&(c<b)){
	if(a<b){
		document.write(c,a,b+"<br>");
	}
	else{
		document.write(c,b,a+"<br>");
	}
}

else{
	document.write("please enter different value for a,b,c"+"<br>");
}

document.write("16. Descending order---3 values"+"<br>");
document.write("Output:");
	var a=10;
var b=500;
var c=20;

// 6 possibilities

// a,b,c
// a,c,b
// b,c,a
// b,a,c
// c,a,b
// c,b,a 

if((a>b)&&(a>c)){
	if(b>c){
		document.write(a,b,c);
	}
	else{
		document.write(a,c,b);
	}
}

else if((b>a)&&(b>c)){
	if(c>a){
		document.write(b,c,a);
	}
	else{
		document.write(b,a,c);
	}
}
else if((c>a)&&(c>b)){
	if(a>b){
		document.write(c,a,b);
	}
	else{
		document.write(c,b,a);
	}
}

else{
	document.type("please enter different value for a,b,c");
}




