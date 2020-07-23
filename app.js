// Chapter 1

// Task 1
// alert("Welcome Aboard!");

// Task 2
// alert("JavaScript Alert \n Error! Please enter a valid password.");

// Task 3
// alert("Welcome to JS Land... \n  Happy Coding");

// Task 4
// alert("Welcome to JS Land");
// alert("Happy Coding!");

// Task 5
//alert("Hello... I can run JS through my web browser’s console");



// Chapter 2

// Task 1
// var username;


// Task 2
// var myName="Madiha Idrees";


// Task 3
// var message;
// message="Hello World";
// alert(message);


// Task 4
// var name = "John Doe";
// var age = 15;
// var qualification = "Mobile Application Development";

// alert(name);
// alert(age + " years old");
// alert("Certified " + qualification);


// Task 5
// var food = "PIZZA";
// alert(food + "\n" + food.slice(0,4)+ "\n" + food.slice(0,3)+ "\n" + food.slice(0,2)+ "\n" + food.slice(0,1));


// Task 6
// var email = "madihaidrees15@hotmail.com";
// alert("My email adress is " + email);

// Task 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book, " + book);

// Task 8
// document.write("Yah! I can write HTML content through JavaScript");

// Task 9
// var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(string);




// Chapter 3

// Task 1
// var age = 21;
// alert("I am " + age + " years old");


// Task 2
// var count = 14;
// alert("You have visited this site " + count + " times");


// Task 3
// var birthYear = 1998;
// document.write("My birth year is " + birthYear);
// document.write(" <br> Data type of my declared variable is " + (typeof birthYear));

// Task 4
// var name = prompt("Your name");
// var product = prompt("Your desired product");
// var quantity = prompt("product quantity");
// document.write(name + " has ordered " + quantity +" "+ product +"(s) on XYZ Clothing store");




// Chapter 4

// Task 1
// var name, age, gender;

// Task 2
// var 1stname, @ge, last name, *position, 2nd grade; 

// var name1, _gender, $age, userName, l_name;


// Task 3
// document.write("<br> <h1>Rules for naming JS variables</h1>");
// document.write("<br> <br> Variable names can only contain letters, numbers, $ and _ . For example $my_1stVariable");
// document.write("<br> Variables must begin with a letter, $ or_ . For example $name, _name or name");
// document.write("<br> Variable names are case sensitive");
// document.write("<br> Variable names should not be JS keywords");




// Chapter 5

// Task 1
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// document.write("<br> Sum of " + num1 + " and " + num2 + " is " + (num1+num2) );

// Task 2
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// document.write("<br> Difference of " + num1 + " and " + num2 + " is " + (num1-num2) );
// document.write("<br> Product of " + num1 + " and " + num2 + " is " + (num1*num2) );
// document.write("<br> Division of " + num1 + " and " + num2 + " is " + (num1/num2) );
// document.write("<br> Modulus of " + num1 + " and " + num2 + " is " + (num1%num2) );

// Task 3
// var value;
// document.write("<br> Value after variable declaration is " + value);
// value = 5;
// document.write("<br> Initial value: " + value);
// value++;
// document.write("<br> Value after increment is: " + value);
// value = value + 7;
// document.write("<br> Value after addition is:  " + value);
// value--;
// document.write("<br> Value after decrement is: " + value);
// document.write("<br> The remainder is: " + (value%3));

// Task 4
// var cost = 600;
// document.write("<br> Total cost of buying 5 tickets to a movie is " + (cost*5) + "PKR");

// Task 5
// var num = +prompt("Enter a number");
// document.write("<br> Table of " + num);
// for(var i=1; i<=10; i++)
// {
//     document.write("<br>" + num + " x " + i + " = " + (num*i) );
// }

// Task 6
// var cel = 25, far = 70;
// document.write("<br>" + cel + "°C" + " is " + ((cel*(9/5)+32)) + "°F" );
// document.write("<br>" + far + "°F" + " is " + ((far-32)*(5/9)) + "°C" );

// Task 7
// var shipCharge = 100, total;
// var price1 = +prompt("Enter price of 1st item");
// var amount1 = +prompt("Enter quantity of 1st item");
// var price2 = +prompt("Enter price of 2nd item");
// var amount2 = +prompt("Enter quantity of 2nd item");
// total = (price1*amount1) + (price2*amount2) + shipCharge;

// document.write("<br> <h1>Shopping Cart</h1>");
// document.write("<br> Price of item 1 is " + price1);
// document.write("<br> Quantity of item 1 is " + amount1);
// document.write("<br> Price of item 2 is " + price2);
// document.write("<br> Quantity of item 2 is " + amount2);
// document.write("<br> Shipping Charges " + shipCharge);
// document.write("<br><br> Total cost of your order is " + total);

// Task 8
// var marks = +prompt("Enter obtained marks");
// var totalMarks = +prompt("Enter total marks");

// document.write("<br> <h1>Mark Sheet</h1>");
// document.write("<br> Total Marks: " + totalMarks);
// document.write("<br> Marks Obtained: " + marks);
// document.write("<br> Percentage: " + ((marks/totalMarks)*100) + "%" );

// Task 9
// var dollar = 10, riyal = 25;
// document.write("<br> <h1>Currency in PKR</h1>");
// document.write("<br> Total Currency in PKR: " + ((dollar*104.80) + (riyal*28)) );

// Task 10
// var num = 2;
// num = (((num+5)*10)/2);
// document.write("<br> Result: " + num);

// Task 11
// var curYear = +prompt("Enter the current year");
// var birthYear = +prompt("Enter the birth year");

// document.write("<br> <h1>Age Calculator</h1>");
// document.write("<br> Current Year: " + curYear);
// document.write("<br> Birth Year: " + birthYear);
// document.write("<br> Your Age is either: " + ((curYear-birthYear)-1) + " or " + (curYear-birthYear) );


// Task 12
// var radius = 20, pie = 3.142;

// document.write("<br> <h1>The Geometrizer</h1>");
// document.write("<br> Radius of a circle is: " + radius);
// document.write("<br> The circumference is: " + (2*pie*radius));
// document.write("<br> The area is: " + (pie*(radius*radius)));


// Task 13
// var favSnack = prompt("Enter your favourite snack");
// var age = +prompt("Enter your age");
// var estMaxAge = +prompt("Enter an estimated maximum age");
// var perDay = +prompt("Enter amount per day");
// var total = (((estMaxAge-age)*365)*perDay);

// document.write("<br> <h1>Lieftime Supply Calculator</h1>");
// document.write("<br> Favourite Sanck: " + favSnack);
// document.write("<br> Current Age: " + age);
// document.write("<br> Estimated Maximum Age: " + estMaxAge);
// document.write("<br> Amount of Snacks Per Day: " + perDay);
// document.write("<br> You will need " + total +" "+ favSnack + " to last you until the ripe old age of " + estMaxAge);



