const express = require("express");
//const jwt = require('jsonwebtoken');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const HistoryRecords = require('./models/HistoryRecords');
dotenv.config()

const accessKey = process.env.access_key;
const MongoURI = process.env.Mongo_URI
const port = process.env.PORT || "8000";
const key =process.env.key;


const HistoryRecordController = require('./Controllers/HistoryRecordController');
const { response } = require("express");
const { default: axios } = require("axios");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(result => console.log("MongoDB is now connected"))
//   .catch(err => console.log(err));




//app.use('/history', HistoryRecordController);


app.post('/getWeather', async(req, res,next) => {
    
   
       const city= req.body.cityName;
       console.log("HELLOO",city);
       let result={};
      
    await  axios.post(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${city}`,{})
       .then((res) => {
          
          result=res.data.location;
          console.log("entered axios",result);
           })
       .catch(err => console.log(err))
      res.send(result);
})




app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
