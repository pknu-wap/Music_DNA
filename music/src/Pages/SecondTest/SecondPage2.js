import React from "react";

import HipBox from "../../Components/HipBox";
import testData from "../../Components/testData";
import SecondBtn from "./Button/SecondBtn";
import Progress from '../../Components/progress';

import "./SecondPage.css";

const SecondPage2 = () => {


    return (
        <div className="firstPage">
            <div className="progress">
            <Progress percentage={testData[4].completed}/>
            </div>
            <div className="num2">
                <h3>험난했던 나의 출생지의 자부심이 넘쳐. 
그래서 그런지 할렘가의 삶이 담긴 빡센 스토리와 하드한 비트는 내 피를 끓게 한다고!</h3>
                <HipBox id="DrillHip1"/>
            </div>
            <div className="num2">
                <h3>도시적이면서 펍에서 나올 만한 중독성있는 멜로디,
주로 재물과 여자에 대한 가사, 강한 808베이스는 내 아드레날린을 부스트 업!</h3>
                <HipBox id="TrapHip1"/>
            </div>
            <div className="num2">
                <h3>난 룰 브레이커야. 기존에 있는 틀을 깨부수고 자신만의 독창성을 조화롭게 조합하는 음악이 좋아.</h3>
                <HipBox id="AlterHip1"/>
            </div>
            <div className="num2">
                <h3>난 에너지가 넘쳐. 손에서 에네르기파가 나올 만한 공격적인 가사와 게임같은 사운드의 음악이 좋아.</h3>
                <HipBox id="RageHip1"/>
            </div>
            <div className="num2">
                <h3>카세트에 믹스테잎을 넣고서 락카를 벽에 뿌리며 스케이트보드를 타고 한적한 골목을 가로 질러가.
우리 동네 벽에는 그래피티가 가득하지.</h3>
                <HipBox id="BoomHip1"/>
            </div>
            <SecondBtn to="/SecondPage3" ids={["DrillHip1", "TrapHip1", "AlterHip1", "RageHip1", "BoomHip1"]}/>
        </div>
    );
};

export default SecondPage2;