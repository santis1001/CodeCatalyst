var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');
var userlist =  document.getElementById('userList');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < data.length; i++) {
        //Create a list element

        var listItem = document.createElement('li');
        listItem.setAttribute('style','margin-bottom:15px;');

        var cardcontent =  document.createElement('div');
        cardcontent.setAttribute('style','display: flex;');

        var imagecont = document.createElement('img');
        imagecont.setAttribute('src', data[i].avatar_url+'&size=100');
        imagecont.setAttribute('alt','image');
        imagecont.setAttribute('size','image');

        var textContent = document.createElement('div');
        textContent.setAttribute('style','margin-left:15px;');
        var UserName = document.createElement('h4');
        var UserUrl = document.createElement('a');

        UserName.textContent = data[i].login;
        UserUrl.textContent = data[i].html_url;
        UserUrl.setAttribute('href',data[i].html_url);

        textContent.appendChild(UserName);
        textContent.appendChild(UserUrl);

        cardcontent.appendChild(imagecont);
        cardcontent.appendChild(textContent);

        listItem.appendChild(cardcontent);

        userlist.appendChild(listItem);
      }
    });
}
fetchButton.addEventListener('click', getApi);
