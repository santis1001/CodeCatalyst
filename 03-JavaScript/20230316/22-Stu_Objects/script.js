console.log();//WRITE YOUR CODE BELOW

var customerDrink = {
    name: "",
    sugar: 0,
    isReady: false
};

customerDrink.name="Vanilla latte";
customerDrink.sugar=2;
//customerDrink.isReady=true;

console.log("Name: "+customerDrink.name+"\nSugar: "+customerDrink.sugar);

if(customerDrink.isReady){
    console.log("Ready for pick-up");
}else{
    console.log("Still in order queue");
}

