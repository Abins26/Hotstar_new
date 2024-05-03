import './App.css';
import Navbar from './components/Navbar';
import 'tailwindcss/tailwind.css';
// import VideoBackground from './components/VideoBackground';
import Home from './components/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DetailView from "./components/detailspage";
function App() {
  return (
    <>
      <div className="App " >
        <BrowserRouter>
        <Routes>
          {/* <DetailView/> */}
          <Route path='/' element={ <Home/> }/>
          <Route path='/details'  element={<DetailView/>}/>  
        </Routes>
        </BrowserRouter>
      </div>    
    </>
  );
}

export default App;
