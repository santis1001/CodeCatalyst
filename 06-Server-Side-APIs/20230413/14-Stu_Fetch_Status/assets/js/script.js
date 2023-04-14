var badRequestUrl = 'https://api.github.com/orgs/nodejs/rypos?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(request) {
  fetch(request)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);
      if(response.status === 200)
      {
        responseText.textContent = 'Api loaded correctly';      
      } else{
        responseText.textContent = 'Status Code: '+response.status;        
      }
      
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);
