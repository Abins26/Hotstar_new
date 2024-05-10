import './App.css';
// import Navbar from '../src/components/Navbar/Navbar';
import 'tailwindcss/tailwind.css';
// import VideoBackground from './components/VideoBackground';
import Home from './components/Home Page/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DetailView from "../src/components/DetailPage/detailspage";
function App() {
  return (
    <>
      <div className="App " >
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          {/* <DetailView/> */}
          <Route path="/details/:id" element={<DetailView/>}/>  
        </Routes>
        </BrowserRouter>
      </div>    
    </>
  );
}

export default App;
