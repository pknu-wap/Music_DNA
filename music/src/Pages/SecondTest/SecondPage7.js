import React from "react";

import RockBox from "../../Components/RockBox";
import testData from "../../Components/testData";
import SecondBtn from "./Button/SecondBtn";
import Progress from '../../Components/progress';

import "./SecondPage.css";

const SecondPage7 = () => {

    return (
        <div className="firstPage">
            <div className="progress">
                <Progress percentage={testData[9].completed}/>
            </div>
            <div className="num2">
                <h3>난 뭐든지 앞서가야 해! 그렇기 때문에 예상치 못한 음악적 요소를 가지고 장시간 연주되는 악기의 솔로 연주가 멋있어 보여.</h3>
                <RockBox id="ProRock2"/>
            </div>
            <div className="num2">
                <h3>어디선가 들어본 기타 리프 라인이 저 멀리서 들려! 홀린듯 그쪽으로 가보니 박진감 넘치는 밴드들이 무대를 날뛰며 공연을 하고 있어.
                    강렬한 열기에 나 역시 몸을 흔들게 돼.. 이게 도파민이지!</h3>
                <RockBox id="HeavyRock2"/>
            </div>
            <div className="num2">
                <h3>특이한 기타리프 사운드와 대중적인 틀을 무시하고 각각의 아티스트마다 창의성이 도드라지는 음악이 진정한 예술이라고 생각해.</h3>
                <RockBox id="AlterRock2"/>
            </div>
            <div className="num2">
                <h3>단순한 코드를 치는 기타와 빠르고 강렬한 분위기, 반정부적인 가사는 염색머리에 찢어진 청바지를 입고 반항하던 학창시절이 떠올라.</h3>
                <RockBox id="PunkRock2"/>
            </div>
            <div className="num2">
                <h3>무대 위 보컬과 연주자들이 환상에 잠긴 듯 발만 보고 기타를 치며 노래를 불러.
아이러니 하지만 이 음악에 집중하면 나 역시 환상속에 잠기는 것 같아.</h3>
                <RockBox id="ShowRock2"/>
            </div>
            <SecondBtn to="/SecondPage8" ids={["ProRock2", "HeavyRock2", "AlterRock2", "PunkRock2", "ShowRock2"]}/>
        </div>
    );
};

export default SecondPage7;