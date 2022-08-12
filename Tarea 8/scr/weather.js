$(document).ready(function () {




    var request;
    event.preventDefault();
    $("#city-name").text("Searching ...");
    $("#city-temp").text("");
    $("img").attr('src', "");
    $("#city-weather").text("");

    // Send the request
    request = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: {
            lat: '9.997125',
            lon: '-83.034539',
            appid: '4d8b0466a4879368f498b6bef974c40c', // put your appid
            units: 'metric'
        }
    });

    // Callback handler for success
    request.done(function (response) {
        formatSearchResults(response);
    });

    // Callback handler for failure
    request.fail(function () {
        $("#city-name").text("Please try again, incorrect input!");
        $("#city-temp").text("");
        $("img").attr('src', "");
        $("#city-weather").text("");
    });
});


function formatSearchResults(jsonObject) {

    var city_name = jsonObject.name;
    city_name = city_name + ", " + jsonObject.sys.country;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;
    var city_humidity = jsonObject.main.humidity;
    var viento = jsonObject.wind.speed;

    var imgurl = 'http://openweathermap.org/img/wn/' + jsonObject.weather[0].icon + '@2x.png';
    $("img").attr('src', imgurl);
    $("#city-name").text("Lugar: " + city_name);
    $("#city-weather").text(city_weather);
    $("#city-temp").text("Temperatura: " + city_temp + " Celsius");
    $("#city-humidity").text("Humedad: " + city_humidity);
    $("#wind-speed").text("Viento: " + viento);

}