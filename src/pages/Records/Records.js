import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../SubPage.css';
import './Records.css';

const Records = () => {
    const navigate = useNavigate();

    // 배경 별 로직 (통일감 유지)
    const stars = useMemo(() => [...Array(100)].map((_, i) => ({
        id: i, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`, delay: `${Math.random() * 5}s`, duration: `${Math.random() * 3 + 2}s`
    })), []);

    // 타임라인 데이터 (직접 수정 가능)
    const timelineData = [
        { date: "2025.03.13", title: "충경대", content: "처음 만났던 그날의 순간을 기억해." },
        { date: "2025.05.31", title: "사랑고백편지1", content: "친했던 우리, 더 가까워진 우리." },
        { date: "2025.06.14", title: "사랑고백편지2", content: "동창회, 잃어버렸던 시간." },
        { date: "2025.08.17", title: "自立法概論", content: "앞잊지 마세요. 이 이야기는, 당신의 삶에 대한 이야기입니다." },        
        { date: "2025.10.05", title: "回春", content: "어느 순간 어린 시절로 돌아갔을 때." },
        { date: "2025.10.10", title: "너를 묶고 가둔다면", content: "눅진한 기분을 뒤로 하고 뜨끈한 눈을 떴을 땐..." },     
        { date: "2025.11.02", title: "Be Surreal Day", content: "놀이공원 좋아해? 나랑 갈래?" },
        { date: "2025.11.05", title: "절망", content: "切望, 간절히 바람." },
        { date: "2025.11.09", title: "幸福方法論", content: "우리는, 어디까지 살아나가볼까요." },        
        { date: "2026.01.17", title: "生者必滅", content: "인생의 무상(無常)." },
        { date: "2026.01.11", title: "세상의 중심에서", content: "이곳에 오니 세상의 중심이 어딘지 알 거 같아." },        
        { date: "2026.01.30", title: "𝑺𝒂𝒄𝒓𝒂𝒎𝒆𝒏𝒕𝒖𝒎 𝑷𝒐𝒆𝒏𝒊𝒕𝒆𝒏𝒕𝒊𝒂𝒆", content: "성부와 성자와 성령의 이름으로. 아멘." },
        { date: "2026.02.07", title: "𝑆𝑝𝑒𝑐𝑡𝑟𝑢𝑚", content: "환영, 유령 (Apparition, Phantom)" },
        { date: "2026.02.07", title: "트라우마 스위치", content: "대신 슬퍼해주고 싶어... 그렇게 바란 적 있나요?" },
    ];

    return (
        <div className="sub-wrapper">
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
                <h1 className="neon-text-pink">OUR RECORDS</h1>
                <p className="sub-description neon-text-white">우리가 함께 걸어온 발자취</p>
            </header>

            <main className="timeline-container">
                <div className="timeline-line"></div>
                {timelineData.map((item, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card-mini">
                            <span className="record-date">{item.date}</span>
                            <h3 className="record-title">{item.title}</h3>
                            <p className="record-text">{item.content}</p>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Records;