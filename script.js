const topi=document.querySelector(".top-text");
const temp=document.getElementById("temp");
const hum=document.querySelector(".humidity");
const ws=document.querySelector(".windspeed");
const search=document.querySelector(".search");
const loc=document.querySelector(".location");
const img=document.querySelector(".top-img");
const date=document.getElementById("date");

search.addEventListener("click",()=>{
    getOutput();
});


async function getOutput(){
    const countryName=loc.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&,uk&appid=939fc24ec47b6bfba50cd931802b4b39`)
    const data = await response.json();
    console.log(data);
    temp.innerHTML = `Temperature: ${data.main.temp}°C`;
    hum.innerHTML = `Humidity: ${data.main.humidity}%`;
    ws.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
    topi.innerHTML = `Weather: ${data.weather[0].description}`.toUpperCase();
    if(data.main.temp>0){
        img.src="../icons/Hot.png"
    }else{
        img.src="../icons/Cold.png"
    }
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add leading zero
    const newdate = String(currentDate.getDate()).padStart(2, '0');

    date.innerHTML =`Current Date: ${year}-${month}-${newdate}`;
};




