//Constants
const router = require('express').Router();
const accessKey = process.env.access_key;
const { default: axios } = require("axios");
const historyRecords = require('../Models/HistoryRecords');
//Post request to get the weather of a specific city using a third party API
    router.post('/getWeather', async(req, res,next) => {
            const city= req.body.cityName;
            const history = new historyRecords({cityName:req.body.cityName});
            let result={};
            await  axios.post(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${city}`,{})
                .then((res) => {
                
                result=res.data.location;
                console.log("entered axios",result);

                    })
                .catch(err => console.log(err))
                await history.save();
            res.send(result);
            console.log("ADDEED SUCCESSFULLY");

            
            }
        )

module.exports = router;
