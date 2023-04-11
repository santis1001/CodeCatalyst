var myModal = document.getElementById('Modal')
var myInput = document.getElementById('Input')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});
dialog();

function dialog() {
    myModal.focus();
  };