import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../SubPage.css';
import './Album.css';

const Album = () => {
    const navigate = useNavigate();

    // 메인과 통일감을 주는 별 배경 데이터
    const stars = useMemo(() => [...Array(80)].map((_, i) => ({
        id: i, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`, delay: `${Math.random() * 5}s`, duration: `${Math.random() * 3 + 2}s`
    })), []);

    return (
        <div className="sub-wrapper">
            {/* 배경 별들 */}
            <div className="stars-container">
                {stars.map(star => (
                    <div key={star.id} className="star" style={{
                        top: star.top, left: star.left, width: star.size, height: star.size,
                        animationDelay: star.delay, animationDuration: star.duration
                    }} />
                ))}
            </div>

            <button className="back-btn" onClick={() => navigate('/main')}>← BACK</button>

            <header className="sub-header">
                <h1 className="neon-text-pink">OUR ALBUM</h1>
                <p className="sub-description neon-text-white">우리의 찬란했던 순간들.</p>
            </header>

            <main className="album-container">
                <div className="album-grid">
                    {/* 1~5번: 소중한 추억 사진들 (외부 링크 적용) */}
                    {[
                        { date: "2025.03.19", desc: "우리의 첫시작.", url: "https://i.imgur.com/Nj9CZZH.jpeg" },
                        { date: "2025.05.07", desc: "처음의 풋풋함.", url: "https://i.imgur.com/aoGLPNW.jpeg" },
                        { date: "2025.06.26", desc: "우리가 만난지 100일.", url: "https://i.imgur.com/iVAyIRj.png" },
                        { date: "2025.10.04", desc: "200일의 약속.", url: "https://i.imgur.com/TktGwRO.png" },
                        { date: "2026.01.12", desc: "300일이라는 시간.", url: "https://i.imgur.com/ZC1svFT.png" },
                        { date: "2026.03.19", desc: "오늘의 1주년.", url: "https://i.imgur.com/ufcAyOt.gif" },
                    ].map((item, i) => (
                        <div key={i} className="photo-card">
                            <div className="photo-frame">
                                <img src={item.url} alt={item.desc} className="photo-img"
                                    onError={(e) => e.target.style.display = 'none'} />
                                {/* 이미지 로딩 실패 시 빈 공간 처리 */}
                            </div>
                            <p className="photo-date">{item.date}</p>
                            <p className="photo-desc">{item.desc}</p>
                        </div>
                    ))}

                    {/* 6번: 미래를 이야기하는 특별한 카드 */}
                    <div className="photo-card future-card">
                        <div className="photo-placeholder future-inner">
                            <span className="future-icon">✨</span>
                            <p className="future-text">More Stories Coming...</p>
                        </div>
                        <p className="photo-date">Next Chapter</p>
                        <p className="photo-desc">앞으로 우리가 그려갈 눈부신 미래.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Album;