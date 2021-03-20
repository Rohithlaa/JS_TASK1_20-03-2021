
var req = new XMLHttpRequest();

req.open('GET','https://restcountries.eu/rest/v2/all',true)

req.send();

req.onload = function(){
    var data = JSON.parse(this.response)
    for(let i in data){
        console.log(data[i].name)
    }
}
