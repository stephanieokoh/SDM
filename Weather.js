city_name = 'budapest'
async function doRequest() {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=imperial&appid=60db43332ab5bf8e954f6254102765cf`
    let url = URL;
    let res = await fetch(url);

    if (res.ok) {

        let text = await res.text();
        console.log(text)
        return text;
    } else {
        console.log(res.status)
        return `HTTP error: ${res.status}`;
    }
}

doRequest().then(data => {
    console.log(data);
});
