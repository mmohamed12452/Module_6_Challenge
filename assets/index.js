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
    var storedCities = JSON.parse(localStorage.getItem("currentItem"));

    if(storedCities !== null){
        cityListArray = storedCities;
    
    }

    displaySearchedCity();
}


