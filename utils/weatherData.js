const request = require("request");

const openWeatherMap = {
    BASE_URL:"https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY:"70b2d3e34f5ddcd457a1a60f824abd26",
};

const weatherData = (address, callback)=>{
    const url = openWeatherMap.BASE_URL + encodeURIComponent(address) + "&APPID="+openWeatherMap.SECRET_KEY;
    console.log(url);
    request({url,json:true},(error,data)=>{
        if(error){
            callback(true,"Unable to fetch data,Please try again later" + error);
        }
        callback(false,data?.body); 
    })
};

module.exports = weatherData;