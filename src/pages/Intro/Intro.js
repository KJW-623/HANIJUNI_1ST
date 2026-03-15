import React, { useMemo } from 'react';
import './Intro.css';

const Intro = ({ onEnter }) => {
  // 배경의 반짝이는 별 150개 생성 (기존 코드 유지)
  const stars = useMemo(() => 
    [...Array(150)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`
    })), []);

  // 떨어지는 별똥별 30개 생성 (속도 2배 느리게 유지)
  const shootingStars = useMemo(() => 
    [...Array(30)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 50}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 3 + 4}s` 
    })), []);

  return (
    <div className="intro-container">
      {/* 몽환적인 은하수 배경 레이어 */}
      <div className="galaxy-bg">
        <div className="nebula-purple"></div>
        <div className="nebula-pink"></div>
      </div>

      {/* 배경 별들 */}
      {stars.map(star => (
        <div key={star.id} className="star" style={{
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          animationDelay: star.delay,
          animationDuration: star.duration
        }} />
      ))}

      {/* 별똥별들 */}
      {shootingStars.map(sStar => (
        <div key={sStar.id} className="shooting-star" style={{
          top: sStar.top,
          left: sStar.left,
          animationDelay: sStar.delay,
          animationDuration: sStar.duration
        }} />
      ))}

      {/* 콘텐츠 영역: 글자와 버튼에 몽환적 효과 집중 */}
      <div className="intro-content">
        <h1 className="main-title dreaming-text">
          <span className="bold-name">HANIJUNI</span>
        </h1>
        <div className="divider glow-divider"></div>
        <p className="sub-title glittering-text">우리의 찬란한 일 년, 그 영원한 기록</p>
        <button className="enter-btn glass-btn" onClick={onEnter}>
          Enter Our Universe
        </button>
      </div>
    </div>
  );
};

export default Intro;