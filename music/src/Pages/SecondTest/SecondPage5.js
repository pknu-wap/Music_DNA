import React from 'react';

import JazzBox from '../../Components/CheckBox/JazzBox';
import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import SecondBtn from '../../Components/common/Button/SecondBtn';
import Bar from '../../Components/common/Progress/Bar';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';

import './SecondPage.css';

const SecondPage5 = () => {
  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Bar percentage={GAUGE_PERCENTAGES[7].completed} />
          </div>
          {[
            {
              id: 'LatinJazz2',
              text: '모래알들이 부딪히는 듯한 리듬과 따스한 멜로디. 스페인 바다가 훤히 보이는 브런치 카페에 와 있는 것 같아.',
            },
            {
              id: 'SwingJazz2',
              text: '구둣발로 리듬을 타며 네 손을 잡고 춤추고 싶어, 아름다운 노을아래서.',
            },
            {
              id: 'SoulJazz2',
              text: '흑인 뮤지션의 건반 터치는 마치 내 영혼을 어루만지는 것 같아.',
            },
            {
              id: 'FreeJazz2',
              text: '규칙에 얽메이지 않고 즉흥적으로 표현하는 음악을 들으면 나 역시 자유롭게 감정을 표현하고 싶어져.',
            },
            {
              id: 'BibobJazz2',
              text: '즉흥적으로 합을 맞추는 뮤지션들의 모습에서 섹시함이 느껴져.',
            },
          ].map((item, index) => (
            <div
              key={item.id}
              className="num2"
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <h3>{item.text}</h3>
              <JazzBox id={item.id} onNext={() => handleScrollToNext(index)} />
            </div>
          ))}
          <SecondBtn
            to="/SecondPage6"
            ids={[
              'LatinJazz2',
              'SwingJazz2',
              'SoulJazz2',
              'FreeJazz2',
              'BibobJazz2',
            ]}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage5;
