
if(navigator.geolocation)
{
    
    alert('lets get location')
    navigator.geolocation.getCurrentPosition(function (pos){
        var gelat=pos.coords.latitude
        var long=pos.coords.longitude
        
        var api_link='http://api.openweathermap.org/data/2.5/weather?lat='+gelat+'&lon='+long+'&appid=3fe03d192a24e29ad73c7ae2d7dccf2a&units=metric&lang=en';
        let request = new XMLHttpRequest();
        request.open('GET',api_link);
        request.responseType = 'json';
        request.send();
        request.onload = function(){
            const res = request.response
            console.log(res)
            document.writeln(res.main.temp,res.name)
            //document.getElementsByClassName('temperature').innerHTML=res.main.temp;
        }
        
        console.log(gelat)
        console.log(long)
        


    })
    
}
else{
    alert('no geolocation ')
}