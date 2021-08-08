var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

try
{

    pinga();
    
var http = new XMLHttpRequest();
var url = 'https://snyk.io/api/v1/org/:roma8389/webhooks';
var params = 'url=http://abc.com/handle&secret=binny';
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
http.setRequestHeader('Authorization', 'd09166f1-4732-49f4-a66d-e0a003b9ed7e');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
    else if(http.readyState == 4 && http.status != 200){
        console.log(http.responseText);
    }
}
http.send(params);
} catch (error) {
    console.log(error);
  }


  function pinga() {
    require('dns').resolve('www.google.com', function(err) {
        if (err) {
           console.log("No connection");
        } else {
           console.log("Connected");
        }
      });
    }
    