const express = require("express");
const cors = require("cors");
const ctrl = require('./controller');
const { getCompliment, getFortune, showFortuneList, deleteFortune} = ctrl;

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/showFortuneList", showFortuneList);
app.delete("/api/:id", deleteFortune);

app.listen(4000, () => console.log("Server running on 4000"));