// Chapter 6 - 9

// Task 1
// var a = 10;

// document.write("<br> Result:");
// document.write("<br> The value of  a  is: " + a);
// document.write("<br> ...........................");
// document.write("<br><br>  The value of  ++a  is: " + (++a));
// document.write("<br> Now the value of  a  is: " + a);
// document.write("<br><br>  The value of  a++  is: " + (a++));
// document.write("<br> Now the value of  a  is: " + a);
// document.write("<br><br>  The value of  --a  is: " + (--a));
// document.write("<br> Now the value of  a  is: " + a);
// document.write("<br><br>  The value of  a--  is: " + (a--));
// document.write("<br> Now the value of  a  is:" + a);


// Task 2
// var a = 2, b = 1;
// var result;
// document.write("<br> The value of a is: " + a);
// document.write("<br> The value of b is: " + b);
// document.write("<br> Computing --a - --b + ++b + b--: ");
// result = --a;
// document.write("<br> The value of  --a  is: " + result);
// result = result - --b;
// document.write("<br> The value of  --a - --b  is: " + result);
// result = result + ++b;
// document.write("<br> The value of  --a - --b + ++b  is: " + result);
// document.write("<br> The value of  --a - --b + ++b + b--  is: " + (result + b--));


// Task 3
// var name = prompt("What is your name?");
// alert("Greetings, " + name + "!");


// Task 4
// var table;
// table = +prompt("Pick a number");

// if (table > 0)
// {
//     document.write("<br> Table of " + table);
//     for(var i=1; i<=10; i++)
//     {
//         document.write("<br>" +table+ " x " +i+ " = " +table*i);
//     }
// }
// else
// {
//     for(var i=1; i<=10; i++)
//     {
//         document.write("<br>" +5+ " x " +i+ " = " +5*i);
//     }
// }


// Task 5
// var sub1, sub2, sub3, mark1, mark2, mark3, total = 100;
// sub1 = prompt("Enter 1st Subject");
// mark1 = +prompt("Enter " + sub1 + " Mark");
// sub2 = prompt("Enter 2nd Subject");
// mark2 = +prompt("Enter " + sub2 + " Mark");
// sub3 = prompt("Enter 3rd Subject");
// mark3 = +prompt("Enter " + sub3 + " Mark");

// document.write("<br><table>");
// document.write("<tr>");
// document.write("<td><b>Subject</td>");
// document.write("<td><b>Total Marks</td>");
// document.write("<td><b>Obtained Marks</td>");
// document.write("<td><b>Percentage</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+sub1+"</td>");
// document.write("<td>"+total+"</td>");
// document.write("<td>"+mark1+"</td>");
// document.write("<td>"+((mark1/total)*100)+"%</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+sub2+"</td>");
// document.write("<td>"+total+"</td>");
// document.write("<td>"+mark2+"</td>");
// document.write("<td>"+((mark2/total)*100)+"%</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+sub3+"</td>");
// document.write("<td>"+total+"</td>");
// document.write("<td>"+mark3+"</td>");
// document.write("<td>"+((mark3/total)*100)+"%</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td> </td>");
// document.write("<td><b>"+total*3+"</td>");
// document.write("<td><b>"+(mark1+mark2+mark3)+"</td>");
// document.write("<td><b>"+(((mark1+mark2+mark3)/(total*3))*100)+"%</td>");
// document.write("</tr>");
// document.write("</table>");




// Chapter 9 - 11

// Task 1
// var city = prompt("Enter your city");
// if(city === "karachi" || city === "Karachi")
// {
//     alert("Welcome to the city of lights!");
// }


// Task 2
// var gender = prompt("Enter your gender");
// if(gender === "male" || gender === "Male")
// {
//     alert(" Good Morning Sir");
// }
// else if(gender === "female" || gender === "Female")
// {
//     alert(" Good Morning Ma’am");
// }


// Task 3
// var colour = prompt("Enter traffic light colour");
// if(colour === "red" || colour === "Red")
// {
//     alert("Must Stop!");
// }
// else if(colour === "yellow" || colour === "Yellow")
// {
//     alert("Ready to move!");
// }
// else if(colour === "green" || colour === "Green")
// {
//     alert("Move now!");
// }


// Task 4
// var amount = +prompt("Enter fuel in car in litres");
// if(amount === 0.25)
// {
//     alert("Please refill the fuel in your car!");
// }


// Task 5
// var a = 4;
// if (++a === 5)
// {alert("given condition for variable a is true");}
// Result: given condition for variable a is true

// var b = 82;
// if (b++ === 83)
// {alert("given condition for variable b is true");}
// Result: no result

// var c = 12;
// if (c++ === 13)
// {alert("condition 1 is true");}
// if(c === 13){alert("condition 2 is true");}
// if (++c < 14){alert("condition 3 is true");}
// if(c === 14){alert("condition 4 is true");}
// Result: condition 2 is true, condition 4 is true

// var materialCost = 20000;var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost)
// {alert("The cost equals");}
// Result: The cost equals

// if (true)
// {alert("True");}
// if (false)
// {alert("False");}
// Result: True

// if("car" < "cat")
// {alert("car is smaller than cat");}
// Result: car is smaller than cat


// Task 6
// var marks1, marks2, marks3, totalMarks, percentage, total = 100;
// marks1 = +prompt("Enter 1st subject marks");
// marks2 = +prompt("Enter 2nd subject marks");
// marks3 = +prompt("Enter 3rd subject marks");

// totalMarks = marks1 + marks2 + marks3;
// percentage = (totalMarks/(total*3))*100;

// document.write("<br> <h1>Mark Sheet</h1>");
// document.write("<br>Total Marks : " + total);
// document.write("<br>Marks Obtained: " + totalMarks);
// document.write("<br>Percentage: " + percentage + "%");
// if(percentage >= 80)
// {
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent");
// }
// else if(percentage >= 70)
// {
//     document.write("<br>Grade: A");
//     document.write("<br>Remarks: Good");
// }
// else if(percentage >= 60)
// {
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: You need to improve");
// }
// else if(percentage < 60)
// {
//     document.write("<br>Grade: You Fail");
//     document.write("<br>Remarks: Sorry");
// }


// Task 7
// var num = 5, guess;

// guess = +prompt("Guess a number between 1 and 10");
// if(guess === num)
// {
//     alert("Bingo! Correct answer");
// }
// else if(guess === (num + 1))
// {
//     alert("Close enough to the correct answer");
// }


// Task 8
// var num = +prompt("Enter a number");
// if((num%3) === 0)
// {
//     alert("This number is divisble by 3");
// }
// else
// {
//     alert("This number is not divisble by 3");
// }


