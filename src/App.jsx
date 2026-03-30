import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginSignUp from './components/LoginSignUp';
import AllProducts from './components/AllProducts'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='' element={} /> */}
      <Route path='/products/all' element={<AllProducts/>} />
      <Route path='/' element={<HomePage/>} />
      <Route path='/auth' element={<LoginSignUp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
