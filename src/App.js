import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. 페이지 컴포넌트들을 모두 불러옵니다.
import Intro from './pages/Intro/Intro';
import Main from './pages/Main/Main';
import Memories from './pages/Memories/Memories';
import Album from './pages/Album/Album';
import Records from './pages/Records/Records';
import Anniv from './pages/Anniv/Anniv'; // 폴더명이 Anniv인 것 확인했습니다!

function App() {
  return (
    // basename 설정을 통해 GitHub Pages 배포 시에도 경로가 꼬이지 않게 합니다.
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* 첫 접속 화면: 인트로 */}
        <Route path="/" element={<Intro />} />
        
        {/* 메인 대시보드 */}
        <Route path="/main" element={<Main />} />
        
        {/* 서브 페이지들: 이제 '준비중' 대신 실제 파일을 보여줍니다. */}
        <Route path="/memories" element={<Memories />} />
        <Route path="/album" element={<Album />} />
        <Route path="/records" element={<Records />} />
        
        {/* 메인에서 Anniversary 클릭 시 /anniversary로 이동하게 짰으므로 경로 유지 */}
        <Route path="/anniversary" element={<Anniv />} />
      </Routes>
    </Router>
  );
}

export default App;