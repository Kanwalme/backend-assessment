const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createInspiration, getAllCompliments, deleteCompliment, editInspiration } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post('/api/inspiration',createInspiration);

app.get("/api/all-compliments", getAllCompliments);
 
app.delete('/api/delete-comment/:comment', deleteCompliment);



app.listen(4000, () => console.log("Server running on 4000"));
