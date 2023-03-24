var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ul");

// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);

// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style","background-color:#333333;padding:20px;list-style-type: decimal; ");

// TODO: Add ordered list items containing four favorite foods

DoList();

let favFoods = ['tacos','sushi','mariscos','carne asada']
let colors = ['blue','red','yellow','orange']
for(let i=0; i<favFoods.length; i++){
    listEl.innerHTML += `<li>${favFoods[i]}</li>`;
}
let list = document.querySelectorAll('li');
listEl.setAttribute("style","background:#333333;padding:20px;");
for(let i=0; i<list.length;i++){
    list[i].setAttribute("style",`background:${colors[i]};color:white; padding:5px;margin-left:35px`)
}


function DoList() {
    
    let listElements = [li1,li2,li3,li4];
    let favfoods = ["apple","pizza","dumplings", "cupcakes"];
    let color = ["444444","5b5b5b","999999","bcbcbc"];
    
    for(var i=0; i<listElements.length;i++){
        listElements[i].textContent=favfoods[i];
        listElements[i].setAttribute("style","color:white;padding:5px;margin-left:35px;background-color:#"+color[i]+";");
        listEl.appendChild(listElements[i]);
    }    
}

// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);

// li1.setAttribute("style","color:white;padding:5px;margin-left:35px;background-color:#444444;");
// li2.setAttribute("style","color:white;padding:5px;margin-left:35px;background-color:#5b5b5b");
// li3.setAttribute("style","color:white;padding:5px;margin-left:35px;background-color:#999999");
// li4.setAttribute("style","color:white;padding:5px;margin-left:35px;background-color:#bcbcbc");