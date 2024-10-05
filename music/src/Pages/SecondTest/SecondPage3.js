import React from "react";

import RockBox from "../../Components/RockBox";
import testData from "../../Components/testData";
import SecondBtn from "./Button/SecondBtn";
import Progress from '../../Components/progress';

import "./SecondPage.css";

const SecondPage3 = () => {

    return (
        <div className="firstPage">
            <div className="progress">
                <Progress percentage={testData[5].completed}/>
            </div>
            <div className="num2">
                <h3> 환상이 결합된 환각적인 시공간을 넘나드는 듯한 실험적인 사운드. 상상 속에만 존재하는 시간여행을 하고 싶어져.</h3>
                <RockBox id="ProRock1"/>
            </div>
            <div className="num2">
                <h3>강렬한 드럼 위에 특이하고 중독적인 일렉기타 리프, 공격적인 샤우팅 보컬은 억압된 세상에 펀치를 세게 꽂는 느낌이야!</h3>
                <RockBox id="HeavyRock1"/>
            </div>
            <div className="num2">
                <h3>창의성이 도드라지며 다양한 스타일을 조합하는 도전 정신. 정의할 수 없는 특이하고 가지각색한 음악.<br/>독창적인 스타일을 추구하는 나와 비슷해.</h3>
                <RockBox id="AlterRock1"/>
            </div>
            <div className="num2">
                <h3>패턴은 반복적이지만 어깨를 들썩이게 만드는 드럼과 무엇이든 스스로 만들겠다는(DIY)
 정신을<br/> 깨우는 가사, 이런 음악은 오늘도 힘차게 전진하게 만들어.</h3>
                <RockBox id="PunkRock1"/>
            </div>
            <div className="num2">
                <h3>몽환적인 분위기가 나는 보컬의 음색이 마치 구름이 되어 하늘 위로 나를 둥둥 띄우는 것 같아.<br/>
 이건 꿈속이 아닐까? 뭔가 하늘을 헤엄치는 것만 같아. </h3>
                <RockBox id="ShowRock1"/>
            </div>
            <SecondBtn to="/SecondPage4" ids={["ProRock1", "HeavyRock1", "AlterRock1", "PunkRock1", "ShowRock1"]}/>
        </div>
    );
};

export default SecondPage3;