// Task 9
// var num = +prompt("Enter a number");
// if((num%2) === 0)
// {
//     alert("This number is even");
// }
// else
// {
//     alert("This number is odd");
// }


// Task 10
// var temp = +prompt("Enter today's temperature");
// if(temp > 40)
// {
//     alert("It is too hot outside");
// }
// else if(temp > 30)
// {
//     alert("The weather today is normal");
// }
// else if(temp > 20)
// {
//     alert("Today’s weather is cool");
// }
// else if(temp > 10)
// {
//     alert("OMG! Today’s weather is so Cool");
// }


// Task 11
// var num1, num2, operator;

// num1 = +prompt("Enter 1st number");
// operator = prompt("Enter operation");
// num2 = +prompt("Enter 2nd number");

// if(operator === '+')
// {
//     alert("Result: " + (num1+num2));
// }
// else if(operator === '-')
// {
//     alert("Result: " + (num1-num2));
// }
// else if(operator === '*')
// {
//     alert("Result: " + (num1*num2));
// }
// else if(operator === '/')
// {
//     alert("Result: " + (num1/num2));
// }
// else if(operator === '%')
// {
//     alert("Result: " + (num1%num2));
// }




// Chapter 12 - 13

// Task 1
// var char = prompt("Enter a character");
// if(char.charCodeAt(0)>=48 && char.charCodeAt(0)<=57)
// {
//     alert(char + " is a number");
// }
// else if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90)
// {
//     alert(char + " is an uppercase letter ");
// }
// else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122)
// {
//     alert(char + " is a lowercase letter ");
// }


// Task 2
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");

// if(num1 > num2)
// {
//     alert(num1 + " is bigger");
// }
// else if(num2 > num1)
// {
//     alert(num2 + " is bigger");
// }
// else
// {
//     alert("both numbers are equal");
// }


// Task 3
// var num = +prompt("Enter an number");
// if(num > 0)
// {
//     alert(num + " is a positive number");
// }
// else if(num === 0)
// {
//     alert(num + " is equal to zero");
// }
// else
// {
//     alert(num + " is a negative  number");
// }


// Task 4
// var char = prompt("Enter a character");
// if(char === 'a' || char === 'e' || char === 'i'|| char === 'o'|| char === 'u' || char === 'A'|| char === 'E'|| char === 'I'|| char === 'O'|| char === 'U')
// {
//     alert(char + " is a vowel");
// }
// else 
// {
//     alert(char + " is a consonant");
// }


// Task 5
// var password, confirmation;
// password = prompt("Save a password");
// confirmation = prompt("Enter your password");
// if(confirmation === null)
// {
//     alert("Please enter your password");
// }
// else
// {
    // if(confirmation === password)
    // {
    //     alert("Correct! The password you entered matches the original password");
    // }
    // else
    // {
    //     alert("Incorrect password");
    // }
// }


// Task 6
// var greeting;var hour = 13;
// if (hour < 18) 
// {greeting = "Good day";}
// else
// {greeting = "Good evening";}


// Task 7
// var time;
// time = prompt("Enter time in 24-hour format");

// if(time>=0000 && time<1200)
// {
//     alert("Good Morning!");
// }
// else if(time>=1200 && time<1700)
// {       
//      alert("Good Afternoon!");
// }
// else if(time>=1700 && time<2100)
// {       
//      alert("Good Evening!");
// }
// else if(time>=2100 && time<=2359)
// {       
//      alert("Good Night!");
// }



// Chapter 14- 16

// Task 1
// var stdName = [];


// Task 2
// var stdName = new Array();


// Task 3
// var stdName = ["Ahmed", "Ali", "Umar"];


// Task 4
// var num = [1, 2, 3, 4];


// Task 5
// var bool = [true, false];


// Task 6
// var mixed = ["tree", 5, false];


// Task 7
// var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

// document.write("<br> Qualifications:");
// for(var i=0; i< (qual.length); i++)
// {
//     document.write("<br>" + (i+1)+") " + qual[i]);
// }


// Task 8
// var stdName = ["Michael","John","Tony"];
// var marks = [320, 230, 480];

// for(var i=0; i< (stdName.length); i++)
// {
//     document.write("<br> Score of " + stdName[i]+ " is " + marks[i] + ". Percentage: " + ((marks[i]/500)*100) + "%" );
// }


// Task 9
// var colour = ["green", "red", "blue"];

// document.write("<br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// document.body.innerHTML = " ";
// var newColour = prompt("Pick a colour to add to the beginning");
// colour.unshift(newColour);
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// newColour = prompt("Pick a colour to add to the end");
// colour.push(newColour);
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// alert("Pick two colours to add to the beginning");
// newColour = prompt("Pick 1st colour to add to the beginning");
// colour.unshift(newColour);
// newColour = prompt("Pick 2nd colour to add to the beginning");
// colour.unshift(newColour);
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// alert("After the 1st colour is deleted");
// colour.shift();
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// alert("After the last colour is deleted");
// colour.pop();
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// newColour = prompt("Pick a colour to add");
// var index = prompt("Pick index");
// colour.splice(index, 0,newColour);
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// var amount = prompt("Pick how many colours to delete");
// var index = prompt("Pick index");
// colour.splice(index, amount);
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }


// Task 10
// var scores = [320, 230, 480, 120];

// document.write("<br>Scores of Students: " + scores);
// scores.sort(function(a, b){return a - b});
// document.write("<br><br>Ordered Scores of Students: " + scores);


// Task 11
// cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(2, 5);

// document.write("<br> Cities List: <br>" + cities);
// document.write("<br><br> Selected Cities List: <br>" + selectedCities);


// Task 12
// var arr = ["This", "is", "my", "cat"];
// document.write("<br> Array: <br>" + arr);
// document.write("<br><br> String: <br>" + arr.join(" ") );


// Task 13
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<br> Devices: <br>" + devices + "<br>");
// var length = devices.length;
// for(var i=0; i<length; i++)
// {
//     document.write("<br>Out:");
//     var x = devices.shift();
//     document.write("<br>" + x);
// }


// Task 14
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<br> Devices: <br>" + devices + "<br>");
// var length = devices.length;
// for(var i=0; i<length; i++)
// {
//     document.write("<br>Out:");
//     var x = devices.pop();
//     document.write("<br>" + x);
// }


// Task 15
// phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<br> <select>");
// for(var i=0; i<phone.length; i++)
// {
//     document.write("<option>" + phone[i] +"</option>");
// }
// document.write("</select>");



// Chapter 17- 20

// Task 1
// var studentMarks = [
//     ["Ali", 60],
//     ["Ahmed", 70],
//     ["Umar", 80]
// ];


