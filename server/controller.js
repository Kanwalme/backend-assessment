
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar.","Test 1", "test2" , "test3"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A fresh start will put you on your way.", "A beautiful, smart, and loving person will be coming into your life", "A faithful friend is a strong defense.","A person of words and not deeds is like a garden full of weeds","All the effort you are making will ultimately pay off", "Chance favors those in motion."];
      
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    createInspiration: (request, response)=> {
    let inspirationQuote = request.body.inspirationQuote
    let drive = request.body.drive
    response.status(200).send(`Your favorite quote is ${inspirationQuote} and you're driven by ${drive}`)
},
getAllCompliments: (req, res) => {
const compliments = returnAllCompliments()  
    res.status(200).send(compliments);
},
deleteCompliment: (req, res)=>{

    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar.","Test 1", "test2" , "test3"]
    let existingCompliment = req.body
    for (let i = 0; i < compliments.length; i++){
        if (compliments[i] === existingCompliment){
            compliments[i].splice(i, 1)
            res.status(200).send("compliment Deleted")
            return
        }
    }
    res.status(400).send("Compliment not found")
},

}

    const returnAllCompliments = () =>{
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar.","Test 1", "test2" , "test3"]
       
        return compliments;
    }
