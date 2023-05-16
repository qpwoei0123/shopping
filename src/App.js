import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList'
import MainPage from './pages/MainPage'
import BookMark from './pages/BookMark'
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  const asd = 'asd'
  
  return (
    <BrowserRouter>
     <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/productlist' element={<ProductList/>}/>
          <Route path='/bookmark' element={<BookMark/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
