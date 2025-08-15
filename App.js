
import React from 'react';
import Header from './components/Header';

function App() {
  const userName = 'a';
  const userAge = 22;

  return (
    <div>
      <h1>Chào mừng đến với ứng dụng React!</h1>
      <Header name={userName} age={userAge} />
    </div>
  );
}

export default App;
