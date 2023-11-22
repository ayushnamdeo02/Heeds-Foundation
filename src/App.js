import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import About from './pages/about/about';
import Join from './pages/join/join';
import Footer from './components/footer/footer';
import Contact from './pages/contact/contact';
import Navbar from './components/navbar/navbar';
import Privacypolicy from './pages/privacypolicy/privacypolicy';
import Faq from './pages/FAQ/FAQ';
import TC from './pages/termandcondition/termandcondition';
import 'font-awesome/css/font-awesome.min.css';
import Community from './pages/community/community';
import Impact from './pages/impact/impact';
import Newsletter from './pages/newsletter/newsletter';
import Successstory from './pages/sucessstory/successstory';
import Internshipjobs from './pages/internship-jobs/internship-jobs';
import Openpositions from './pages/open-positions/open-positions';
import { Helmet } from 'react-helmet';
function App() 

{
  return (
    <Router>
      <Helmet>
            <title>Heeds Foundation | Home</title>
            <meta name="description" content="Welcome to Example Website - a platform for volunteering, making a difference, and creating a positive impact. Join us today!" />
          </Helmet>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path='/privacypolicy' element={<Privacypolicy />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/termandcondition' element={<TC />} />
            <Route path='/community' element={<Community />} />
            <Route path='/impact' element={<Impact />} />
            <Route path='/newsletter' element={<Newsletter />} />
            <Route path='/successstory' element={<Successstory />} />
            <Route path='/internship-jobs' element={<Internshipjobs />} />
            <Route path='/open-positions' element={<Openpositions />} />
          </Routes>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
