// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';
var issueList = document.querySelector('ul');

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response
    // TODO: Console log each issue's URL and each user's login
    for (var i = 0; i < data.length; i++) {
      //Create a list element
      var listItem = document.createElement('li');
      var aContent =  document.createElement('a');
      //Set the text of the list element to the JSON response's .html_url property
      aContent.setAttribute('href',data[i].html_url)
      aContent.textContent = data[i].html_url + " - "+ data[i].user.login;
      //Append the li element to the id associated with the ul element.
      listItem.appendChild(aContent);
      issueList.appendChild(listItem);
    }
  });
