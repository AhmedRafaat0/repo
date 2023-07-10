// 1- Write a program that allow to user enter number then printit
//  .....................
//   num=Number(window.prompt("Enter Number"));
// console.log(num)


// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// ........................
// var num=Number(window.prompt("Enter Num"))
// if(num%3==0&&num%4==0){
//     console.log("yes")
// }else{
//     console.log("No")
// }


// 3- Write a program that allows the user to insert 2 integers then print the max
// ........................
// function theMax(num1,num2){
//     num1=Number(window.prompt("Enter Number1"));
//     num2=Number(window.prompt("Enter Number2"));
//     if(num1>num2){
//         console.log("Max " + num1)
//     }else if(num2>num1){
//         console.log("Max " + num2)
//     }
// }
// theMax()


// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// ........................
// var num=Number(window.prompt("Enter Number"));
// if(num>0){
//         console.log("Positive")
//     }else if(num<0){
//     console.log("Negative")
// }else if(num==0){
//     console.log("Zero")
// }


// 5- Write a program that take 3 integers from user then print the max element and the min element.
// ........................
// function maxAndMin(num1,num2,num3){
//      num1=Number(window.prompt("Enter Number1"));
//      num2=Number(window.prompt("Enter Number2"));
//      num3=Number(window.prompt("Enter Number3"));
//     if(num1>num2&&num1>num3){
//         console.log("Max element = " + Number)
//     }else if(num2>num1&&num2>num3){
//         console.log("Max element = " + num2)
//     }else if(num3>num1&&num3>num2){
//         console.log("Max element = " + num3)
//     }
//     if(num1<num2&&num1<num3){
//         console.log("Min element = " + num1)
//     }else if(num2<num1&&num2<num3){
//         console.log("min element = " + num2)
//     }else if(num3<num1&&num3<num2){
//         console.log("min element = " + num3)
//     }
// }
// maxAndMin()


// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// ........................
// var num=Number(window.prompt("Enter Number"));
// if(num % 2 == 0){
//     console.log("Oven")
// }else{
//     console.log("Odd");
// }


// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// ........................
// var char=window.prompt("Enter Character");
// if(char=="a"||char=="e"||char=="u"||char=="i"||char=="o"){
//     console.log("Vowel");
// }else{
//     console.log("Consonant");
// }


// 8- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// ........................
// var num=Number(window.prompt("Enter Number"));
// for(var i=1; i<=num; i++){
//     console.log(i)
// }


// 9- Write a program that allows userto insert integer then print a multiplication table up to 12.
// ........................
// var num=Number(window.prompt("Enter Number"));
// for(var i=1; i<=12; i++){
// console.log(num*i)
// }


// 10- Write a program that allows to user to insert number then print all even numbers between 1 to this number
// ........................
// function evenNumbers(num){
//     for(var i=1; i<=num; i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// evenNumbers(9)


// 11- Write a program that take two integers then print the power
// ........................
// var num1=Number(window.prompt("Enter Num1"))
// var pow=Number(window.prompt("Enter Num2"))
// var result=1
// for(var i=0;i<pow;i++){
//     result*=num1
// }
// console.log(result)


// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// ........................
// function calculate(mark1,mark2,mark3,mark4,mark5){
//     var total=mark1 + mark2 + mark3 + mark4 + mark5;
//     var average=total / 5;
//     var percentage=(total*100)/100;
//     console.log("total= " + total);
//     console.log("average= " + average)
//     console.log("percentage= " + percentage +"%")
// }
// calculate(20)


// 13-Write a program to input month number and print number of days in that month
// ........................
// function daysOfMonths(month){
//     if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
//         console.log("Days In Month: 31")
//     }else if(month==2){        
//         console.log("Days In Month: 28")
//     }else if(month==4||month==6||month==9||month==11){
//         console.log("Days In Month: 30")
//     }
// }
// daysOfMonths(1)


// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
// ........................
// function marks(num){
//     var num=Number(window.prompt("Enter Num"));
//     var Percentage=(num / 500) * 100
//     if(Percentage>=90){
//         console.log(Percentage+"%" + " Grad A");
//     }else if(Percentage>=80){
//         console.log(Percentage+"%" + " Grad B");
//     }else if(Percentage>=70){
//         console.log(Percentage+"%"  + " Grad C");
//     }else if(Percentage>=60){
//         console.log(Percentage+"%"  + " Grad D");
//     }else if(Percentage>=40){
//         console.log(Percentage+"%"  + " Grad E");
//     }else if(Percentage<40){
//         console.log(Percentage+"%"  + " Grad f");
//     }
// }
// marks()


// 15- Write a program to print total number of days in month 
// ........................
// var daysInMoth=window.prompt("Enter Number Of The Month");
// switch(true){
//     case daysInMoth==1||daysInMoth==3||daysInMoth==5||daysInMoth==7||daysInMoth==8||daysInMoth==10||daysInMoth==12:
//         console.log("Days In Month: 31")
//         break;
//     case daysInMoth==2:
//         console.log("Days In Month: 28")
//         break;
//     case daysInMoth==4||daysInMoth==6||daysInMoth==9||daysInMoth==11:
//         console.log("Days In Month: 28")
// }


// 16- Write a program to check whether an alphabet is vowel or consonant 
// ........................
// var char=window.prompt("Enter Character");
// switch(true){
// case char=='a'||char=='e'||char=='o'||char=='i'||char=='u':
//     console.log("vowel")
//     break;
// default:
//     console.log("consonant")
// }


// 17- Write a program to find maximum between two numbers 
// ........................
// var num1=Number(window.prompt("Enter Num1"))
// var num2=Number(window.prompt("Enter Num2"))
// switch(true){
//     case num1>num2:
//         console.log(num1)
//         break;
//     default:
//         console.log(num2)
// }


// 18- Write a program to check whether a number is even or odd 
// ........................
// var num=window.prompt("Enter Num")
// switch(num%2){
//     case 0:
//         console.log("even")
//         break;
//     default:
//         console.log("odd")
// }


// 19- Write a program to check whether a number is positive or negative or zero 
// ........................
// var num=window.prompt("Enter Num")
// switch(true){
//     case num>0:
//         console.log("positive")
//         break;
//     case num<0:
//         console.log("negative")
//         break;
//     case num==0:
//         console.log("zero")
// }


// 20- Write a program to create Simple Calculator 
// ........................
// function calculate(num1,num2,arthmatic){
//     var num1=Number(window.prompt("Enter Num1"))
//     var num2=Number(window.prompt("Enter Num2"))
//     var arthmatic=window.prompt("Enter arthmatic")
//     switch(arthmatic){
//         case "+":
//             console.log(num1+num2);
//             break;
//         case "-":
//             console.log(num1-num2);
//             break;
//         case "*":
//             console.log(num1*num2);
//             break;
//         case "/":
//             console.log(num1/num2);
//             break;  
//     }
// }
// calculate()