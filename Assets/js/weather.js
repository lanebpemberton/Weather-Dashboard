//getting elements from dom
var searchButton = $('#searchButton');
var searchInput = $('#searchInput');

//initiaite search process
function searchByCity()
{
    //01a5fc67af03a57e45d5906c059908bd

    fetch("api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=01a5fc67af03a57e45d5906c059908bd")
    .then(response => {
        console.log("success");
    })
    .catch(error => {
        // handle the error
    });
}

//setting button functions
searchButton.click(searchByCity);