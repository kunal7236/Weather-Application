document.getElementById("location-form").addEventListener("submit", getWeather);

// function getWeather(e) {
//Write you code logic here

// Error should be very specific
// Error: Failed to fetch weather data,   should always fetch this error in case of any failure otherwise you test cases will get failed.

//   getWeather();
// }
const apiKey = "dcfaee70512f4fe8b0d69bc89949b67d";

async function getWeather(e) {
  e.preventDefault();
  const mylocation = document.getElementById("location-input").value;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${mylocation}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    if (data.cod != "200") throw new Error(`${data.message}`);

    console.log(data);
    displayWeather(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

async function getIcon(weatherIcon) {
  try {
    const response = await fetch(
      `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    );
    if (!response.ok) {
      throw new Error("Image fetch failed");
    }

    const blob = await response.blob();
    const imageURL = URL.createObjectURL(blob);

    return imageURL;
  } catch (error) {
    console.error("Error fetching weather icon:", error);
    return null;
  }
}

async function displayWeather(data) {
  //weather-info
  const weatherConditionCode = data.weather[0]?.id;
  const weatherMain = data.weather[0]?.main;
  const weatherDescription = data.weather[0]?.description;
  const weatherIcon = data.weather[0]?.icon;

  //temp-info
  const currTemp = data.main?.temp;
  const feelTemp = data.main?.feels_like;
  const minTemp = data.main?.temp_min;
  const maxTemp = data.main?.temp_max;
  //other-info
  const pressure = data.main?.pressure;
  const humidity = data.main?.humidity;
  const windSpeed = data.wind?.speed;
  //city-info
  const currTime = data.dt;
  const cityName = data.name;
  const latitude = data.coord?.lat;
  const longitude = data.coord?.lon;

  const resBody=document.getElementById("weather-data");

  const cityDetails=resBody.querySelectorAll(".city-info>*");
  cityDetails[0].innerHTML=`<i class="fas fa-city"></i> ${cityName}`;
  cityDetails[1].innerHTML=`<i class="fas fa-map"></i> ${latitude}°`;
  cityDetails[2].innerHTML=`<i class="fas fa-map"></i> ${longitude}°`;

  const weatherDetails=resBody.querySelectorAll(".weather-info>*");
  weatherDetails[0].innerHTML=weatherMain;
  weatherDetails[1].innerHTML=weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  weatherDetails[2].src=await getIcon(weatherIcon);

  const tempDetails=resBody.querySelectorAll(".temp-info>*");
  tempDetails[0].innerHTML=`<i class="fas fa-thermometer-half"></i> Current: ${Math.round(currTemp)}°C`;
  tempDetails[1].innerHTML=`<i class="fas fa-thermometer-quarter"></i> Feels like: ${Math.round(feelTemp)}°C`;
  tempDetails[2].innerHTML=`<i class="fas fa-thermometer-empty"></i> Min: ${Math.round(minTemp)}°C`;
  tempDetails[3].innerHTML=`<i class="fas fa-thermometer-full"></i> Max: ${Math.round(maxTemp)}°C`;

  const otherDetails=resBody.querySelectorAll(".other-info>*");
  otherDetails[0].innerHTML=`<i class="fas fa-tachometer-alt"></i> ${pressure} hPa`;
  otherDetails[1].innerHTML=`<i class="fas fa-tint"></i> ${humidity}%`;
  otherDetails[2].innerHTML=`<i class="fas fa-wind"></i> ${windSpeed} m/s`;

  const weatherBody = document.querySelectorAll("#weather-data > *");

  weatherBody.forEach(elmnt => {
    elmnt.style.display="grid";
  });

}
