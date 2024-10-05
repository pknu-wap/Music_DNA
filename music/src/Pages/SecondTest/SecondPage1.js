import React from "react";

import JazzBox from "../../Components/JazzBox";
import testData from "../../Components/testData";
import SecondBtn from "./Button/SecondBtn";
import Progress from '../../Components/progress';

import "./SecondPage.css";

const SecondPage1 = () => {


    return (
        <div className="firstPage">
            <div className="progress">
                <Progress percentage={testData[3].completed}/>
            </div>
            <div className="num2">
                <h3>석양이 떠오르는 해변에서 차분한 선율에 맞춰 탱고춤을 추는 라틴 사람들. 이건 환상적인 바이브야.</h3>
                <JazzBox id="LatinJazz1"/>
            </div>
            <div className="num2">
                <h3>크리스마스파티에 참석했어. 한손에는 레드 와인, 한손은 너의
허리에.<br/> 따뜻한 분위기 속에서 흘러나오는 앙상블에 몸을 맡긴 난 특별한 사람이 된것만 같아.</h3>
                <JazzBox id="SwingJazz1"/>
            </div>
            <div className="num2">
                <h3>시가향이 풍기는 자욱한 어두운 바에 홀로 앉아 위스키 한 잔을 마시는 나.
흑인 보컬과 이 쫀득한 리듬이 나를 더 취하게 해.</h3>
                <JazzBox id="SoulJazz1"/>
            </div>
            <div className="num2">
                <h3>불협화음이어도 느낌 가는대로! 박자가 달라지든 말든 아티스트의 감정에 충실한 음악은 내가 자유롭고 싶은 마음과 같아서 좋아!</h3>
                <JazzBox id="FreeJazz1"/>
            </div>
            <div className="num2">
                <h3>난 느긋하고 여유롭지 않아. 빠르고 복잡하고 다양한 리듬이 나의 인생과 비슷해.</h3>
                <JazzBox id="BibobJazz1"/>
            </div>
            <SecondBtn to="/SecondPage2" ids={["LatinJazz1", "SwingJazz1", "SoulJazz1", "FreeJazz1", "BibobJazz1"]}/>
        </div>
    );
};

export default SecondPage1;