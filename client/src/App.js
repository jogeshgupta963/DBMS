import React,{useState, useEffect} from 'react';
import './App.css';
import {css} from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';

import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Products from './Components/Products';
import About from './Components/About';
import Slider from "./Components/slider/Slider";
import Footer from './Components/Footer';
import Steps from './Components/steps/Steps';



function App() {
const[loading,setLoading] = useState(false);
const override =css`
display:block ;
border-color:red ;
margin-top:20%;
`;

useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },2000);
},[])

  return (
    <div className="App">
  
{
  loading ? ( <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
        ><ClockLoader color={"#0b91b5"} loading={loading} css={override} size={150} justifyContent={"centre"}/>
   </div> ):(
    <>
    <Navbar/>
    <Slider/>
    <About/>
   <Products/>
   <Steps/>
   <Contact/>
   <Footer/>

    </>
)} 

    </div>
  );
}

export default App;
