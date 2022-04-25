import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Pages/HOME/Home';
import Navbar from './components/Parts/Navbar/Navbar'
import About from './components/Pages/About/About';
import Articles from './components/Pages/Articles/Articles';
import Service from './components/Pages/Service/Service';
import Downloads from './components/Pages/Downloads/Downloads';
import FullCard from './components/Pages/FullPost/FullCard';
import NoMatch from './components/Pages/NoMAtch/NoMatch';
import PostMaker from './components/Pages/PostMaker/PostMaker';
import Auth from './components/Pages/Authorization/Auth';
import Footer from './components/Parts/Footer/Footer';



function App() {


  /*behold my paths*/

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about%20me" exact element={<About/>}/>
        <Route path="/service" exact element={<Service/>}/>
        <Route path="/articles" exact element={<Articles/>}/>
        <Route path="/downloads" exact element={<Downloads/>}/>
        <Route path="/postmaker" exact element={<PostMaker/>}/>
        <Route path="/auth" exact element={<Auth/>}/>
        <Route path="/articles/:id" exact element={<FullCard/>}/>
        <Route path="*" exact element={<NoMatch/>}/>
      </Routes>
      <Footer/>
      </Router>  
  );
}

export default App;
