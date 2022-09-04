//do not show api key in js file 

const Api_Key=`47b372e01bf118c947bff671fa50b7fb`;

const loadTemp= city =>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`

    fetch (url)
    .then (response => response.json())
    .then (data =>displayTemp(data));
}

const displayTemp =data =>{
  const tempo=document.getElementById("tempo");
 tempo.innerText =data.main.temp;

 const weather=document.getElementById("weather");
 weather.innerText =data.weather[0].main;


}

document.getElementById("btn-search").addEventListener("click",function(){
    const searchField=document.getElementById("searchField");
    const city=searchField.value;
    loadTemp(city);

   document.getElementById("city").innerText = city;
 
   
})



loadTemp('chittagong')