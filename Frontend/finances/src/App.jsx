

import React, {useState, useEffect} from "react"
import api from "./api"
import Navbar from "./nav";
import Form from "./Form";
import Table from "./Tables";

function App() {
  const [transactions, setTransaction] = useState([]);
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    is_income: false,
    date: ''
  });

  const fetchTransaction = async () => {
    const response = await api.get("/transactions/");
    setTransaction(response.data);
    // console.log(response.data);
  };

  useEffect(()=>{
    fetchTransaction()
  },[])


  const handleInputchange = (event)=> {
    const helper =event.target;
    const value = helper.type === 'checkbox' ? helper.checked : helper.value;
    setFormData((prev)=>({...prev, [helper.name]: value,
    }));

  };

  const handleFormSubmit = async (event)=>{
    event.preventDefault();
    await api.post('/transactions/', formData);
    fetchTransaction();
    setFormData({
      amount: '',
      category: '',
      description: '',
      is_income: false,
      date: ''
    })
  }
  return (
    <>
    <Navbar />
    <Form handleChange={handleInputchange} handleSubmit={handleFormSubmit} formData={formData}/>
    <Table transactions={transactions} />
      
    </>
  )
}

export default App
