// Change the values and operators below to test your algorithm meets all conditions
var x = 50;

//True ✅ True ✅
var expression1 = (x > 25);
var expression2 = (x == 50);

//True ✅ False ❌
var expression1 = (x > 25);
var expression2 = (x > 50);

//False ❌ True ✅
var expression1 = (x < 25);
var expression2 = (x == 50);

//False ❌ False ❌
var expression1 = (x < 25);
var expression2 = (x > 50);
// Write Your JavaScript Code Here

if(expression1 == true && expression2==true ){
    console.log("True ✅ True ✅");
}else if(expression1 == true && expression2==false ){
    console.log("True ✅ False ❌");
}else if(expression1 == false && expression2==true ){
    console.log("False ❌ True ✅");
}
else {
    console.log("False ❌ False ❌");
}