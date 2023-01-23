// Variable declaration for our project
var cityListArray = [];
var cityName;

//function to pick up and display the city being searched.
function displaySearchedCity(){
    $("#cityInput").val("");
    $("#cityList").empty();


    for(i=0; i<cityList.length; i++)
    {
       var cityLink = $("<a>");
       cityLink.addClass("list-group-item list-group-item-action list-group-item-primary city");
       cityLink.attr("data-name", cityListArray[i]);
       cityLink.text(cityListArray[i]);
       $("#cityList").prepend(cityLink);
    }

}

//function to get the array of cities from the local storage
function getCityList(){
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    if(storedCities !== null){
        cityListArray = storedCities;
    
    }

    displaySearchedCity();
}

//function to make the city from a local storage display the current weather forecast upon refreshing
function initializeWeather(){
    var storedWeather = JSON.parse(localStorage.getItem("currentCity"));

    if(storedWeather !== null){
        cityName = storedWeather;

    }
  
}

//function to save the array of cities on the local storage
function storeCityArray(){
    localStorage.setItem("cities", JSON.stringify(cityListArray));


}

//function to save the currently displayed city on our local storage
function storeCurrentCity(){
    localStorage.setItem("currentCity", JSON.stringify(cityName));
}

//event handler for when we click the search city button
$("#searchCityButton").on("click", function(event){
    event.preventDefault();

    cityName = $("#cityInput").val().trim();
    if(cityName === ""){
        alert("Please enter a city to Forecast")
    } else if(cityListArray.length >= 5){
        //removes a city from the array
        cityListArray.shift();

        //add a new city at the top of the array
        cityListArray.push(cityName);
    } else{
        cityList.push(cityName);
    }

    storeCurrentCity();
    storeCityArray();
    displaySearchedCity();
    displayWeather();
    displayFiveDayForecast();
})

//event handler when you press enter inplace of the search button after keying in city to search
$("#cityInput").keypress(function(e){
    if(e,which == 13){
        $("#searchCityButton").click();
    }
})