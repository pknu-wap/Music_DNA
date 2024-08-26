import React from "react";
import {useState, useRef} from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { supabase } from '../../supabaseClient';

import PopBox from "../../Components/PopBox";
import HipBox from "../../Components/HipBox";
import RockBox from "../../Components/RockBox";
import NextButton from "../../Components/NextButton";
import useCompleted from "../../Components/useCompleted";

import "./FirstPage.css";
import testData from "../../Components/testData";

const audioPath = {
    1: 'POP1.mp3',
    2: 'POP2.mp3',
    3: 'HipHop1.mp3',
    4: 'HipHop2.mp3',
    5: 'Rock1.mp3',
    6: 'Rock2.mp3',
    7: 'RB1.mp3',
    8: 'RB2.mp3',
    9: 'Jazz1.mp3',
    10: 'Jazz2.mp3'
};

const FirstPage = () => {
    const completed = useCompleted(0,0);

    const [isPlaying, setIsPlaying] = useState(false);
    // 음원 개수가 총 10개이므로 각 음원의 상태를 배열 형태로 다루어야함 
    const audioRefs = useRef([]);


    const playMusic = async (audioName) => {
        try {
            if (!audioRefs.current[audioName].src) {
                const { data, error } = await supabase
                    .storage
                    .from('Music_src') // 여기에 실제 버킷 이름을 넣으세요
                    .getPublicUrl(audioPath[audioName]);
                    

                if (error) {
                    console.error('Error fetching audio URL:', error);
                    return;
                }
                
                audioRefs.current[audioName].src = data.publicUrl;
            }

            // 재생중인 음악이 있다면 정지
            audioRefs.current.forEach((audio, i) => {
                if (i !== audioName && !audio.paused) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
            
            if (audioRefs.current[audioName].paused) {
                audioRefs.current[audioName].play();
            } else {
                audioRefs.current[audioName].pause();
            }
        } catch (error) {
            console.error('Error handling audio:', error);
        }
        setIsPlaying(!isPlaying);
    };

    return (
     
        <div className="firstPage">
            <div className="progress">
                <ProgressBar
                    key={0}
                    bgcolor={testData[0].bgcolor}
                    completed={completed}/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(1)} src="./sound1.png" alt='Sound Icon'/>
                <h3><div class="q1">1번 사운드가 당신의 마음에 드나요?</div></h3>
                <PopBox className="pop" id="Pop1"/>
                <audio ref={el => audioRefs.current[1] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(2)} src="./sound1.png" alt='Sound Icon'/>
                <h3><div class="q1">2번 사운드가 당신의 마음에 드나요?</div></h3>
                <PopBox id="Pop2"/>
                <audio ref={el => audioRefs.current[2] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(3)} src="./sound1.png" alt='Sound Icon'/>
                <h3><div class="q1">3번 사운드가 당신의 마음에 드나요?</div></h3>
                <HipBox id="Hip1"/>
                <audio ref={el => audioRefs.current[3] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(4)} src="./sound1.png" alt='Sound Icon'/>
                <h3><div class="q1">4번 사운드가 당신의 마음에 드나요?</div></h3>
                <HipBox id="Hip2"/>
                <audio ref={el => audioRefs.current[4] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(5)} src="./sound1.png" alt='Sound Icon'/>
                <h3><div class="q1">5번 사운드가 당신의 마음에 드나요?</div></h3>
                <RockBox id="Rock1"/>
                <audio ref={el => audioRefs.current[5] = el} />
            </div>
            <NextButton to="/FirstPage1" popCount={2} hipCount={2} rockCount={1}/>
        </div>

    );
};

export default FirstPage;