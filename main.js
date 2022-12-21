const OPTIONS = {
    method: 'GET',
    headers: {
        'Content-type' : 'Aplication/json'
    }
  };

const fetchIpInfo = ip => {
    return fetch(`http://ip-api.com/json/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err));
}   


const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $submit = document.querySelector('#submit');
const $results = document.querySelector('#results');

$form.addEventListener('submit', async(event) =>{
    event.preventDefault()
    const {value} = $input
    if (!value) return

    $submit.setAttribute('disable', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if(ipInfo){
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

})