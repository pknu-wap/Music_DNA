import React from 'react';
import { useState, useRef } from 'react';

import PopBox from '../../Components/CheckBox/PopBox';
import HipBox from '../../Components/CheckBox/HipBox';
import RockBox from '../../Components/CheckBox/RockBox';
import NextButton from '../../Components/common/Button/NextButton';

import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import Bar from '../../Components/common/Progress/Bar';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';
import audioPath from '../../constants/audioPath';

import './FirstPage.css';

const FirstPage = () => {
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
            <Bar percentage={GAUGE_PERCENTAGES[0].completed} />
          </div>
          {[
            { id: 'Pop1', Component: PopBox, audio: 1 },
            { id: 'Pop2', Component: PopBox, audio: 2 },
            { id: 'Hip1', Component: HipBox, audio: 3 },
            { id: 'Hip2', Component: HipBox, audio: 4 },
            { id: 'Rock1', Component: RockBox, audio: 5 },
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
                  {index + 1}번 사운드가 당신의 마음에 드나요?
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
            to="/FirstPage1"
            popCount={2}
            hipCount={2}
            rockCount={1}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default FirstPage;