// Task 2
// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];


// Task 3
// for(var i=1; i<=10; i++)
// {
//     document.write("<br>" + i);
// }


// Task 4
// var table = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");

// document.write("<br> Multiplication Table of " + table);
// document.write("<br> Length " + length + "<br>");
// for(var i=1; i<=length; i++)
// {
//     document.write("<br>" + table + " x " + i + " = " + (table*i));
// }


// Task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(var i=0; i<fruits.length; i++)
// {
//     document.write("<br>" + fruits[i]);
// }
// document.write("<br>");
// for(var i=0; i<fruits.length; i++)
// {
//     document.write("<br> Element at index " + i + " is " + fruits[i]);
// }


// Task 6
// document.write("<br> <b>Counting:</b> <br><br>");
// for(var i=1; i<=15; i++)
// {
//     document.write(i + ", ");
// }
// document.write("<br><br> <b>Reverse Counting:</b> <br><br>");
// for(var i=10; i>=1; i--)
// {
//     document.write(i + ", ");
// }
// document.write("<br><br> <b>Even:</b> <br><br>");
// for(var i=2; i<=20; i+=2)
// {
//     document.write(i + ", ");
// }
// document.write("<br><br> <b>Odd:</b> <br><br>");
// for(var i=1; i<=19; i+=2)
// {
//     document.write(i + ", ");
// }
// document.write("<br><br> <b>Series:</b> <br><br>");
// for(var i=2; i<=20; i+=2)
// {
//     document.write(i + "k, ");
// }


// Task 7
// A = ["cake", "apple pie", "cookie", "chips", "patties"]; var available = 0;
// var input = prompt("Welcome to ABC Bakery. What do you want to order Sir / Ma'am?");
// for(var i=0; i<A.length; i++)
// {
//     if(A[i] === input)
//     {
//         var available = 1;
//         document.write(input + " is <b>available</b> at index " + i + " in our bakery");
//         break;
//     }
// }
// if(available === 0)
// {
//     document.write("We are sorry. " + input + " is <b> not available</b> in our bakery")
// }    


// Task 8
// var A = [24, 53, 78, 91, 12]; big = 0;

// for(var i=0; i<A.length; i++)
// {
//     if(A[i] > big )
//     {
//         big = A[i];
//     }
// }

// document.write("<br> Array items: " + A);
// document.write("<br> The largest number is " + big);


// Task 9
// var A = [24, 53, 78, 91, 12]; small = A[0];

// for(var i=0; i<A.length; i++)
// {
//     if(A[i] < small )
//     {
//         small = A[i];
//     }
// }

// document.write("<br> Array items: " + A);
// document.write("<br> The smallest number is " + small);


// Task 10
// for(var i=5; i<=100; i+=5)
// {
//     document.write(i + ", ");
// }



// Chapter 21-25

// Task 1
// var fName = prompt("Enter your first name");
// var lName = prompt("Enter your last name");
// var fullName = fName + " " + lName;
// alert("Welcome " + fullName + "!");


// Task 2
// var favPhone = prompt("Enter your favourite mobile phone model");
// var strLength = favPhone.length;

// document.write("<br> My favourite phone is: " + favPhone);
// document.write("<br> Length of string: " + strLength);


//Task 3
// var myString = "Pakistani";
// var loc = myString.indexOf('n');

// document.write("<br> String: " + myString);
// document.write("<br> Location of 'n': " + loc);


// Task 4
// var myString = "Hello World";
// var loc = myString.lastIndexOf("l");

// document.write("<br> String: " + myString);
// document.write("<br> Last index of 'l': " + loc);


// Task 5
// var myString = "Pakistani";
// var char = myString.charAt(3);

// document.write("<br> String: " + myString);
// document.write("<br> Character at index 3: " + char);


// Task 6
// var fName = prompt("Enter your first name") + " ";
// var lName = prompt("Enter your last name");
// var fullName = fName.concat(lName);
// alert("Welcome " + fullName + "!");


// Task 7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");

// document.write("<br> City: " + city);
// document.write("<br> After replacement: " + newCity);


// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");

// document.write("<br> Original Message: " + message);
// document.write("<br> New Message: " + newMessage);


// Task 9
// var myString = "472";
// var toNum = parseInt(myString);

// document.write("<br> Value: " + myString);
// document.write("<br> Type: " + typeof myString);
// document.write("<br> Value: " + toNum);
// document.write("<br> Type: " + typeof toNum);


// Task 10
// var input = prompt("Enter a word");
// var newInput = input.toUpperCase();

// document.write("<br> User input: " + input);
// document.write("<br> Uppercase: " + newInput);


// Task 11
// var input = prompt("Enter a word");
// var first = input.slice(0, 1);
// var rest = input.slice(1);
// var newInput = first.toUpperCase() + rest;

// document.write("<br> User input: " + input);
// document.write("<br> Titlecase: " + newInput);


// Task 12
// var num = 35.36 ;
// var str = num.toString();
// var newString = str.replace(".", "");

// document.write(newString);


// Task 13
// var input = prompt("Enter your username");

// for (var i=0; i<input.length; i++)
// {
//     if( input.charCodeAt(i) === 33  || input.charCodeAt(i) === 44 || input.charCodeAt(i) === 46 || input.charCodeAt(i) === 64 )
//     {
//         alert("Please enter a valid username");
//     }
// }


// Task 14
// A = ["cake", "apple pie", "cookie", "chips", "patties"]; var temp = 0;
// var input = prompt("Welcome to ABC Bakery. What do you want to order Sir / Ma'am?");
// var caseInsensitive = input.toLowerCase();

// for(var i=0; i<A.length; i++)
// {
//     if(A[i] === caseInsensitive)
//     {
//         var temp = 1;
//         document.write(input + " is <b>available</b> at index " + i + " in our bakery");
//         break;
//     }
// }
// if(temp === 0)
// {
//     document.write("We are sorry. " + input + " is <b> not available</b> in our bakery")
// }


// Task 15
// var pass = prompt("Please enter your password");
// var countNum = 0, countAlpha = 0;

// if(pass.length < 6)
// {
//     alert("The password must be at least 6 characters long");
// }
// if( pass.charCodeAt(0)>= 48 && pass.charCodeAt(0)<=57 )
// {
//     alert("The password must not start with a number");
// }

// for(var i=1; i<=pass.length; i++)
// {
//     if(pass.charCodeAt(i)>= 48 && pass.charCodeAt(i)<=57 )
//     {
//         countNum++;
//     }
    
//     else if(pass.charCodeAt(i)>= 65 && pass.charCodeAt(i)<=90  ||  pass.charCodeAt(i)>= 97 && pass.charCodeAt(i)<=122 )
//     {
//         countAlpha++;
//     }
// }

