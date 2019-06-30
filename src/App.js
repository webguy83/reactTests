import React from 'react';

function App() {
  return (
    <div className="App" data-test="my-component-test-app">
      <h1 data-test="test-counter-h1">This will display the counter</h1>
      <button data-test="test-counter-button">Click to cunter the counter</button>
    </div>
  );
}

export default App;
