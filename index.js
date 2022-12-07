const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9bfcc1d986mshc10d41fb3da5ea2p1cc31fjsn76f39d799d42",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getweather = (city) =>{
    cityname.innerHTML=city
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
        options
)
  .then((response) => response.json())
  .then((response) => {
      console.log(response);
    cloud_pct.innerHTML = response.cloud_pct;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    max_temp.innerHTML = response.max_temp;
    min_temp.innerHTML = response.min_temp;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
    temp.innerHTML = response.temp;
    wind_degrees.innerHTML = response.wind_degrees;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
})
.catch((err) => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getweather(city.value)
})

submit_mum.addEventListener("click", (e1)=>{
    getweather("Mumbai")
})

submit_del.addEventListener("click", (e2)=>{
    getweather("Delhi")
})

submit_luc.addEventListener("click", (e3)=>{
    getweather("Lucknow")
})

submit_ban.addEventListener("click", (e4)=>{
    getweather("Bangalore")
})

getweather("Mumbai")