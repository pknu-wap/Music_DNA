import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import HipBox from "../../Components/HipBox";
import testData from "../../Components/testData";
import SecondBtn from "./Button/SecondBtn";
import useCompleted from "../../Components/useCompleted";

import "./SecondPage.css";

const SecondPage6 = () => {

    const completed = useCompleted(0,8);

    return (
        <div className="firstPage">
            <div className="progress">
            <ProgressBar
                    key={8}
                    bgcolor={testData[8].bgcolor}
                    completed={completed}/>
            </div>
            <div className="num2">
                <h3> 잔인하고 거친 질감이 느껴지는 사운드와 야만적인 가사들은 잠재되어 있는 나의 야성을 잠시 깨워줘.</h3>
                <HipBox id="DrillHip2"/>
            </div>
            <div className="num2">
                <h3>마치 스포츠카의 시동을 건 듯한 808 베이스! 대교 위를 달리는 듯한 비트! <br/>
                    돈과 섹슈얼한 가사!
어두운 도시 속 빛줄기들이 연상되는 이런 음악은 나를 더 섹시하게 만들어줘.</h3>
                <HipBox id="TrapHip2"/>
            </div>
            <div className="num2">
                <h3>기존에 있는 규칙을 무시한 채 많은 장르를 혼합하여, 독창적인 사운드로 조화롭게 랩하는 아티스트가 매력적이야.</h3>
                <HipBox id="AlterHip2"/>
            </div>
            <div className="num2">
                <h3>에너지가 뿜어져 나오는 듯한 강력한 전자 사운드와 분노로 행진하는 듯한 랩과 비트의 조합은 내 가슴을 뻥 뚫리게 해줘.</h3>
                <HipBox id="RageHip2"/>
            </div>
            <div className="num2">
                <h3>드럼의 그루브를 타며 박자를 가지고 노는 랩에 집중하다 보면 골목벽에 그려진 알록달록한 그래피티 그림들이 떠올라.</h3>
                <HipBox id="BoomHip2"/>
            </div>
            <SecondBtn to="/SecondPage7" ids={["DrillHip2", "TrapHip2", "AlterHip2", "RageHip2", "BoomHip2"]}/>
        </div>
    );
};

export default SecondPage6;