const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneButton = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneButton.addEventListener('click', getFortune);

const form =document.getElementById('form');
const baseURL = 'http://localhost:4000/api/inspiration';


const createInspiration = () =>{

    const inspirationQuote = document.getElementById('inspirationQuote').value
    const drive = document.getElementById('drive').value
    axios.post(baseURL, {inspirationQuote,drive})
    .then(res => {
        const data = res.data;
        alert(data);
    });
}

 form.addEventListener('submit', createInspiration);

const getAllComplimentsElement = document.getElementById("getAllCompliments");

const getAllCompliments =() =>{
    axios.get("http://localhost:4000/api/all-compliments").then(res => {
        document.getElementById("allCompliments").innerHTML = res.data.join("<br>") + "<br>";
    });
}
getAllComplimentsElement.addEventListener("click", getAllCompliments)

const deleteCompliment = document.getElementsById("compliment")

deleteCompliment =()=>{
    axios.delete("http://localhost:4000//api/delete-comment/:comment").then(req, res =>{
        document.getElementById("deleteCompliment")
    });
}
deleteCompliment.addEventListener("click", deleteCompliment)


