const baseURL = (`https://swapi.dev/api`)

const btn = document.querySelector('button')

const btnClicked = () => {
    console.log('button clicked')
    
    axios.get(`${baseURL}/planets/?search=alderaan`)
    .then(res => {
        let residents = res.data.results[0].residents
        console.log(residents)
        
        for(let i = 0; i < residents.length; i++){
            axios.get(residents[i])
            .then(res => {
                console.log(res.data)
                let resident = document.createElement('h2')
                resident.textContent = res.data.name
                document.body.appendChild(resident)
            })
        }
    })
}

btn.addEventListener('click', btnClicked)