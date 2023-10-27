import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './sections/Section1';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';
import Section7 from './sections/Section7';
import Section8 from './sections/Section8';
import Section9 from './sections/Section9';
import Section10 from './sections/Section10';
import Quiz from './sections/QuizSection';

function App() {

  const [currentContent, setCurrentContent] = useState(1); // Initialize with the first content

  // Handle navigation menu clicks to update the currentContent state
  const handleMenuClick = (contentIndex) => {
    setCurrentContent(contentIndex);
  };

  return (
    <div className='app'>
      
      
      <h1>Anatomy</h1>

      <div className='row' id='row'>

        <div className='col-md-1'></div>

        <div className='col-md-9' id='content'>
          {currentContent === 1 && <Section1 />}
          {currentContent === 2 && <Section2 />}
          {currentContent === 3 && <Section3 />}
          {currentContent === 4 && <Section4 />}
          {currentContent === 5 && <Section5 />}
          {currentContent === 6 && <Section6 />}
          {currentContent === 7 && <Section7 />}
          {currentContent === 8 && <Section8 />}
          {currentContent === 9 && <Section9 />}
          {currentContent === 10 && <Section10 />}
          {currentContent === 11 && <Quiz />}
        </div>

        <div className='col-md-2' id='menu'>
          <ul>
            <li className='menu-item' onClick={() => handleMenuClick(1)}>Skeletal System</li>
            <li className='menu-item' onClick={() => handleMenuClick(2)}>Muscular System</li>
            <li className='menu-item' onClick={() => handleMenuClick(3)}>Nervous System</li>
            <li className='menu-item' onClick={() => handleMenuClick(4)}>Endocrine System</li>
            <li className='menu-item' onClick={() => handleMenuClick(5)}>Cardiovascular System</li>
            <li className='menu-item' onClick={() => handleMenuClick(6)}>Lymphatic System</li>
            <li className='menu-item' onClick={() => handleMenuClick(7)}>Respiratory System</li>
            <li className='menu-item' onClick={() => handleMenuClick(8)}>Digestive System</li>
            <li className='menu-item' onClick={() => handleMenuClick(9)}>Urinary System</li>
            <li className='menu-item' onClick={() => handleMenuClick(10)}>Reproductive System</li>
            <li className='menu-item' onClick={() => handleMenuClick(11)}>Quiz</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default App;
