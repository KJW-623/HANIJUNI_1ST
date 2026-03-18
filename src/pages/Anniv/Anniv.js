import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../SubPage.css';
import './Anniv.css';

const Anniv = () => {
    const navigate = useNavigate();

    const stars = useMemo(() => [...Array(100)].map((_, i) => ({
        id: i, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`, delay: `${Math.random() * 5}s`, duration: `${Math.random() * 3 + 2}s`
    })), []);

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
                <h1 className="neon-text-pink">Love, Day 365</h1>
            </header>

            <main className="single-letter-container">
                <div className="letter-paper">
                    <div className="letter-inner-border">
                        <div className="letter-header">To. 지한이.</div>
                        <div className="letter-body">
                            <p>우리가 처음 만난 날부터 오늘까지,</p>
                            <p>벌써 1년이라는 시간이 지났다는 게 안 믿길 정도로 빠른 것 같지?</p>
                            <br />
                            <p>때로는 웃고, 때로는 울고. 서로 배려하고 사랑하기에 바빴던 시간들.</p>
                            <p>그 모든 시간들이 모여 지금의 우리를 만든 거라고 나는 생각이 들어.</p>
                            <br />
                            <p>소심하고, 답답했던 내 옆에서 네가 있어준다는 사실은 아직도 꿈만 같다는 생각을 해.</p>
                            <p>아마, 그 꿈을 놓치지 않으려면 지금보다 더 노력해야 한다는 걸 알아.</p>
                            <p>네가 주는 깊은 사랑만큼 나도 더욱 깊은 애정을 보답으로 줄 수 있게,</p>
                            <p>이제는 함께 기대고, 함께 의지할 수 있는 그런 순간들로 애정을 채워나가기를.</p>
                            <br />
                            <p>앞으로 우리가 함께 그려갈 수만 가지의 시간들이 예쁜 가지로 자라나 만개하기를.</p>
                            <p>우리가 함께 있을 때만큼은 네가 걱정 안 할 수 있도록.</p>
                            <br />
                            <p>그만큼 온 마음을 다 해, 너를 내 시간에 담아내.</p>
                            <p>지나온 시간에도, 오늘도, 앞으로의 미래에도.</p>
                            <p>오로지 표지한이라는 사람만을 사랑해, 늘. 진심으로.</p>
                        </div>
                        <div className="letter-footer">
                            <span className="letter-date">2026. 03. 19</span>
                            <span className="letter-from">From. 백유준.</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Anniv;