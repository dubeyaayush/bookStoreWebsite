import React from 'react'
import Home from './Home/Home';
import Courses from './Courses/Courses';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Contacts from './Contacts/Contacts';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/authProvider';


const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Course" element={authUser ?<Courses /> : <Navigate to="/Signup"/>}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Contact" element={<Contacts />}/>
      </Routes>
      <Toaster />
    </div>
    </>
  )
}

export default App;
