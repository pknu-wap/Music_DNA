import React from 'react';

import JazzBox from '../../Components/CheckBox/JazzBox';
import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import SecondBtn from '../../Components/common/Button/SecondBtn';
import Bar from '../../Components/common/Progress/Bar';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';

import './SecondPage.css';

const SecondPage1 = () => {
  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Bar percentage={GAUGE_PERCENTAGES[3].completed} />
          </div>
          {[
            {
              id: 'LatinJazz1',
              text: '석양이 지는 해변에서 차분한 선율에 맞춰 탱고춤을 추는 사람들. 이건 환상적인 바이브야.',
            },
            {
              id: 'SwingJazz1',
              text: '한손은 레드 와인, 한손은 너의 허리에. 따뜻한 분위기 속 앙상블에 몸을 맡긴 난 특별한 사람이 된 것만 같아.',
            },
            {
              id: 'SoulJazz1',
              text: '자욱히 어두운 바에 홀로 앉아 위스키 한 잔을 마시는 나. 흑인 보컬과 찐득한 리듬이 날 더 취하게 해.',
            },
            {
              id: 'FreeJazz1',
              text: '불협화음이든 박자가 달라지든 아티스트 감정에만 충실한 음악은 자유롭고 싶은 내 마음과 같아서 좋아!',
            },
            {
              id: 'BibobJazz1',
              text: '난 느긋하고 여유롭지 않아. 빠르고 복잡하고 다양한 리듬이 나의 인생과 비슷해.',
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
            to="/SecondPage2"
            ids={[
              'LatinJazz1',
              'SwingJazz1',
              'SoulJazz1',
              'FreeJazz1',
              'BibobJazz1',
            ]}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage1;
