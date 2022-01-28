import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";


const ViewHistory = () => {
    const [ history, setHistory] = useState([]);
    const [ loading, setLoading ] = useState(false);
   // const [ id, setId ] = useState("");
  //  const [ deleted, setDeleted ] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8000/history/getAllHistoryRecords').then(res => {
            setHistory(res.data)
           
            // setDeleted(false)
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
                                </h3> :""}
            <Card  style={{ width: '36rem'}}>
            
                    <Card.Body style={{display:'flex', justifyContent:'space-between'}}>
                        <Card.Title>{record.cityName}</Card.Title>
                        <Button variant="primary" onClick={(e)=>{onDelete(record._id)}}>Delete</Button>
                    </Card.Body>
            </Card>
                

         

        </div>
    ));
    return(
            <div>
               
               <div style={{ display:'flex',justifyContent:"center",alignItems:'center' , flexDirection:'column'}}>
                    <h2>Search History</h2>
                   {historyList}
               </div>




            
            </div>
    );

}

    
export default ViewHistory;