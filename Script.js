// create an instance of XML HTTP request
var req = new XMLHttpRequest();
// create a connection or opening a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true)
// Send the request to server
req.send();
// load the response. This function returns when data is retrived
req.onload = function(){
    var data = JSON.parse(this.response)
    for(let i in data){
        console.log(data[i].name)
    }
}
