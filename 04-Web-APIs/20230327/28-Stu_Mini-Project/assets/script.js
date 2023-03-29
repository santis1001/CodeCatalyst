
var generateBtn = document.querySelector("#generate");
var textarea = document.getElementById('#guessword');

var wordBank = ["Apple" ,"Banana","Cat","Dog","Fish","Happy","Monkey","Orange","Rabbit", "Sun"];

generateBtn.addEventListener("click", generateWord);


function generateWord(){
    var randomSelectedWord =  wordBank[ Math.floor(Math.random() * wordBank.length)];
    console.log(randomSelectedWord);

    var randomWordLetters = randomSelectedWord.split('');
    console.log(randomWordLetters);

    var randomshow = [0,0];
    do{
        randomshow = [Math.floor(Math.random() * randomWordLetters.length),Math.floor( Math.random() * randomWordLetters.length)];
    }while(randomshow[0]==randomshow[1]);
    
    console.log(randomshow);

    var generateWord ="";
    for(let i=0;i<randomWordLetters.length;i++){

        if(randomshow[0]==i || randomshow[1]==i){
            generateWord = generateWord + randomWordLetters[i];
        }else{        
            generateWord = generateWord + "_"
        }        
    }
    console.log(generateWord);

}