// if(countNum === 0)
// {
//     alert("The password must contain numbers");
// }

// if(countAlpha === 0)
// {
//     alert("The password must contain alphabets");
// }


// Task 16
// var university = "University of Karachi";
// var uniArray = university.split("");

// for(var i=0; i<uniArray.length; i++)
// {
//     document.write("<br>" + uniArray[i]);
// }


// Task 17
// var myString = "Pakistan";
// var lastChar = myString.slice((myString.length-1));

// document.write("<br> User input: " + myString);
// document.write("<br> Last character of input: " + lastChar);


// Task 18
// var text = "The quick brown fox jumps over the lazy dog";
// text = text.toLowerCase();
// var count = 0;

// for(var i=0; i<text.length; i++)
// {
//     if(text[i] === "t" && text[i+1] === "h" && text[i+2] === "e")
//     {
//         count++;
//     }
// }
// alert("There are " + count + " occurrence(s) of the word \'the\' ");



// Chapter 26 - 30

// Task 1
// var num = prompt("Enter a real number");

// document.write("<br> number: " + num);
// document.write("<br> round off value: " + Math.round(num));
// document.write("<br> floor value: " + Math.floor(num));
// document.write("<br> ceil value: " + Math.ceil(num));


// Task 2
// var num = prompt("Enter a negative floating point number");

// document.write("<br> number: " + num);
// document.write("<br> round off value: " + Math.round(num));
// document.write("<br> floor value: " + Math.floor(num));
// document.write("<br> ceil value: " + Math.ceil(num));


// Task 3
// var num = prompt("Enter a negative number");
// document.write("<br> The absolute value of " + num + " is " + Math.abs(num));


// Task 4
// var ranNum = ((Math.random() * 6) + 1);
// var diceNum = Math.floor(ranNum);

// document.write("<br> random dice value: " + diceNum);


// Task 5
// var ranNum = ((Math.random() * 2) + 1);
// var coinNum = Math.floor(ranNum);
// var coinSide;

// if(coinNum === 1)
// {
//     coinSide = "Tails";   
// }
// else
// {
//     coinSide = "Heads"; 
// }
// document.write("<br>" + coinNum + "<br> random coin value: " + coinSide);


// Task 6
// var ranNum = ((Math.random() * 100) + 1);
// var finalNum = Math.floor(ranNum);

// document.write("<br> random number between 1 and 100: " + finalNum);


// Task 7
// var weightStr = prompt("Enter your weight in kilograms");
// var weight = parseFloat(weightStr);
// document.write("<br> The weight of user is " + weight + " kilograms");


// Task 8
// var ranNum = ((Math.random() * 10) + 1);
// var input = +prompt("Enter a number between 1 and 10");

// if(input === ranNum)
// {
//     alert("Congratulations! You are right");
// }
// else
// {
//     alert("Try Again!");
// }



// Chapter 31 - 34

// Task 1
// var rightNow = new Date();
// document.write(rightNow);


// Task 2
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var monthIndex = date.getMonth();

// document.write("<br> Current month: " + month[monthIndex]);


// Task 3
// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var dayIndex = date.getDay();

// document.write("<br> Today is " + day[dayIndex]);


// // Task 4
// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var dayIndex = date.getDay();
// var message;

// if(dayIndex === "Sat" || dayIndex === "Sun")
// {
//     message = "It's Fun day";
// }
// else
// {
//     message = "Not Yet!";
// }

// document.write("<br>" + message);


// Task 5
// var date = new Date();
// var rightNow = date.getDate();

// if(rightNow <= 15)
// {
//     document.write("<br> First fifteen days of the month");
// }
// else
// {
//     document.write("<br> Last days of the month");
// }


// Task 6
// var date = new Date();
// var nowMins = (date.getTime() / 1000);
// var nowMilli = date.getTime();

// document.write("<br> Current Date: " + date);
// document.write("<br> Elapsed milliseconds since January 1, 1970: " + nowMilli);
// document.write("<br> Elapsed minutes since January 1, 1970: " + nowMins);


// Task 7
// var date = new Date();
// var rightNow = date.getHours();

// if(rightNow <= 12)
// {
//     document.write("<br> It's AM");
// }
// else
// {
//     document.write("<br> It's PM");
// }


// Task 8
// var laterDate = new Date("December 31, 2020 00:00:00");
// document.write("<br> Later date: " + laterDate);


// Task 9
// var thisDate = new Date();
// var firstRamadan = new Date("April 25, 2020");

// var msThisDate = thisDate.getTime();
// var msFirstRamadan = firstRamadan.getTime();

// var msDiff = msThisDate - msFirstRamadan;

// var timeLapsed = Math.floor( msDiff / (1000 * 60 * 60 * 24) ) ;
// document.write("<br>" + timeLapsed + " days have passed since 1st Ramadan, 2020");


// Task 10
// var refDate = new Date();
// var startDate = new Date("January 1, 2015");

// var msRefDate = refDate.getTime();
// var msStartDate = startDate.getTime();

// var msDiff = msRefDate - msStartDate;

// var timeLapsed = Math.floor( msDiff / 1000 ) ;
// document.write("<br> On reference date, " + refDate + ",");
// document.write("<br>" + timeLapsed + " seconds have passed since the beginning of 2015");


// Task 11
// var thisDate = new Date();
// var hrBefore = thisDate.getHours() - 1;

// document.write("<br> current date: " + thisDate);
// thisDate.setHours(hrBefore);
// document.write("<br> 1 hour ago, it was " + thisDate);


// Task 12
// var thisDate = new Date();
// var yrsBefore = thisDate.getFullYear() - 100;

// document.write("<br> current date: " + thisDate);
// thisDate.setFullYear(yrsBefore);
// document.write("<br> 100 years back, it was " + thisDate);

// Task 13
// var date = new Date();
// var thisYear = date.getFullYear();

// var dob = +prompt("Enter your birth year");
// document.write("<br> Your age is " + (thisYear - dob) );
// document.write("<br> Your birth year is " + dob);


// Task 14
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var thisMonth = month[date.getMonth()];
// var name = prompt("Enter your name");
// var noUnits = prompt("Enter Number of units");
// var unitCharge = 16; 
// var netPayable = noUnits * unitCharge;
// var lateCharge = 350; 
// var grossPayable = netPayable + lateCharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<br> Customer Name: <b>" + name + "</b>");
// document.write("<br> Month: <b>" + thisMonth + "</b>");
// document.write("<br> Number of units: <b>" + noUnits + "</b>");
// document.write("<br> Charges per unit: <b>" + unitCharge + "</b>");

