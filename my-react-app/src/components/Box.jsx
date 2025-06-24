import React from 'react';
import '../styles/Box.css'; // Add the CSS file

function Box({ children }) {
  const elements = {
    JSX: {
      content: 'This is JSX content. JSX allows you to write HTML-like syntax in your JavaScript code, making it easier to create React components.',
    },
    Javascript: {
      content: 'This is JavaScript content. JavaScript is a versatile programming language used for web development, enabling dynamic content and interactivity.',
    },
    Nodejs: {
      content: 'This is Node.js content. Node.js is a JavaScript runtime built on Chrome\'s V8 engine, allowing you to run JavaScript on the server side.',
    },
    CSS: {
      content: 'This is CSS content. CSS (Cascading Style Sheets) is used to style HTML elements, controlling layout, colors, fonts, and more.'
    }
  };

  return (
    <div className="box-container">
      <p className="box-content">
        {elements[children]?.content || 'Please select a content type.'}
      </p>
    </div>
  );
}

export default Box;
