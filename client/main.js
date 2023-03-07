const baseURL = "http://localhost:4000/api";

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const showFortuneListBtn = document.getElementById("showFortuneListButton");
const fortunesContainer = document.getElementById("fortunesContainer");
const addFortune = document.getElementById("addFortune");
const updaterContainer = document.getElementById("updaterContainer");


const getCompliment = () => axios.get(`${baseURL}/compliment/`).then(alertMessage);
const getFortune = () => axios.get(`${baseURL}/fortune/`).then(alertMessage);
const getAllFortunes = () => axios.get(`${baseURL}/showFortuneList/`).then(createFortunes);
const deleteFortune = (id) => axios.delete(`${baseURL}/${id}`).then(createFortunes);
const createNewFortune = (body) => axios.post(`${baseURL}/createNewFortune`, body).then(createFortunes);
const updateFortune = (body) => axios.put(`${baseURL}/updateFortune`, body).then(createFortunes);

const alertMessage = (res) => {
  const data = res.data;
  alert(data);
};

const createFortuneCard = (fortune) => {
  let { id: id, text: text } = fortune;
  let fortuneCardContainer = document.createElement("div");

  fortuneCardContainer.classList.add("fortuneCardContainer");
  fortuneCardContainer.innerHTML = `
    <p>ID:${id}</p>
    <p>${text}</p>
    <button onclick="deleteFortune(${id})">delete</button>
    `;

  fortunesContainer.appendChild(fortuneCardContainer);
};

const createUpdater = () => {
  let updaterContent = document.createElement("form");
  updaterContent.id = "updater";
  updaterContent.innerHTML = `
    <input type="number" id="fortuneID" placeholder="enter ID">
    <input type="text" id="updatedFortune" placeholder="Type updated Fortune">
    <button type="submit">Update Fortune</button>
    `;

  updaterContainer.appendChild(updaterContent);
  const updater = document.getElementById("updater");
  updater.addEventListener("submit", updatedFortuneObj);
};

const createFortunes = (res) => {
  fortunesContainer.innerHTML = ``;
  updaterContainer.innerHTML = ``;
  const data = res.data;
  for (let index = 0; index < data.length; index++) {
    console.log(data[index]);
    createFortuneCard(data[index]);
  }
  createUpdater();
};

const newFortuneObj = (e) => {
  e.preventDefault();
  let fortune = document.querySelector("#newFortune");
  let fortuneBody = {
    text: fortune.value,
  };
  createNewFortune(fortuneBody);
};

const updatedFortuneObj = (e) => {
  e.preventDefault();
  let fortuneID = document.querySelector("#fortuneID");
  let updatedFortune = document.querySelector("#updatedFortune");
  let fortuneBody = {
    id: fortuneID.value,
    text: updatedFortune.value,
  };
  updateFortune(fortuneBody);
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
showFortuneListBtn.addEventListener("click", getAllFortunes);
addFortune.addEventListener("submit", newFortuneObj);
