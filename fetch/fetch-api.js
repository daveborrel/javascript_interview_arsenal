async function getData() {
    const URL = 'https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&hourly=temperature_2m&forecast_days=3';

    try {
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

getData()