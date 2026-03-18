import React from 'react';
/* 1. BrowserRouter 대신 HashRouter를 가져옵니다. */
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트 임포트
import Intro from './pages/Intro/Intro';
import Main from './pages/Main/Main';
import Memories from './pages/Memories/Memories';
import Album from './pages/Album/Album';
import Records from './pages/Records/Records';
import Anniv from './pages/Anniv/Anniv';

function App() {
  return (
    /* 2. HashRouter는 URL의 '#' 뒷부분을 읽기 때문에 
      GitHub Pages에서 새로고침을 해도 404 에러가 발생하지 않습니다.
      HashRouter 사용 시 basename 설정은 필요 없으므로 제거했습니다.)
    */
    <Router>
      <Routes>
        {/* 첫 접속 화면: 인트로 */}
        <Route path="/" element={<Intro />} />

        {/* 메인 대시보드 */}
        <Route path="/main" element={<Main />} />

        {/* 서브 페이지들 */}
        <Route path="/memories" element={<Memories />} />
        <Route path="/album" element={<Album />} />
        <Route path="/records" element={<Records />} />

        {/* 기념일 편지 페이지 */}
        <Route path="/anniversary" element={<Anniv />} />
      </Routes>
    </Router>
  );
}

export default App;