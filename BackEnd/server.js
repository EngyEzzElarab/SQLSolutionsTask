const express = require("express");
//const jwt = require('jsonwebtoken');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const unirest = require("unirest");
const dotenv = require('dotenv');
const historyRecords = require('./Models/HistoryRecords');
dotenv.config()

const accessKey = process.env.access_key;
const MongoURI = process.env.Mongo_URI
const port = process.env.PORT || "8000";
const key =process.env.key;
const path = require("path");


const HistoryRecordController = require('./Controllers/HistoryRecordController');
const { response } = require("express");
const { default: axios } = require("axios");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => console.log("MongoDB is now connected"))
  .catch(err => console.log(err));

var ip = '102.221.68.0';
var options = {
  method: 'GET',
  url: `https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`,
  headers: {
    'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
    'x-rapidapi-key': '13bd313173msh9c75d15504edbacp14a18djsn380f2cea0e30'
  }
};

app.get('/getCurrentGeoLocation', async(req, res,next) => {


   axios.request(options).then(function (response) {
      console.log({'latitude':response.data.latitude, 'longitude':response.data.longitude});
      res.send({'latitude':response.data.latitude, 'longitude':response.data.longitude});
   }).catch(function (error) {
      console.error(error);
   });
   
 } )


app.post('/getWeather', async(req, res,next) => {
    
   
       const city= req.body.cityName;
       const history = new historyRecords({cityName:req.body.cityName});

       console.log("HELLOO",city);
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

     
})


app.use('/history', HistoryRecordController);

// DEPLOYMENT

__dirname = path.resolve();
if(process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname, '/FrontEnd/weatherapp/build')))

    app.get('*', (req,res)=>{
      res.sendFile(path.resolve(__dirname,'FrontEnd/weatherapp','build','index.html'));
    })
}
else{

  app.get("/", (req,res)=>{
      res.send("API is running");
  }
  );
}

//

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
