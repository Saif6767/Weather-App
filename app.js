const dataEle=document.querySelector("form");
const searchEle=document.querySelector(".inpt");
const wetherData=document.querySelector(".weather-img");
const imgIcon=document.querySelector(".Imgicon");
const t=document.querySelector("h3");
const h=document.querySelector("h4");
const feel=document.querySelector(".f");
const hum=document.querySelector(".h");
const wind=document.querySelector(".w");

// const apiKey="fb42a7ad54cf5a49768d00f637c31901"
// const url="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

dataEle.addEventListener("submit",(e)=>{
    e.preventDefault();
    const cityName=searchEle.value;
    getData(cityName)
})

const getData= async(cityName)=>{
try{
const apiKey="fb42a7ad54cf5a49768d00f637c31901";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
let response = await fetch(url);
if (!response.ok) {
    throw new Error("Network Response is not OK!"); 
}
let data = await response.json();
    console.log(data);
   const temp= Math.floor(data.main.temp);
   const desci=data.weather[0].description;
   const icon=data.weather[0].icon;

   t.textContent=`${temp}°C`;
   h.textContent=`${desci}`;
   imgIcon.innerHTML=`<img src="https://openweathermap.org/img/wn/${icon}.png">`;

   const feels=Math.floor(data.main.feels_like);
   const humen=data.main.humidity;
   const winds=data.wind.speed;

   feel.textContent=`${feels}°C`;
   hum.textContent=`${humen}%`;
   wind.textContent=`${winds} m/s`;

}catch(err){

}
}