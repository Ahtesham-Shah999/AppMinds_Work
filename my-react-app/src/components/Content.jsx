import React, { useState } from 'react';
import '../styles/Content.css'; // Make sure to create this CSS file
import Box from './Box'; // 🔽 This is the child component
function Content() {
  const [selectedContent, setSelectedContent] = useState('');

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '6rem' }}>
      <h2>Choose Your Content</h2>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => handleButtonClick('JSX')}>JSX</button>
        <button onClick={() => handleButtonClick('Javascript')}>Javascript</button>
        <button onClick={() => handleButtonClick('Nodejs')}>Nodejs</button>
        <button onClick={() => handleButtonClick('CSS')}>CSS</button>
      </div>

      <Box>{selectedContent}</Box>
    </div>
  );
}

export default Content;
