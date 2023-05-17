import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Product from './pages/Product'
import MainPage from './pages/MainPage'
import BookMark from './pages/BookMark'
import Header from './components/Header'
import Footer from './components/Footer';

function App(){
  
  return (
    <BrowserRouter>
     <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/products' element={<Product/>}/>
          <Route path='/bookmark' element={<BookMark/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
