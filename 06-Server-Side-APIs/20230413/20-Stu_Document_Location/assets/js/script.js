var badRequestUrl = 'https://api.github.com/unicorns';
var RequestUrl =   'https://api.github.com/repos/nodejs/node/issues?per_page=5';
var redirectUrl = './404.html';

var endpoint = function(url){

  fetch(url).then(function (response) {
    if(response.status === 200){
  
    }else if(response.status === 404){
      //document.location.href = redirectUrl;
      document.location.replace(redirectUrl);
    }else{
      return response.json();
    }
  });
}

endpoint(badRequestUrl);
//endpoint(RequestUrl);