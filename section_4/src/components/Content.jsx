import React, { use } from 'react';
import { useState } from 'react';
function Content({ buttonContainer: ButtonContainer, children }) {
  return (
    <section className="content-section">
      <div className="button-container">
        <ButtonContainer title="Fuck" />
      </div>
      <div className="main-content">
        {children}
      </div>
    </section>
  );
}

export default Content;
