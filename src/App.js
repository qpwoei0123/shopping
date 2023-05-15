import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import productList from './pages/productList'
import mainPage from './pages/mainPage'
import bookMark from './pages/bookMark'
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  const asd = 'asd'
  
  return (
    <BrowserRouter>
     <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<mainPage/>} />
          <Route path='/productlist' element={<productList/>}/>
          <Route path='/bookmark' element={<bookMark/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
