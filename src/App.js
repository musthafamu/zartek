import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext, UserContextProvider } from './Context/UserContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css'

function App() {

  const {}=useContext(UserContext)
 
  return (
      <UserContextProvider>
      <Home/>
    
      </UserContextProvider>


  );
}

export default App;
