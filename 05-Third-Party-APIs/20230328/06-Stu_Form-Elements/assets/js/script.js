var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var shoppinginputEl = $('input[name="shopping-input"]');


// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    event.preventDefault();
    var shoppingitem =  shoppinginputEl.val();
    if(!shoppingitem){        
        $('input[type="text"]').attr('placeholder','No item added:C . please enter item name');
    }else{
        var newlistEl = $('<li>');
        newlistEl.text(shoppinginputEl.val());
        shoppingListEl.append(newlistEl);
        $('input[type="text"]').val('');
        $('input[type="text"]').attr('placeholder','Enter item name');
    }
    
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);
