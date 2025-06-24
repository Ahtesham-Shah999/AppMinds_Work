import React, { useEffect, useState } from 'react';
import '../styles/Footer.css';

const footerlines = [
  {
    motivaitional_content: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  },
  {
    motivaitional_content: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  },
  {
    motivaitional_content: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  }
];

function RandomConceptDisplay() {
  const [quoteWords, setQuoteWords] = useState([]);
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const index = Math.floor(Math.random() * footerlines.length);
      const words = footerlines[index].motivaitional_content.split(" ");

      setQuoteWords(words);
      setVisibleWords([]); // reset visible words before starting animation

      let i = 0;
      const wordInterval = setInterval(() => {
        setVisibleWords(prev => [...prev, words[i]]);
        i++;

        if (i >= words.length) {
          clearInterval(wordInterval);
        }
      }, 500); // 500ms delay between words

    }, 8000); // run this whole cycle every 8 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="random-concept">
      {visibleWords.join(" ")}
    </p>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Muhammad Ahtesham. All rights reserved.</p>
        <RandomConceptDisplay />
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
