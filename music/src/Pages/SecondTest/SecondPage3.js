import React from 'react';

import RockBox from '../../Components/CheckBox/RockBox';
import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import SecondBtn from '../../Components/common/Button/SecondBtn';
import Bar from '../../Components/common/Progress/Bar';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';

import './SecondPage.css';

const SecondPage3 = () => {
  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Bar percentage={GAUGE_PERCENTAGES[5].completed} />
          </div>
          {[
            {
              id: 'ProRock1',
              text: '환상을 보는 듯한 실험적인 사운드. 상상 속에만 존재하는 공간에 있는 것 같아.',
            },
            {
              id: 'HeavyRock1',
              text: '강렬한 드럼 위에 중독적인 일렉기타 리프, 샤우팅 보컬은 억압된 세상에 명치를 때리는 느낌이야!',
            },
            {
              id: 'AlterRock1',
              text: '다양한 스타일을 조합하는 도전 정신. 정의할 수 없는 독특한 음악. 독창적인 스타일을 추구하는 나와 비슷해.',
            },
            {
              id: 'PunkRock1',
              text: '신나는 드럼과 무엇이든 스스로 만들겠다는(DIY) 정신을 깨우는 가사, 이런 음악은 오늘도 힘차게 전진하게 만들어.',
            },
            {
              id: 'ShowRock1',
              text: '꿈속에서 하늘을 헤엄치는 것만 같은 음악이 좋아.',
            },
          ].map((item, index) => (
            <div
              key={item.id}
              className="num2"
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <h3>{item.text}</h3>
              <RockBox id={item.id} onNext={() => handleScrollToNext(index)} />
            </div>
          ))}
          <SecondBtn
            to="/SecondPage4"
            ids={[
              'ProRock1',
              'HeavyRock1',
              'AlterRock1',
              'PunkRock1',
              'ShowRock1',
            ]}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage3;
