/* Get the last date and time modified in JavaScript */
/* In this format 10/10/1001 10:10:10 */
function getLastModifiedDateTime() {
    var lastModified = new Date(document.lastModified);
    var formattedDate = ('0'+ (lastModified.getMonth() + 1)).slice(-2) + '/' + ('0' + lastModified.getDate()).slice(-2) + '/' + lastModified.getFullYear();
    var formattedTime = ('0'+ lastModified.getHours()).slice(-2) + ':' + ('0' + lastModified.getMinutes()).slice(-2) + ':' + ('0' + lastModified.getSeconds()).slice(-2); 
    return formattedDate + ' ' + formattedTime;
    }
    
    /* Get the result from the function and put in back in the footer */
    document.getElementById('lastmodified').textContent = getLastModifiedDateTime();



function calculateWindChill(temperature, windSpeed) {
    /* Formula for calculating the windchill */
    return (temperature <= 50 && windSpeed > 3) ?
        Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) :
        "N/A";
}

/* Display the wind chill */
function displayWindChill() {
    const temperatureElement = document.querySelector('.weather li:nth-child(1)');
    const windSpeedElement = document.querySelector('.weather li:nth-child(3)');
    const windChillElement = document.querySelector('.weather li:nth-child(4)');

    const temperatureValue = parseFloat(temperatureElement.textContent.match(/\d+/)[0]);
    const windSpeedValue = parseFloat(windSpeedElement.textContent.match(/\d+/)[0]);

    const windChill = calculateWindChill(temperatureValue, windSpeedValue);
    /* Display windchill factor in Fahrenheit */
    windChillElement.textContent = `Wind Chill: ${windChill}°F`; 
}

window.addEventListener('load', displayWindChill);
