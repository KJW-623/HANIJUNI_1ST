import React, { useState, useEffect, useMemo } from 'react';
import './Main.css';

const Main = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const startDate = new Date("2025-03-19");
    const diffDays = Math.floor((currentTime - startDate) / (1000 * 60 * 60 * 24));

    const formatDate = currentTime.toLocaleDateString('ko-KR', {
        year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
    });
    const formatTime = currentTime.toLocaleTimeString('ko-KR', {
        hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'
    });

    const stars = useMemo(() => [...Array(100)].map((_, i) => ({
        id: i, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`, delay: `${Math.random() * 5}s`, duration: `${Math.random() * 3 + 2}s`
    })), []);

    return (
        <div className="main-wrapper">
            {/* 인트로와 동일한 별 배경 */}
            <div className="stars-container">
                {stars.map(star => (
                    <div key={star.id} className="star" style={{
                        top: star.top, left: star.left, width: star.size, height: star.size,
                        animationDelay: star.delay, animationDuration: star.duration
                    }} />
                ))}
            </div>

            <div className="main-layout">
                {/* 상단: 로고와 사이드 네온 시계 */}
                <header className="top-nav">
                    <div className="logo-group">
                        <h2 className="logo neon-text-white">HANIJUNI</h2>
                        <p className="anniversary-tag neon-text-pink">Our 1st Anniversary Story</p>
                    </div>

                    <div className="side-clock">
                        <p className="side-date neon-text-blue">{formatDate}</p>
                        <p className="side-time neon-text-blue">{formatTime}</p>
                    </div>
                </header>

                {/* 메인 비주얼: D-Day */}
                <section className="main-visual">
                    <h3 className="since-label neon-text-pink">250319, SINCE WE LOVED</h3>
                    <div className="hero-d-day">D+{diffDays}</div>
                </section>

                {/* 하단: 4분할 유리 박스 그리드 */}
                <div className="bottom-grid">
                    {/* 1. Memories */}
                    <section className="glass-card">
                        <h4 className="card-label neon-text-pink">MEMORIES</h4>
                        <div className="card-content neon-text-white">우리가 함께한 시간의 기억.</div>
                    </section>

                    {/* 2. Album */}
                    <section className="glass-card">
                        <h4 className="card-label neon-text-pink">ALBUM</h4>
                        <div className="card-content neon-text-white">말로는 표현 못할 시간들.</div>
                    </section>

                    {/* 3. Records */}
                    <section className="glass-card">
                        <h4 className="card-label neon-text-pink">RECORDS</h4>
                        <div className="card-content neon-text-white">기억할 순간의 기록.</div>
                    </section>

                    {/* 4. Anniversary */}
                    <section className="glass-card">
                        <h4 className="card-label neon-text-pink">ANNIVERSARY</h4>
                        <div className="card-content neon-text-white">1년의 시간동안, 우리는.</div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Main;