import React from 'react';

function Text( props ) {
  return (
    <div className="outer-block">
      <button className="btn">{props.title} 1</button>
    </div>
  );
}

export default Text;
