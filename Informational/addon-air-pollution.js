if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const LATTITUDE = position.coords.latitude;
        const LONGITUDE = position.coords.longitude;

        // console.log(`Latitude: ${LATTITUDE}, Longitude: ${LONGITUDE}`);

        const API_KEY = "b14ad66c056209ec99f9d5abae1fe8e1";
        const URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${LATTITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`;
        const airPollutionDataElement = document.getElementById("air-pollution-data");
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const airPollutionIndex = data.list[0].main.aqi;
                airPollutionDataElement.innerText = `Air pollution index: ${airPollutionIndex}`;
            })
            .catch(error => {
                console.error(error);
                airPollutionDataElement.innerText = "Error getting air pollution data";
            });
    }, error => {
        console.error(error);
    });
} else {
    console.error("Geolocation is not supported by this browser.");
}