// document.write("<br><br> Net Amount Payable (within Due Date): <b>" + netPayable + "</b>");
// document.write("<br> Late Payment Surcharge: <b>" + lateCharge + "</b>");
// document.write("<br> Gross Amount Payable (after Due Date): <b>" + grossPayable + "</b>");



// Chapter 35 - 38

// Task 1
// function dateAndTime()
// {
//     var date = new Date();
//     document.write(date);
// }

// dateAndTime();


// Task 2
// function greeting()
// {
//     var fName = prompt("Enter your first name");
//     var lName = prompt("Enter your last name");
//     alert("Greetings, " + fName + " " + lName + "!");
// }

// greeting();


// Task 3
// function sum(a, b)
// {
//     return (a + b);
// }

// alert("Enter two numbers to add");
// var num1 = +prompt("First number");
// var num2 = +prompt("Second number");
// alert(num1 + " + " + num2 + " = " + (sum(num1, num2)) );


// Task 4
// function calculator(a, b, opr)
// {
//     if(opr === '+')
//     {
//        return (a + b); 
//     }
//     if(opr === '-')
//     {
//        return (a - b); 
//     }
//     if(opr === '*')
//     {
//        return (a * b); 
//     }
//     if(opr === '/')
//     {
//        return (a / b); 
//     }
// }

// var num1 = +prompt("First number");
// var sign = prompt("Operation");
// var num2 = +prompt("Second number");
// alert(num1 + " " + sign + " " + num2 + " = " + (calculator(num1, num2, sign)) );


// Task 5
// function square(a)
// {
//     return (a * a);
// }

// var num = +prompt("Enter a number to find its square");
// alert(" The square of " + num + " = " + (square(num)) );


// Task 6
// function factorial(a)
// {
//     var count = 1;
//     for(var i=1; i<=a; i++)
//     {
//         count = count * i;
//     }
//     return count;
// }

// var num = +prompt("Enter a number to find its factorial");
// alert(num + "! = " + (factorial(num)) );


// Task 7
// function counting()
// {
//     var start = +prompt("Enter a number to begin counting with");
//     var end = +prompt("Enter a number to end counting with");

//     document.write("<br><b>Counting</b><br>");
//     for(var i=start; i<=end; i++)
//     {
//         document.write(i + "<br>");
//     }
// }

// counting();


// Task 8
// function calculateHypotenuse(base, perp)
// {
//     function calculateSquare(a)
//     {
//         return (a * a);
//     }

//     return ( calculateSquare(base) + calculateSquare(perp) );
// }

// var base = +prompt("Enter the right-angle's base");
// var perp = +prompt("Enter the right-angle's perpendicular");
// alert(" The hypotenuse of a right-angle triangle with base " + base + " and perpendicular " + perp + " is " + (calculateHypotenuse(base, perp)) );


// Task 9
// function area(width, height)
// {
//     alert("The rectangle's area is " + (width * height));
// }

// var width = +prompt("Enter the rectangle's width");
// var height = +prompt("Enter the rectangle's height");
// area(width, height);

// area(2, 7);


// Task 10
// function checkPalindrome(str)
// {
//     var arr = (str.toLowerCase()).split(""); var text = "";
//     for(var i=(arr.length -1); i>=0; i--)
//     {
//         text = text + arr[i];
//     }

//     if(text === (str.toLowerCase()))
//     {
//         alert("\'" + str + "\'" + " is a palindrome");
//     }
//     else
//     {
//         alert("\'" + str + "\'" + " is not a palindrome");
//     }
// }

// var str = prompt("Enter a word to check if it is a palindrome");
// checkPalindrome(str);


// Task 11
// function topicCase(text)
// {  
//     var arr = text.split("");
//     var str = "";

//     arr[0] = arr[0].toUpperCase();
//     str = str + arr[0];

//     for(var i=1; i<arr.length; i++)
//     {
//         if(arr[i] === " ")
//         {
//             arr[i+1] = arr[i+1].toUpperCase();
//         }
//         str = str + arr[i];
//     }   
//     alert(str);
// }

// var text = prompt("Enter text to convert to topic case");
// topicCase(text);


// Task 12
// function bigWord(str)
// {
//     var arr = (str + " ").split(""); var text = "", maxText = "";
//     var count = 0, maxCount = 0;
//     for(var i=0; i<arr.length; i++)
//     {
//         if(arr[i] !== " ")
//         {
//             text = text + arr[i];
//             count++;
//         }
//         else
//         {
//             if(count > maxCount)
//             {
//                 maxText = text;
//                 maxCount = count;
//             }
//             text = ""; 
//             count = 0;
//         }
//     }

//     document.write("Text: " + str);
//     document.write("<br> Longest Word: " + maxText);
// }

// var str = prompt("Enter some text");
// bigWord(str);


// Task 13
// function findChar(str, chr)
// {
//     var count = 0;
//     for(var i=0; i<str.length; i++)
//     {
//         if(str[i] === chr)
//         {
//             count = count + 1;
//         }
//     }

//     alert("The letter " + chr + " occurs in " + str + " " + count + " times");
// }

// var str = prompt("Enter a string");
// var chr = prompt("Enter the character you wish to search");

// findChar(str, chr);


// Task 14
// var pie = 3.142;
// function calcCircumference(radius)
// {
//     alert("The circumference is " + (2*pie*radius) );
// }
// function calcArea(radius)
// {
//     alert("The area is " + (pie*radius*radius) );
// }

// var radius = +prompt("Enter your circle's radius");

// calcCircumference(radius);
// calcArea(radius);



// Chapter 38 - 44

// Task 1
// function power(a, b){
//     result = a;
//     for(var i=1; i<b; i++)
//     {
//         result = result * a;
//     }
//     return result;
// }

// var a = +prompt("Enetr a number");
// var b =+prompt("Enter power");
// alert(a + " power " + b + " equals to " + power(a,b));


//Task 2
// function checkLeapYear(year){
//     var leap = false;
//     if((year % 4) === 0){
//         if((year % 100) === 0){
//             if((year % 400) === 0){
//                 leap = true;
//             }
//             else{ leap = false; }
//         }
//         else{ leap = true; }
//     }
//     if(leap === true){
//         alert(year + " is a leap year");
//     }
//     else{
//         alert(year + " is not a leap year");
//     }
// }

// var year = +prompt("Enter a year to check if it's a leap year.");
// checkLeapYear(year);


//Task 3
// function area(a, b, c){
//     aSide = (side(a,b,c));
//     return (aSide * (aSide - a) * (aSide - b) * (aSide - c));
// }

// function side(a, b, c){
//     return ((a + b + c) /2);
// }

// alert("Enter the three sides of a triangle to calculate area");
// var a = +prompt("Enter first side");
// var b = +prompt("Enter second side");
// var c = +prompt("Enter third side");
// alert("Area = " + area(a,b,c));


