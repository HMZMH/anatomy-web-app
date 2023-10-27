import React, { useState } from 'react';
import './Sections.css';
import Section1Quiz from '../quizzes/Section1Quiz';
import Section2Quiz from '../quizzes/Section2Quiz';

function QuizSection() {

  const [currentContent, setCurrentContent] = useState(1); // Initialize with the first content

  // Handle navigation menu clicks to update the currentContent state
  const handleMenuClick = (contentIndex) => {
    setCurrentContent(contentIndex);
  };

  return (
    <div>

        <div id='quiz-menu'>
          <ul>
            <li className='quiz-menu-item' onClick={() => handleMenuClick(1)}>Skeletal System Quiz</li>
            <li className='quiz-menu-item' onClick={() => handleMenuClick(2)}>Muscular System Quiz</li>
          </ul>
        </div>
      
        <div>
          {currentContent === 1 && <Section1Quiz />}
          {currentContent === 2 && <Section2Quiz />}
        </div>

    </div>
  );
}

export default QuizSection;
