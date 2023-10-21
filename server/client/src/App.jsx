import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import SchoolDesign from './components/SchoolDesign';
import LandscapeDesign from './components/LandscapeDesign';
import Login from './components/Login';
import Registration from './components/Registration';
import UploadPdf from './components/UploadPdf';
import Dashboard from './components/Dashboard';
import Contact from './pages/Contact';
import About from './pages/About';
import Rules from './pages/Rules';
const App = () => {
  return (
    <>
      <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/schooldesign' element={<SchoolDesign />} />
        <Route path='/landscapedesign' element={<LandscapeDesign />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/rule' element={<Rules/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/upload' element={<UploadPdf/>}/>
        </Routes>
      <Footer/>
    </>

  )
}


export default App;