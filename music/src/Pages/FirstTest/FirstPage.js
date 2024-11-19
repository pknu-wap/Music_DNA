import React from 'react';
import { useState, useRef } from 'react';
import { supabase } from '../../supabaseClient';

import PopBox from '../../Components/PopBox';
import HipBox from '../../Components/HipBox';
import RockBox from '../../Components/RockBox';
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
const FirstPage = () => {
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
  };

  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Progress percentage={testData[0].completed} />
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
                src="./sound1.png"
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