//Task 4
// function mainFunction(){
//     alert("Enter marks for three subjects out of \'10\'");
//     var sub1 = +prompt("Enter the first subject's marks");
//     var sub2 = +prompt("Enter the second subject's marks");
//     var sub3 = +prompt("Enter the third subject's marks");

//     document.write("<br> Subject 1 Marks: " + sub1);
//     document.write("<br> Subject 2 Marks: " + sub2);
//     document.write("<br> Subject 3 Marks: " + sub3);
//     document.write("<br><br> Average Marks: " + average(sub1,sub2,sub3));
//     document.write("<br> Percentage: " + percentage(sub1,sub2,sub3));
// }
// function average(s1, s2, s3){
//     return ((s1 + s2 + s3) /3);
// }
// function percentage(s1, s2, s3){
//     return (((s1 + s2 + s3) /30) * 100);
// }

// mainFunction();


//Task 5
// function myIndexOf(str, chr){
//     var index;
//     for(var i=0; i<str.length; i++)
//     {
//         if(str[i] === chr || str[i] === chr.toUpperCase() || str[i] === chr.toLowerCase())
//         {
//             index = i;
//         }
//     }
//     alert("Index of " + chr + " in " + str + " is " + index);
// }

// var str = prompt("Enter a string");
// var chr = prompt("Enter a character to search");
// myIndexOf(str,chr);


//Task 6
// function noVowels(str){
//     var newStr = "";
//     for(var i=0; i<str.length; i++)
//     {
//         if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U')
//         {
//             newStr += "";
//         }
//         else
//         {
//             newStr += str[i];
//         }
//     }
//     alert("Your modified string is: \'" + newStr + "\'");
// }

// var str = prompt("Enter a string to remove vowels from");
// noVowels(str);


//Task 7
// var str = prompt("Enter your string");
// var temp="";

// document.write("Occurences of two successive vowels are: ");
// for(var i=0; i<str.length; i++){
//     if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U')
//     {
//         temp += str[i];
//         switch(str[i+1]){
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//             case 'A':
//             case 'E':
//             case 'I':
//             case 'O':
//             case 'U':
//                 temp += str[i+1];
//                 document.write("<br>" + temp);
//                 break;
//         }
//         temp = "";
//     }
// }


//Task 8
// function calcMt(dist){
//     var metre = dist * 1000;
//     document.write("<br>" + dist + " kilometres = " + metre + " metres");
// }
// function calcCm(dist){
//     var centimetres = dist * 1000 * 100;
//     document.write("<br>" + dist + " kilometres = " + centimetres + " centimetres");
// }
// function calcFt(dist){
//     var feet = (dist * 1000 * 100) / 30.48;
//     document.write("<br>" + dist + " kilometres = " + feet + " feet");
// }
// function calcIn(dist){
//     var inch = ((dist * 1000 * 100) / 30.48) * 12;
//     document.write("<br>" + dist + " kilometres = " + inch + " inch");
// }

// var distance = +prompt("Enter distance in kilometres");
// calcMt(distance);calcFt(distance);calcIn(distance);calcCm(distance);


//Task 9
// function calcOvertimePay(hours){
//     if(hours > 40)
//     {
//         var diff = hours - 40;
//         pay = diff * 12;
//         alert("Overtime Pay: Rs." + pay);
//     }
//     else
//     {
//         alert("Not eligible for overtime pay");
//     }
// }

// var hrWeek = +prompt("Enter number of hours worked in the week");
// calcOvertimePay(hrWeek);


//Task 10
// var amount = +prompt("Enter amount to withdraw");
// var hundCount = 0; var fifCount = 0; var tenCount = 0; var amt = amount;

// while(amt >= 100){
//     hundCount = Math.floor(amt /100);
//     amt = amt % 100;
// }   
// while(amt >= 50){
//     fifCount = Math.floor(amt /50);
//     amt = amt % 50;
// }
// while(amt >= 10){
//     tenCount = Math.floor(amt /10);
//     amt = amt % 10;
// }

// document.write("<br> For Rs." + amount +", the withdrawer will receive:");
// document.write("<br>" + hundCount + " hundred notes, ");
// document.write(fifCount + " fifty notes and " + tenCount + " ten notes.");



//Chapter 43 - 48

//Task 1
// var a = document.createElement("a");

// // Create the text node for anchor element. 
// var link = document.createTextNode("Link"); 
                  
// // Append the text node to anchor element. 
// a.appendChild(link);

// // Append the anchor element to the body. 
// document.body.appendChild(a);  

// a.addEventListener("click", onClick);

// function onClick(){
//     alert("You have just clicked on a link");
// }


//Task 2
// function onClick(){
//     alert("Thank you for purchasing a phone from us");
// }


//Task 3
// var myTable = document.getElementById("my-table");
// var students = ["John","Doe","Mark","James","Sam","Lily","Jane","Dakota","Paige","Alex"];
// var grade = [10,9,10,8,8,8,9,9,10,8];
// var totalRows = 10;

// for(var i=0; i<totalRows; i++){
//     var row = document.createElement("tr");

//     var cell1 = document.createElement("td"); 
//     cell1.innerText = i;
//     row.appendChild(cell1);

//     var cell2 = document.createElement("td");
//     cell2.innerText = students[i];
//     row.appendChild(cell2);

//     var cell3 = document.createElement("td");
//     cell3.innerText = grade[i];
//     row.appendChild(cell3);

//     var cell4 = document.createElement("td");
//     cell4.innerHTML += "<button onclick=\"delRow(this)\">Delete</button>"
//     row.appendChild(cell4);

//     myTable.appendChild(row);
// }

// function delRow(btn){
//     // button's       td's        tr      row index
//     var myRow = btn.parentNode.parentNode.rowIndex;
//     myTable.deleteRow(myRow); 
// }


// Task 4
// function changeImg(){
//     var img = document.getElementById("before");
//     img.src = "emoji2.png";
// }
// function revertImg(){
//     var img = document.getElementById("before");
//     img.src = "emoji1.png";
// }


//Task 5
// function incCounter(){
//     var text = document.getElementById("count-screen");
//     var count = parseInt(text.innerText);
//     count++;
//     text.innerHTML = count;
// }
// function decCounter(){
//     var text = document.getElementById("count-screen");
//     var count = parseInt(text.innerText);
//     if(count != 0){
//     count--;
//     }
//     text.innerHTML = count;
// }



//Chapter 49 - 52

//Task 1
// function formSubmit(){
//     var signUpForm = document.getElementById("form");
//     signUpForm.classList.add("hidden");

//     var username = document.getElementById("username");
//     var email = document.getElementById("email");
//     var password = document.getElementById("pass");

