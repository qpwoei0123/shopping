import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import productList from './pages/productList'
import mainPage from './pages/mainPage'
import bookMark from './pages/bookMark'

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          <Route path='/' element={<mainPage/>} />
          <Route path='/products' element={<productList/>}/>
          <Route path='/bookmark' element={<bookMark/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
