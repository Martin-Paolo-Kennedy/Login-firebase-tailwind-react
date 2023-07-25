import React from "react";
import {Route, Routes} from 'react-router-dom';
import {Login} from "./Components/Login";
import {Home} from './Components/Home';
import {Register} from './Components/Register';
import {AuthProvider} from './context/authContext';
import { ProtectedRoute } from "./Components/ProtectedRoute";

function App() {
  return (
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute>
            <Home/>
          </ProtectedRoute>}></Route>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/> }/>
          <Route path='/register' element={<Register/> }/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
