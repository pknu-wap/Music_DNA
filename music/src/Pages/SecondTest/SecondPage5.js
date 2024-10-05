import React from "react";

import JazzBox from "../../Components/JazzBox";
import testData from "../../Components/testData";
import SecondBtn from "./Button/SecondBtn";
import Progress from '../../Components/progress';

import "./SecondPage.css";

const SecondPage5 = () => {

    return (
        <div className="firstPage">
            <div className="progress">
                <Progress percentage={testData[7].completed}/>
            </div>
            <div className="num2">
                <h3>모래알들이 부딪히는 듯한 리듬과 차분하고 경쾌한 리듬, 따스한 멜로디.. 이 조합은 마치 스페인 바다가 훤히 보이는<br/>
                 브런치 카페에 와 있는 것 같아. 이게 낭만 아닐까?</h3>
                <JazzBox id="LatinJazz2"/>
            </div>
            <div className="num2">
                <h3>나도 모르게 고개를 까딱이며 리듬에 발을 툭툭치게 되는 음악! 
                    구두를 바닥에 딱딱 거리며 너의 손을 잡고 노을 아래서 함께 춤을 추고 싶어!</h3>
                <JazzBox id="SwingJazz2"/>
            </div>
            <div className="num2">
                <h3> 늦은 저녁 위스키 바에 중절모를 쓴 흑인 뮤지션이 피아노를 치고 있어. 
                    그의 피아노 건반 터치는 마치 내 영혼을 어루만지는 것 같아.</h3>
                <JazzBox id="SoulJazz2"/>
            </div>
            <div className="num2">
                <h3>정통적인 규칙을 무시한 채 연주자의 감정에만 몰입해 즉흥으로 표현하는 음악을 들으면 나도 감정을 자유롭고 솔직하게 표현하고 싶어져.</h3>
                <JazzBox id="FreeJazz2"/>
            </div>
            <div className="num2">
                <h3>주제 하나를 가지고 즉흥적으로 합을 맞추는 뮤지션들의 모습에서 섹시함이 느껴져.<br/>
                    예측 불가능한 음악의 흐름에 귀를 귀울이는게 나만의 재미야.</h3>
                <JazzBox id="BibobJazz2"/>
            </div>
            <SecondBtn to="/SecondPage6" ids={["LatinJazz2", "SwingJazz2", "SoulJazz2", "FreeJazz2", "BibobJazz2"]}/>
        </div>
    );
};

export default SecondPage5;