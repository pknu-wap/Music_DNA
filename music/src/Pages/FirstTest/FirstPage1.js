import React from 'react';
import { useState, useRef } from 'react';

import RockBox from '../../Components/CheckBox/RockBox';
import RbBox from '../../Components/CheckBox/RbBox';
import JazzBox from '../../Components/CheckBox/JazzBox';
import NextButton from '../../Components/common/Button/NextButton';

import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import Bar from '../../Components/common/Progress/Bar';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';
import audioPath from '../../constants/audioPath';

import './FirstPage.css';

const FirstPage1 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRefs = useRef([]);

  const playMusic = async (audioName) => {
    try {
      if (!audioRefs.current[audioName].src) {
        const audioSrc = audioPath[audioName];
        const audioRef = audioRefs.current[audioName];

        if (audioRef && !audioRef.src) {
          audioRef.src = audioSrc;
        }
      }

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
            <Bar percentage={GAUGE_PERCENTAGES[1].completed} />
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
                src="sound.webp"
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

          <div className="nextButton">
            <NextButton
              to="/SecondPage"
              popCount={2}
              hipCount={2}
              rockCount={1}
            />
          </div>
        </div>
      )}
    </ScrollToNext>
  );
};

export default FirstPage1;
