import './App.css';
import Navbar from './components/Navbar';
import 'tailwindcss/tailwind.css';
// import VideoBackground from './components/VideoBackground';
import Home from './components/Home'
import { Router,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App " >
        <Routes>

         {/* <Route path='/'  element={}/>  */}

          {/* <VideoBackground/> */}

          <Route path='/' element={ <Home/> }/>
        </Routes>

      </div>    
    </>
  );
}

export default App;
