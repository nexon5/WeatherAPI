
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=3d3c50d2cc6960668ccaab7656cc36f3
let btnPol = document.querySelector(".poltava");
let btnKha = document.querySelector(".kharkov");
let btnKiev = document.querySelector(".kiev");
let btnMsk = document.querySelector(".msk");



function ShowWeather(string1) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${string1}&appid=3d3c50d2cc6960668ccaab7656cc36f3`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data)
            document.querySelector(".city-name").textContent = `${data.name}, ${data.sys.country}`;
            document.querySelector(".temp").innerHTML = `${Math.round(+data.main.temp - 274)}&deg`;
            document.querySelector(".weath-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.querySelector(".weath").textContent = data.weather[0].description;
        })
        .catch(function () {
            //catch any errors
        })
}

function abc() {
    console.log("GG WP");
}
ShowWeather("Poltava, UA");

btnPol.addEventListener('click', function () { ShowWeather("Poltava, UA"); });
btnKha.addEventListener('click', function () { ShowWeather("Kharkiv, UA"); });
btnKiev.addEventListener('click', function () { ShowWeather("Kiev, UA"); });
btnMsk.addEventListener('click', function () { ShowWeather("Moscow, RU"); });

