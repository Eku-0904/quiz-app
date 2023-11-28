const fs = require('fs');

const getQuiz = (req, res) => {
    fs.readFile('./database.json', 'utf-8', (err, jsonData) => {
        if (err) {
            console.log(err)
            res.status(400).send('refresh')
        }
    const data = JSON.parse(jsonData)
    res.status(200).send(data)
    }) 
}
module.exports = getQuiz