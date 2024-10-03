import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import PopBox from "../../Components/PopBox";
import testData from "../../Components/testData";
import SecondBtn from "./Button/SecondBtn";
import useCompleted from "../../Components/useCompleted";

import "./SecondPage.css";

const SecondPage = () => {
    const completed = useCompleted(0, 2);

    return (
            <div className="firstPage">
                <div className="progress">
                    <ProgressBar
                        key={2}
                        bgcolor={testData[2].bgcolor}
                        completed={completed}
                    />
                </div>
                <div className="num2">
                    <h3>
                        쿵! 짝! 쿵! 짝! 4/4박자로 마치 내 발걸음과 같은 이 비트와 에너지 넘치는 보컬..
                        이런 음악은 역동적이고 강렬한 춤을 추게 만들어!
                    </h3>
                    <PopBox id="DancePop1" />
                </div>
                <div className="num2">
                    <h3>
                        고음질의 다양한 전자사운드! 마치 네온빛이 가득한
                        사이버펑크 세상에 온것 같아.
                    </h3>
                    <PopBox id="ElecPop1" />
                </div>
                <div className="num2">
                    <h3>
                        어디를 가나 익숙하게 들려오는 대한민국의 대중가요가 최고라고 생각해.
                    </h3>
                    <PopBox id="BritPop1" />
                </div>
                <div className="num2">
                    <h3>
                        고정관념에서 벗어나 아티스트만의 철학과 예술적 발상이 느껴지는 다채로운 음악이
                        좋아.
                    </h3>
                    <PopBox id="IndiPop1" />
                </div>
                <div className="num2">
                    <h3>
                        멕시코, 스페인 클럽에서 나올듯한 탄탄한 리듬과 특유의 타악기 소리가 나를
                        삼바춤을 추게해.
                    </h3>
                    <PopBox id="LatinPop1" />
                </div>
                <SecondBtn to="/SecondPage1" ids={["DancePop1", "ElecPop1", "BritPop1", "IndiPop1", "LatinPop1"]} />
            </div>
    );
};

export default SecondPage;
