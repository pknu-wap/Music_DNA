import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";

import RbBox from "../../Components/RbBox";
import testData from "../../Components/testData";
import SecondBtn from "./Button/SecondBtn";
import useCompleted from "../../Components/useCompleted";

import "./SecondPage.css";

const SecondPage8 = () => {

    const completed = useCompleted(0,10);

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
            <ProgressBar
                    key={10}
                    bgcolor={testData[10].bgcolor}
                    completed={completed}/>
            </div>
            <div className="num2">
                <h3>흑인의 색감이 진하게 나타나는 섹시한 보컬과 그루브. 많은 장르의 요소에 흑인의 소울을 합쳐 조화를 이루는 음악.<br/>
오늘 너와 나를 더 끈적하게 만들어줄 것 같아.</h3>
                <RbBox id="NeoRB2"/>
            </div>
            <div className="num2">
                <h3>현대의 대중적인 장르와 사운드엔 꼭 흑인의 그루브와 소울이 담겨야 한다고 생각해.
이런 조화의 세련미는 나를 트렌드세터로 만들어주는 것 같아.</h3>
                <RbBox id="ComRB2"/>
            </div>
            <div className="num2">
                <h3>드럼과 베이스의 끈적끈적한 리듬.
거기에 흑인 보컬의 찰진 멜로디까지.
마치 녹아내린 초콜릿 위에서 춤을 추고 싶어져!</h3>
                <RbBox id="PunkRB2"/>
            </div>
            <div className="num2">
                <h3>과거 흑인 노동자들의 피와 땀, 영혼이 담긴 보컬 멜로디를 듣고 있으면 나도 모르게 눈물이 나올것만 같아.</h3>
                <RbBox id="SoulRB2"/>
            </div>
            <div className="num2">
                <h3>여러 장르를 혼합해 장르를 단정 지을 수 없는 아티스트만의 스타일이 담긴 음악.
힙스터인 나는 자신만의 색깔이 뚜렷한 이 음악에 더 공감이 생겨.</h3>
                <RbBox id="AlterRB2"/>
            </div>
            <SecondBtn to="/SecondPage9" ids={["NeoRB2", "ComRB2", "PunkRB2", "SoulRB2", "AlterRB2"]}/>
        </div>
        </ChakraProvider>
    );
};

export default SecondPage8;