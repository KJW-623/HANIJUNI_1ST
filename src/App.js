// App.js
import React, { useState } from 'react';
import './App.css';
import Intro from './pages/Intro/Intro';
import Main from './pages/Main/Main';

function App() {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <div className="App">
      {!isEntered ? (
        <Intro onEnter={() => setIsEntered(true)} />
      ) : (
        /* 이 부분을 수정합니다 */
        <Main /> 
      )}
    </div>
  );
}

export default App;