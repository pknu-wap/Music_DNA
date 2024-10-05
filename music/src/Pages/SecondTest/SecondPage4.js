import React from "react";

import PopBox from "../../Components/PopBox";
import testData from "../../Components/testData";
import SecondBtn from "./Button/SecondBtn";
import Progress from '../../Components/progress';

import "./SecondPage.css";

const SecondPage4 = () => {


    return (
        <div className="firstPage">
            <div className="progress">
                <Progress percentage={testData[6].completed}/>
            </div>
            <div className="num2">
                <h3>긍정적인 에너지를 뿜어내는 업템포 음악과 단순하면서 중독성이 강한 멜로디는 내 어깨를 들썩이게 해!</h3>
                <PopBox id="DancePop2"/>
            </div>
            <div className="num2">
                <h3>전자 악기와 디지털한 사운드의 조화!
마치 다채롭고 현란한 레이저쇼 현장에 온 기분이야!</h3>
                <PopBox id="ElecPop2"/>
            </div>
            <div className="num2">
                <h3>내가 덕질하는 최애 아이돌 음악만이 내 삶의 원동력이라고!
굿즈 소장은 필수 중 필수 아니겠어?</h3>
                <PopBox id="BritPop2"/>
            </div>
            <div className="num2">
                <h3>분위기 있는 작은 공연장에 나만 알고싶은 아티스트가 콘서트를 열었어.
감성적인 멜로디와 차분한 선율..이게 나의 안정제지.</h3>
                <PopBox id="IndiPop2"/>
            </div>
            <div className="num2">
                <h3>스페인어만의 특유한 어감과 레게톤의 음악!
마치 해변에서 개최한 뮤직 페스티벌에 와 있는 것 같아서 정말 신나!</h3>
                <PopBox id="LatinPop2"/>
            </div>
            <SecondBtn to="/SecondPage5" ids={["DancePop2", "ElecPop2", "BritPop2", "IndiPop2", "LatinPop2"]}/>
        </div>
    );
};

export default SecondPage4;