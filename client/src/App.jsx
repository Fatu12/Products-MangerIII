import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DisplayOne from './components/DisplayOne';
import Main from './view/Main';
import UpdateProducts from './components/UpdateProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      {/* allow the children components to occupy the same path, which will let them
      show at the same time.  and adding the default makes this the default path */}
      {/* < Route path = "/home" element = { < Main/>}  /> */}
      <Route path='/' element = {< Main />} />
      {/* id is just a variable that must give the value to it */}
      < Route path="/product/:id" element = {< DisplayOne/>} /> 
      < Route path="/product/edit/:id" element={< UpdateProducts/>} />
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
