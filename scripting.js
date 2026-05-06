async function showTemp() {
    const station = document.getElementById("inputbox").value
    const response = await fetch(`https://api.weather.gov/stations/${station}/observations/latest`);
    const data = await response.json();
    const temperature = (data.properties.temperature.value*9/5)+32;
    const dewpoint = (data.properties.dewpoint.value*9/5)+32;
    const img = data.properties.icon

    document.getElementById("temp").innerText = temperature;
    document.getElementById("conditionimage").src = img;
    document.getElementById("dewpoint").innerText = dewpoint;
}

async function fetchthing() {
    const station = document.getElementById("inputbox").value
    const response = await fetch(`https://api.weather.gov/stations/${station}/observations/latest`);
    const data = await response.json();
    document.getElementById("outputbox").value = JSON.stringify(data, null, 2)
}