/* eslint-disable no-unused-vars */
import {lazy,Suspense} from 'react';
import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom';
import './App.css';
import Dashboard from './components/CreateData';
import Auth from './components/Auth';
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/createData' element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path='/' element={<Suspense fallback={"loading..."}><Auth/></Suspense>}/>
          <Route path='/login' element={<Suspense fallback={"loading..."}><Login/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
