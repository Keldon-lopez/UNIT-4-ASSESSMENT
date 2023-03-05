let fortuneList = [
    { id: 1,
    text: "A beautiful, smart, and loving person will be coming into your life."}, 
    {id: 2,
    text:"Allow compassion to guide your decisions."}, 
    {id: 3,
    text:"Romance moves you in a new direction."},
    {id: 4,
    text:"Soon life will become more interesting."},
    {id: 5,
    text:"Welcome change."},];
      
let id = fortuneList.length + 1;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        // const fortune = ["A beautiful, smart, and loving person will be coming into your life.", "Allow compassion to guide your decisions.", "Romance moves you in a new direction.","Soon life will become more interesting.","Welcome change."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortuneList.length);
        let randomFortune = fortuneList[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    showFortuneList: (req, res) => {
        // const fortune = ["A beautiful, smart, and loving person will be coming into your life.", "Allow compassion to guide your decisions.", "Romance moves you in a new direction.","Soon life will become more interesting.","Welcome change."];
      
        res.status(200).send(fortuneList);
    },

    deleteFortune: (req, res) => {
        const { id } = req.params;

        for (let index = 0; index < fortuneList.length; index++) {
            if (fortuneList[index].id === +id) {
                fortuneList.splice(req,1)
                res.status(200).send(fortuneList);
                return
            }
        }
    }

}