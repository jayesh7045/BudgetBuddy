import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Signup></Signup>}></Route>
          <Route path='/dashboard' element = {<Dashboard></Dashboard>}></Route>
         
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
