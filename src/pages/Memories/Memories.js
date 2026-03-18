import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../SubPage.css';
import './Memories.css';

const Memories = () => {
    const navigate = useNavigate();

    // 배경 별 (통일감 유지)
    const stars = useMemo(() => [...Array(100)].map((_, i) => ({
        id: i, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`, delay: `${Math.random() * 5}s`, duration: `${Math.random() * 3 + 2}s`
    })), []);

    // 기억 데이터 (내용을 자유롭게 수정하세요)
    const memoryData = [
        { id: 1, title: "사랑고백편지, 표지한", content: "나 생각보다 깐깐해서 이쁘다고 잘 안 해요, 그냥 들어요...", color: "#FFB6C1" }, // 벚꽃 핑크
        { id: 2, title: "사랑고백편지, 백유준", content: "나는 좋으니까, 으응. 안 이상해.", color: "#ADD8E6" }, // 스카이 블루
        { id: 3, title: "사랑고백편지, 백유준", content: "나는 너랑 같이 못 갔을 때, 그래도 행복했으면 했어.", color: "#FFFACD" }, // 레몬 쉬폰
        { id: 4, title: "사랑고백편지, 표지한", content: "... 나는, 그런 형이 줬던 소중한 감정에 보답하려고 열심히 한게 제일 컸어요.", color: "#E6E6FA" }, // 라벤더
        { id: 5, title: "충경대, 표지한", content: "이거 유명한 수작질이니까 딴 사람이랑은 하면 안 돼요.", color: "#F5F5DC" }, // 베이지
        { id: 6, title: "충경대, 백유준", content: "만약에 내가 힘들어 하는 일 있으면... 그때는 지한이가 키스 해줘. 그걸로도 좋을 것 같아.", color: "#FFDAB9" }, // 피치
        { id: 7, title: "切望, 백유준", content: "...... 우리, 다시 한번 평생을 약속할까. 지한아.", color: "#B1FB17" }, // 라임 그린
        { id: 8, title: "切望, 표지한", content: "네 품을, 너와의 평생을, 영원을, 허락해줄래?", color: "#F0FFFF" }, // 아주르 화이트
        { id: 9, title: "풀네임, 백유준", content: "....... 나는 거실이든 주방이든 다 좋아요, 여보.", color: "#7FFFD4" }, // 아쿠아마린
        { id: 10, title: "풀네임, 표지한", content: "예쁜 걸 예뻐하는 건데, 안될 건 없죠. 그치?", color: "#F4C2C2" }, // 베이비 핑크
        { id: 11, title: "生者必滅, 백유준", content: "내 모습을 다 보고 있었을 너에게 정말 괜찮다고, 나 그래도 열심히 했다고.", color: "#E0FFFF" }, // 라이트 시안
        { id: 12, title: "生者必滅, 표지한", content: "어째서 나는, 네 끝마저 기억할 수 없는 걸까.", color: "#D8BFD8" }, // 시슬 퍼플
        { id: 13, title: "自立法概論, 백유준", content: "...... 잊어야지, 잊어야 해. 지한아.", color: "#F0E68C" }, // 카키 옐로우
        { id: 14, title: "自立法概論, 표지한", content: "나는... 내 전부를 형한테 줬잖아요. 그 연장선이라고 생각해주면 난 그걸로 다 괜찮아요.", color: "#98FB98" }, // 페일 그린
        { id: 15, title: "幸福方法論, 백유준", content: "... 그때 다시, 서로의 곁을 약속하자. 평생을 옆에 있기로.", color: "#FF69B4" }, // 핫 핑크 포인트
        { id: 16, title: "幸福方法論, 표지한", content: "약속하자는 말도 안 할게요, 그러니까... 계속 함께 있어요.", color: "#AFEEEE" }, // 페일 터쿼이즈
        { id: 17, title: "세상의 중심에서, 표지한", content: "죽기 싫어요, 형도 죽으면 안 돼요, 죽지 마요. ... 나 두고 가지마요...", color: "#FF7F50" }, // 코랄
        { id: 18, title: "세상의 중심에서, 백유준", content: "아팠던 순간들도, 괴로웠던 순간들도. 모든 게... 나 혼자 짊어져도 충분한 것들이었는데.", color: "#B0C4DE" }, // 라이트 스틸 블루
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
                <h1 className="neon-text-pink">MEMORIES</h1>
                <p className="sub-description neon-text-white">마음속에 새겨진 작은 조각들</p>
            </header>

            <main className="memories-container">
                <div className="memory-board">
                    {memoryData.map((item) => (
                        <div key={item.id} className="memory-piece" style={{ '--accent-color': item.color }}>
                            <div className="memory-pin"></div>
                            <h3 className="memory-title">{item.title}</h3>
                            <p className="memory-content">{item.content}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Memories;