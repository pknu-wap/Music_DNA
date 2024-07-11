import React from "react";
import {useState, useRef} from "react";
import { ChakraProvider } from '@chakra-ui/react';
import ProgressBar from "@ramonak/react-progress-bar";
import { supabase } from '../../supabaseClient';

import RockBox from "../../Components/RockBox";
import RbBox from "../../Components/RbBox";
import JazzBox from "../../Components/JazzBox";
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

const FirstPage1 = () => {
    const completed = useCompleted(0,1);

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
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
            <ProgressBar
                    key={1}
                    bgcolor={testData[1].bgcolor}
                    completed={completed}/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(6)} src="./sound1.png" alt='Sound Icon'/>
                <h3><div class="q1">6번 사운드가 당신의 마음에 드나요?</div></h3>
                <RockBox id="Rock2"/>
                <audio ref={el => audioRefs.current[6] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(7)} src="./sound1.png" alt='Sound Icon'/>
                <h3><div class="q1">7번 사운드가 당신의 마음에 드나요?</div></h3>
                <RbBox id="RB1"/>
                <audio ref={el => audioRefs.current[7] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(8)} src="./sound1.png" alt='Sound Icon'/>
                <h3><div class="q1">8번 사운드가 당신의 마음에 드나요?</div></h3>
                <RbBox id="RB2"/>
                <audio ref={el => audioRefs.current[8] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(9)} src="./sound1.png" alt='Sound Icon'/>
                <h3><div class="q1">9번 사운드가 당신의 마음에 드나요?</div></h3>
                <JazzBox id="Jazz1"/>
                <audio ref={el => audioRefs.current[9] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(10)} src="./sound1.png" alt='Sound Icon'/>
                <h3><div class="q1">10번 사운드가 당신의 마음에 드나요?</div></h3>
                <JazzBox id="Jazz2"/>
                <audio ref={el => audioRefs.current[10] = el} />
            </div>
            <NextButton to="/SecondPage" rockCount={1} jazzCount={2} RbCount={2}/>
        </div>
        </ChakraProvider>
    );
};

export default FirstPage1;