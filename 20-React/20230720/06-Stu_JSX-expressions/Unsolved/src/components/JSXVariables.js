import React from 'react';

// TODO: Create a `name` variable

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React


const myname = 'Santiago';
const thoughts = 'I think nothing';

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {myname}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {myname.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React: {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
