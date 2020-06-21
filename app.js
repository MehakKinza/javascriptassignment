// -----------String Method ---------------
// -----------Chapter # 21 -25-------------
	// ######### Question 1 #######
		// var firstName 	= prompt("Enter Your First Name");
		// var lastName 	= prompt("Enter Your Last Name");
		// var fullName	= firstName + lastName;
		// document.write("<h1>Wellcome "+fullName+ " </h1>");

	// ######### Question 2 ###########
		// var userInput 	= prompt("Enter Your Favorite Cell Phone name");
		// var length 		= userInput.length;
		// document.write("My Favorite Phone is "+" "+userInput+"<br>"+"Length of string is "+length)

	//  ######### Question 3 ##########
		// var word 	= "Pakistani";
		// var search 	= "n"
		// for(var i=0; i<word.length;i++){
		// 	if(search === word[i])
		// 	{
		// 		document.write("index of n : "+i);
		// 		break;
		// 	}
		// }

	// ########### Question 4 #########
		// var word 	= "Hello World";
		// var search 	= "l";
		// var length 	= word.length;
		// for(var i=length-1; i>=0;i--){
		// 	if(search === word[i]){
		// 		document.write("Last Index of l : "+i);
		// 		break;
		// 	}
		// }

	// ######### Question 5 #######
		// var word 	= "Pakistani";
		// document.write("Character at index 3 : "+word[3]);

	// ######## Question 6 ########
		// var firstName 	= prompt("Enter Your First Name");
		// var lastName 	= prompt("Enter Your Last Name");
		// var fullName	= firstName.concat(lastName);
		// document.write("<h1>Wellcome "+fullName+ " </h1>");

	// ######### Question 7 #########
		// var word 	= "Hyderabad";
		// var newWord	= word.replace("Hyder","Islam");
		// document.write(newWord)

	// ######### Question 8 ##########
		// var str 		= "Ali and Sami are best friends. They play cricket and fottball together";
		// var strUpdate	= str.replace("and","&");
		// document.write(strUpdate)

	// ######### Question 9 ##########
		// var str 	= "472";
		// var strType	= typeof(str);
		// document.write(strType)
		// var num		= parseInt(str);
		// document.write("<br>"+typeof(num));

	// ######## Question 10 ############
		// var word 	= prompt("Enter Word Here");
		// document.write(word.toUpperCase());

	// ########## Question 11 ##############
		// var word 	= prompt("Enter Word Here");
		// document.write(word[0].toUpperCase()+word.slice(1));

	// ########### Question 12 ###########
		// var num 	= 35.36;
		// var str 	= num.toString();
		// var res 	= str.replace(/\./g,'');
		// document.write(res)

	// ########## Question 13 ###########
		// var name 	= prompt("Enter Your Name");
		// var regexp	= /[A-Za-z]$/;
		// if(regexp.exec(name)){
		// 	alert("Your Name is :"+name);
		// }
		// else{
		// 	alert("Please enter Valid Username")
		// }

	// ######### Question 14 ###########
		// var array =["cake","apple pie","cookie","chips","patties"];
		// var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
		// var result = input.toLowerCase();
		// for(var x in array){
		// 	if(result == array[x]){
		// 		document.write(result+"is available at index :"+x+" in our bakery");	
		// 		break;
		// 	}
		// 	else{
		// 		document.write("We are sorry."+result+" is not available in our bakery");
		// 		break;		
		// 	}
		// }

	// ############ Question 16 #############
		// var university	= "university of Karachi";
		// for(var i=0; i<university.length;i++){
		// 	document.write(university[i]+"<br>");
		// }

	// ########## Question 17 ##############
		// var input 	= prompt("Enter Word");
		// for(var i=input.length-1;i>=0;i--){
		// 	document.write(input[i]);
		// 	break;
		// }
// ----------------------------------------------------------

