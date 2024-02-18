import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BackToTop } from './components/backToTop/BackToTop';
import ScrollToTop from "./utils/ScrollToTop"
import Main from './pages/main/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          {/* <Route path="/projects" element={<ProjectPage />} /> */}
        </Routes>
      </Router>
      <BackToTop />
    </div> 
  );
}

export default App;
