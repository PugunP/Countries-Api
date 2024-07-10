const container = document.getElementById("container")
const getCountries = async()=>{
    const url = 'https://restcountries.com/v3.1/all'
    const res = await fetch(url)
    const items = await res.json()
    // console.log(items)
    items.forEach(element => {
        // console.log("ชื่อประเทศ =",element.name,"เมืองหลวง", element.capital)
        createCard(element)
    });
}

const createCard =(data)=>{
    const cardEl = document.createElement("div")
    cardEl.classList.add("country")
    const contentHTML = `
    <div class="img-container">
    <img src= "${data.flags.png}"/>
    </div>
    <div class="info">
    <h3 class="name">${data.name.common}</h3>
    <small>เมืองหลวง : <span>${data.capital}</span></small>
    </div>
    `
    cardEl.innerHTML = contentHTML
    container.appendChild(cardEl)
}

getCountries()