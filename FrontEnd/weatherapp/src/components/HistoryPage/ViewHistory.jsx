import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import axios from "axios";
import Card from 'react-bootstrap/Card';
import background from "../../assets/background.jpeg";
const ViewHistory = () => {
    const [ history, setHistory] = useState([]);
    const [ loading, setLoading ] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8000/history/getAllHistoryRecords').then(res => {
            setHistory(res.data)
        });
        setLoading(false)
    }, [history]);

    const onDelete = (id)=>
    {
        try{
         axios.delete(`http://localhost:8000/history/${id}`);
        alert("Record Deleted Successfully!")
        }
        catch (err) {
            console.log(err.message);
          }
    }
    const historyList = history.map(record =>(
        <div>
            {loading ?
            <h3>
                Loading...
            </h3>
             :""}
            <Card  style={{ width: '36rem'}}>
            
                    <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
                        <Card.Title>{record.cityName}</Card.Title>
                        <Button variant="primary" onClick={(e)=>{onDelete(record._id)}}>Delete</Button>
                    </Card.Body>
            </Card>
        </div>
    ));
    return(
            <div style={{backgroundImage:`url(${background})`, backgroundSize: '100%', zIndex: '0',height:'100%', backgroundRepeat : 'repeat-y' , backgroundPosition:'center'}} className="flex-column justify-content-center align-items-center"> 
                <div style={{ display:'flex',justifyContent:"center",alignItems:'center' , flexDirection:'column'}}>
                        <h2>Search History</h2>
                        {historyList}
                </div>
            </div>
    );
}
   
export default ViewHistory;