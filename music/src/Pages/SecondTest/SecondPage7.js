import React from 'react';

import RockBox from '../../Components/CheckBox/RockBox';
import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import SecondBtn from '../../Components/common/Button/SecondBtn';
import Bar from '../../Components/common/Progress/Bar';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';

import './SecondPage.css';

const SecondPage7 = () => {
  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Bar percentage={GAUGE_PERCENTAGES[9].completed} />
          </div>
          {[
            {
              id: 'ProRock2',
              text: '예상치 못한 음악적 요소와 긴 솔로 연주가 매력적이야.',
            },
            {
              id: 'HeavyRock2',
              text: '중독적인 기타 선율과 무대를 장악한 밴드 공연의 강렬한 열기에 몸을 흔들며 열광해.',
            },
            {
              id: 'AlterRock2',
              text: '독특한 기타 연주, 창의성이 도드라지는 음악이 진정한 예술이라고 생각해.',
            },
            {
              id: 'PunkRock2',
              text: '날티나는 기타 플레이, 반정부적인 가사는 염색머리에 찢어진 청바지를 입고 반항하던 학창시절이 떠올라.',
            },
            {
              id: 'ShowRock2',
              text: '뮤지션들이 환상에 잠긴 듯 발만 보고 기타를 치며 노래를 부르면 나 역시 환상속으로 빠지는 것 같아.',
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
            to="/SecondPage8"
            ids={[
              'ProRock2',
              'HeavyRock2',
              'AlterRock2',
              'PunkRock2',
              'ShowRock2',
            ]}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage7;
