const OPTIONS = {
    method: 'GET',
    url: 'https://ip-geolocation-and-threat-detection.p.rapidapi.com/54.85.132.205',
    headers: {
        "X-RapidAPI-Key": "7ff6647439msh73ef28894f29fd1p1ed013jsn9edfae7c0dab",
		"X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com"
    }
  };

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err));
}   


const form = document.querySelector('#form');
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const results = document.querySelector('#results');

form.addEventListener('submit', async(event) =>{
    event.preventDefault()
    const {value} = input
    if (!value) return

    submit.setAttribute('disable', '')
    submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if(ipInfo){
        results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    submit.setAttribute('disable')
    submit.setAttribute('aria-busy')

})