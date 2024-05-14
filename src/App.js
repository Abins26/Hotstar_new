import 'tailwindcss/tailwind.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
// import Navbar from '../src/components/Navbar/Navbar';
// import VideoBackground from './components/VideoBackground';
import Home from './components/Home Page/Home';
import DetailView from "../src/components/DetailPage/detailspage";
import {FavoriteProvider} from "../src/components/FavoriteContext/FavoriteContext"
function App() {
  return (
    <>
      <div className="App " >
        <BrowserRouter>
        <FavoriteProvider>

        <Routes>
          <Route path='/' element={ <Home/> }/>
          {/* <DetailView/> */}
          <Route path="/details/:id" element={<DetailView/>}/>  
        </Routes>
        </FavoriteProvider>
        </BrowserRouter>
      </div>    
    </>
  );
}

export default App;
