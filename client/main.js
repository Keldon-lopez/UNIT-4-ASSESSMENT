const baseURL = "http://localhost:4000/api"

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const showFortuneListBtn = document.getElementById("showFortuneListButton")
const fortunesContainer = document.getElementById("fortunesContainer")

const getCompliment = () => {axios.get(`${baseURL}/compliment/`).then(alertMessage)};
const getFortune = () => {axios.get(`${baseURL}/fortune/`).then(alertMessage)};
const getAllFortunes = () => {axios.get(`${baseURL}/showFortuneList/`).then(createFortunes)};
const deleteFortune = (id) => {axios.delete(`${baseURL}/${id}`).then(createFortunes)}

const alertMessage = (res) =>{
        const data = res.data;
        alert(data);
}

const createFortuneCard = (fortune) =>{
    let { id:id, text: text} = fortune
    let fortuneCardContainer = document.createElement("div")
    fortuneCardContainer.classList.add("fortuneCardContainer")
    fortuneCardContainer.innerHTML = `
    <p>${text}</p>
    <button onclick="deleteFortune(${id})">delete</button>
    `
    fortunesContainer.appendChild(fortuneCardContainer);
}

const createFortunes = (res) =>{
    fortunesContainer.innerHTML = ``
    const data = res.data
    for (let index = 0; index < data.length; index++) {
        console.log(data[index])
        createFortuneCard(data[index])
        
    }
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
showFortuneListBtn.addEventListener('click', getAllFortunes)