// -----------Math Method ---------------
// -----------Chapter # 26 -30-------------
	
	// ############# Question 1 ############
		// var num 	= prompt("Enter Number");
		// var round 	= Math.round(num);
		// var ceilnum = Math.ceil(num);
		// var floornum= Math.floor(num);
		// document.write("Number : "+num+"<br>Round off Value : "+round+"<br>Floor Value : "+floornum+"<br>Ceil Value : "+ceilnum);

 	// ############# Question 2 ############
		// var num 	= prompt("Enter Number");
		// var round 	= Math.round(num);
		// var ceilnum = Math.ceil(num);
		// var floornum= Math.floor(num);
		// document.write("Number : "+num+"<br>Round off Value : "+round+"<br>Floor Value : "+floornum+"<br>Ceil Value : "+ceilnum);

	// ########## Question 3 #############
		// var num 	 = prompt("Enter Number");
		// var absolute = Math.abs(num);
		// document.write("The absolute value of "+num+" is "+absolute);

	// ########## Question 4 ############
		// var dice = Math.floor((Math.random() * 6) + 1);
		// document.write("Random Dice Value is : "+dice);

	// ########### Question 5 ###########
		// var coin 	= Math.floor((Math.random() * 2) + 1);
		// if(coin == 1){
		// 	document.write(coin+" Random Coin Value: Tails");
		// }
		// else{
		// 	document.write(coin+" Random Coin Value: Heads");
		// }

	// ############# Question 6 ###########
		// var num 	= Math.floor((Math.random() * 100) + 1);
		// document.write("Random Number Between 1 and 100 :" +num);

	// ########### Question 7 ##########
		// var input 	= prompt("Enter Your Weight");
		// var result  = parseFloat(input);
		// document.write("The Weight of User is "+result+" Kilogram");


	// ############ Question 8 ###########
		// var num 	= Math.floor((Math.random() * 10) + 1);
		// var secret  = prompt("Enter any number between 1 to 10");
		// if(num == secret){
		// 	alert("Congrajulation you find secret Number");
		// }
		// else{
		// 	alert("Try again");
		// }

// ----------------------------------------------------------

// -----------Date Method ---------------
// -----------Chapter # 31 -34-------------
	
	// ########## Question 1 ##########
		// var date 	= new Date();
		// document.write(date);
	// ######### Question 2 ###########
		// var date 	= new Date();
		// var cmonth 	= date.getMonth();
		// var month 	= ["January","Febraury","March","April","May","June","July","August","September","October","November","December"];
		// var length  = month.length;
		// for(var i=0 ; i<month.length;i++){
		// 	if(cmonth == i){
		// 		document.write("Current Month :"+month[i]);
		// 		break;
		// 	}	
		// }

	// ############ Question 3 ##########
		// var date		= new Date();
		// var day			= date.getDay();
		// var weekend		= ["sun","Mon","Tue","Wed","Thur","Fri","Sat"];
		// for(var i=0; i<weekend.length; i++){
		// 	if(day == i){
		// 		document.write("Today is " +weekend[i]);
		// 		break;
		// 	}
		// }

	// ############ Question 4 ##########
		// var date		= new Date();
		// var day			= date.getDay();
		// var weekend		= ["sun","Mon","Tue","Wed","Thur","Fri","Sat"];
		// for(var i=0; i<weekend.length; i++){
		// 	if(day == i){
		// 		document.write("It's Fun Day");
		// 		break;
		// 	}	
		// } 

	// ########### Question 5 ############
		// var date 	= new Date();
		// var getdate = date.getDate();
		// if(getdate<=15){
		// 	document.write("First Fifteen Days of the Month");
		// }
		// else{
		// 	document.write("Last Days of the Month")
		// }

	// ########### Question 6 #############
		// var date 	= new Date();
		// var milisec = Date.now();
		// var minute 	= date.getMinutes();
		// document.write("Current Date: "+date);
		// document.write("<br>Elapsed Milliseconds Since January 1, 1970 :"+milisec)
		// document.write("<br>Minutes "+minute)

	// ######### Question 8 ###############
		// var date 	= new Date("December 31, 2020 00:00:00");
		// document.write("Later Date :" +date);

	// ########### Question 14 ############
		// var customerName 		= "ABC Customer";
		// var month 				= "June";
		// var unit 				= "410";
		// var chargeUnit 			= "16";
		// var netAmount 			= unit*chargeUnit;
		// var latePay 			= "350";
		// var grossAmount 		= Number(netAmount)+Number(latePay);
		// document.write("<h1>K-Electric Bill</h1>");
		// document.write("<br> Month : "+month);
		// document.write("<br>Number of Units :"+unit);
		// document.write("<br>Charges Per Unit :"+chargeUnit);
		// document.write("<br><br>Net Amount Payable(within Due Date) :"+netAmount);
		// document.write("<br>Late Payment Surcharge : "+latePay);
		// document.write("<br>Gross Amount Payable (after Due Date) :"+grossAmount);
