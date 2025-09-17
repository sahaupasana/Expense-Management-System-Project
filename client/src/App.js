import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element={<HomePage/>}/>
      <Route path = "/Register" element={<Register/>}/>
      <Route path = "/Login" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