//     document.write("<br><br> Username: " + username.value);
//     document.write("<br> Email: " + email.value);
//     document.write("<br> Password: " + password.value);
// }


//Task 2
// function expandText(){
//     var fullText = "Ludo is a strategy board game for two to four players, in which the players race their four tokens from start to finish according to the rolls of a single die. Like other cross and circle games, Ludo is derived from the Indian game Pachisi, but simpler. The game and its variations are popular in many countries and under various names."
//     document.getElementById("short-text").innerHTML = fullText;
// }


//Task 3
// var students = []; var grades = [];
// function addStud(){
//     var name = document.getElementById("name");
//     var grade = document.getElementById("grade");

//     students.push(name.value);
//     grades.push(grade.value);

//     name.value = "";
//     grade.value = "";
// }

// var myTable = document.getElementById("my-table");
// function viewTable(){
//     var studTable = document.getElementById("student-table");
//     studTable.classList.add("hidden");
//     myTable.classList.remove("hidden");

//     for(var i=0; i<students.length; i++){
//         var row = document.createElement("tr");

//         var cell1 = document.createElement("td"); 
//         cell1.innerText = i;
//         row.appendChild(cell1);

//         var cell2 = document.createElement("td");
//         cell2.innerText = students[i];
//         row.appendChild(cell2);

//         var cell3 = document.createElement("td");
//         cell3.innerText = grades[i];
//         row.appendChild(cell3);

//         var cell4 = document.createElement("td");
//         cell4.innerHTML += "<button onclick=\"editRow(this)\">Edit</button>"
//         row.appendChild(cell4);

//         var cell5 = document.createElement("td");
//         cell5.innerHTML += "<button onclick=\"delRow(this)\">Delete</button>"
//         row.appendChild(cell5);

//         myTable.appendChild(row);
//     }
// }
// function editRow(btn){
//     var myRow = btn.parentNode.parentNode;
//     myRow.childNodes[1].innerHTML = "<input type=\"text\" id=\"name\">";
//     myRow.childNodes[2].innerHTML = "<input type=\"text\" id=\"grade\">";
//     myRow.childNodes[3].innerHTML = "<button onclick=\"updateRow(this)\">Update</button>";

// }
// function updateRow(btn){
//     var myRow = btn.parentNode.parentNode;
//     // get the index column value of the row  
//     myRowIndex = myRow.childNodes[0].innerText;

//     students[myRowIndex] = myRow.childNodes[1].childNodes[0].value;
//     grades[myRowIndex] = myRow.childNodes[2].childNodes[0].value;

//     myRow.childNodes[1].innerHTML = students[myRowIndex];
//     myRow.childNodes[2].innerHTML = grades[myRowIndex];
//     myRow.childNodes[3].innerHTML = "<button onclick=\"editRow(this)\">Edit</button>";
    

// }
// function delRow(btn){
//     // button's       td's        tr      row index
//     var myRow = btn.parentNode.parentNode.rowIndex;
//     myTable.deleteRow(myRow); 
// }



// Chapter 52 - 57

// Task 1
// var imageArray = ["1.jpg","2.jpg","3.jpg","4.png","5.jpg","6.jpg","7.png","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.png","15.jpg"];
// var images = document.getElementById("images");

// for(var i=0; i<imageArray.length; i++){
//     images.innerHTML += "<img src=\"" + imageArray[i] + "\" onclick=\"onClick(this.src)\" width=\"350px\" height=\"250px\" >";
//     console.log(imageArray[i])
// }

// function onClick(imgSource){
//     var modal = document.getElementById("modal");
//     modal.classList.add("modal-open");
//     modal.classList.remove("hidden");
//     modal.classList.remove("modal-close");

//     var image = document.getElementById("modal-img");
//     image.src = imgSource;
//     console.log(image.src);
// }

// function onClosedImagModal(){
//     var modal = document.getElementById("modal");
//     modal.classList.remove("modal-open");
//     modal.classList.add("modal-close");
//     modal.classList.add("hidden");
//     setTimeout(()=>{ modal.style.display = "none"; }, 550) 
// }

// Task 2
// var para = document.getElementById("para");
// function zoomIn(){
//     // para.classList.add("big-font");
//     var font = window.getComputedStyle(para,null).getPropertyValue('font-size');
//     var fSize = parseFloat(font); 
//     para.style.fontSize = (fSize + 10) + 'px'
// }

// function zoomOut(){
//     // para.classList.remove("big-font");
//     var font = window.getComputedStyle(para,null).getPropertyValue('font-size');
//     var fSize = parseFloat(font); 
//     para.style.fontSize = (fSize - 10) + 'px'
// }



//Chapter 58 - 67

//Task 1
// var main = document.getElementById("main-content");

// childrn = main.childNodes;
// document.write("<br><b> Q1(ii) </b>");
// for(var i=0; i<childrn.length; i++){
//     document. write("<br>" + childrn[i].nodeName);
// }

// var render = document.getElementsByClassName("render");
// document.write("<br><br><b> (iii) </b>");
// for(var i=0; i<render.length; i++){
//     document. write("<br>" + render[i].innerHTML);
// }

// var fName = document.getElementById("first-name");
// fName.value = "Alex";

// var lName = document.getElementById("last-name");
// lName.value = "Bank";

// var eMail = document.getElementById("email");
// eMail.value = "alexbank@yahoo.com";
// document.write("<br><br><b> (iv and v inside input fields) </b>");

// Task 2
// document.write("<br><b> Q2(i) </b>");
// var formContent = document.getElementById("form-content");
// document.write("<br> Node Type: " + formContent.nodeType);

// document.write("<br><br><b> (ii) </b>");
// var lastName = document.getElementById("lastName");
// document.write("<br> Node Type: " + lastName.nodeType);
// document.write("<br> Child Node: " + lastName.childNodes[0].nodeName);

// document.write("<br><br><b> (iii) </b>");
// lastName.childNodes[0].nodeValue = "Last Name = Doe";
// document.write("<br>" + lastName.childNodes[0].nodeValue);

// document.write("<br><br><b> (iv) </b>");
// var main = document.getElementById("main-content");
// document.write("<br> First Child: " + main.firstChild.nodeName);
// document.write("<br> Last Child: " + main.lastChild.nodeName);

// document.write("<br><br><b> (v) </b>");
// var lastName = document.getElementById("lastName");
// document.write("<br> Next Sibling: " + lastName.nextSibling.nodeName);
// document.write("<br> Previous Sibling: " + lastName.previousSibling.nodeName);


// document.write("<br><br><b> (vi) </b>");
// var eMail = document.getElementById("email");
// document.write("<br> Parent Node: " + eMail.parentNode.nodeName);
// document.write("<br> Node Type: " + main.nodeType);
