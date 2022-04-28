import Login from './login';
import './App.css';
import React from 'react';
import { Route,BrowserRouter as Router , Routes} from 'react-router-dom';
import Table from './detail/User_id';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/detail' element={<Table/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