// ----------------------------------------------------------

// -----------Math Method ---------------
// -----------Chapter # 35 -38-------------
	
	// ############# Question 1 ###########
		// function currentDate(){
		// 	var date 	= new Date();
		// 	document.write(date);
		// }
		// currentDate();
	
	// ########### Question 2 ############
		// function userInput(){
		// 	var fName 	= prompt("Enter Your First Name");
		// 	var lName 	= prompt("Enter Your Last Name");
		// 	var greets 	= fName.concat(lName);
		// 	document.write("Welcome " +greets);
		// }
		// userInput();

	// ########### Question 3 #############
		// function sum(){
		// 	var num1 	= prompt("Enter Operand 1 ");
		// 	var num2 	= prompt("Enter Operand 2 ");
		// 	document.write(Number(num1)+Number(num2));
		// }
		// sum();

	// ########### Question 4 #############
		// function calculator(){
		// 	var num1 	= prompt("Enter Number 1");
		// 	var operator = prompt("Enter Operator like +,-,*,/,%");
		// 	var num2	= prompt("Enter Number 2");
		// 	switch(operator){
		// 		case "+" : document.write(Number(num1)+Number(num2)); 
		// 					break;
		// 		case "-" : document.write(num1-num2); 
		// 					break;
		// 		case "*" : document.write(num1*num2); 
		// 					break;
		// 		case "/" : document.write(num1/num2); 
		// 					break;
		// 		case "%" : document.write(num1%num2); 
		// 					break;
		// 		default:
		// 				  document.write("Enter Invalid Operand");
		// 				  break;

		// 	}
		// }
		// calculator();

	// ################ Question 5 ############
		// function square(num){
				// 	document.write(num*num);
			// }
		// square(5);
	
	// ############# Question 6 #############
		// function factorial(){
		// var fact 	= 1;
		// var num 	= prompt("Enter Number");
		// for(var i=num;i>=1;i--){
		// 	fact = fact*i;
		// }
		// document.write("Factorial of "+num+" is : "+fact);
		// }
		// factorial();

	// ############# Question 7 #############
		// function counting(){
		// 	var start 	 = prompt("Enter Starting Point Number");
		// 	var end		 = prompt("Enter Ending Point Number");
		// 	for(var i = start; i<=end ;i++){
		// 		document.write(i+"<br>");
		// 	}
		// }
		// counting();

	// ############# Question 8 #############
		// function areaRectangle(width,height){
		// 	document.write("Area of Rectangle is "+width*height+"<br>");
		// }
		// areaRectangle(2,2);
		// var width  = 5;
		// var height = 6;
		// areaRectangle(width,height);

	// ########## Question 13 ############
		// function search(string,letter){
		// 	var count = 0;
		// 	for(var i=0; i<string.length;i++){
		// 		if(string[i]==letter){
		// 			count++;
		// 		}
		// 	}
		// 	document.write("In "+string+" Letter 'e' found "+count+" time");
		// }
		// search("Welcome to Site","e");

	// ########### Question 14 ###########
		// function calcCircumference(radius){
		// 	var pi 	   = 3.14;
		// 	var result = 2*pi*radius;
		// 	document.write("Circumference of Circle is "+result+"<br>");
		// }
		// function calcArea(radius){
		// 	document.write("Area of Circle is "+(3.14*radius*radius));
		// }
		// calcCircumference(3);
		// calcArea(3);
	