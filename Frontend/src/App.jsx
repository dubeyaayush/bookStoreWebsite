import React from 'react'
import Home from './Home/Home';
import Courses from './Courses/Courses';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Contacts from './Contacts/Contacts';


const App = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Course" element={<Courses />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Contact" element={<Contacts />}/>
      </Routes>
    </div>
    </>
  )
}

export default App;
