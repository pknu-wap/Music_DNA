import React from 'react';
import { useState, useRef } from 'react';
import { supabase } from '../../supabaseClient';

import RockBox from '../../Components/RockBox';
import RbBox from '../../Components/RbBox';
import JazzBox from '../../Components/JazzBox';
import NextButton from '../../Components/NextButton';

import './FirstPage.css';
import testData from '../../Components/testData';
import Progress from '../../Components/progress';
import ScrollToNext from '../../Components/scrollToNext';

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
  10: 'Jazz2.mp3',
};

const FirstPage1 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // 음원 개수가 총 10개이므로 각 음원의 상태를 배열 형태로 다루어야함
  const audioRefs = useRef([]);

  const playMusic = async (audioName) => {
    try {
      if (!audioRefs.current[audioName].src) {
        const { data, error } = await supabase.storage
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
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Progress percentage={testData[1].completed} />
          </div>
          {[
            { id: 'Rock2', Component: RockBox, audio: 6 },
            { id: 'RB1', Component: RbBox, audio: 7 },
            { id: 'RB2', Component: RbBox, audio: 8 },
            { id: 'Jazz1', Component: JazzBox, audio: 9 },
            { id: 'Jazz2', Component: JazzBox, audio: 10 },
          ].map((item, index) => (
            <div
              key={item.id}
              className="num1"
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <img
                onClick={() => playMusic(item.audio)}
                src="./sound1.png"
                alt="Sound Icon"
              />
              <h3>
                <div className="q1">
                  {index + 6}번 사운드가 당신의 마음에 드나요?
                </div>
              </h3>
              <item.Component
                id={item.id}
                onNext={() => handleScrollToNext(index)}
              />
              <audio ref={(el) => (audioRefs.current[item.audio] = el)} />
            </div>
          ))}
          <NextButton
            to="/SecondPage"
            rockCount={1}
            jazzCount={2}
            RbCount={2}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default FirstPage1;
