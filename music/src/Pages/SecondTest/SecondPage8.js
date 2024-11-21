import React from 'react';

import RbBox from '../../Components/CheckBox/RbBox';
import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import SecondBtn from '../../Components/common/Button/SecondBtn';
import Bar from '../../Components/common/Progress/Bar';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';

import './SecondPage.css';

const SecondPage8 = () => {
  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Bar percentage={GAUGE_PERCENTAGES[10].completed} />
          </div>
          {[
            {
              id: 'NeoRB2',
              text: '많은 장르의 요소에 흑인의 소울을 합쳐 조화를 이루는 음악. 오늘 너와 나를 더 끈적하게 만들어줄 것 같아.',
            },
            {
              id: 'ComRB2',
              text: '대중적인 음악엔 꼭 흑인만의 바이브가 담겨야 한다고 생각해. 이런 조화가 날 트렌드세터로 만들어주는 것 같아.',
            },
            {
              id: 'PunkRB2',
              text: '드럼과 베이스의 끈적끈적한 리듬. 거기에 흑인 보컬의 찰진 멜로디. 마치 녹아내린 초콜릿 위에서 춤을 추고 싶어져!',
            },
            {
              id: 'SoulRB2',
              text: '과거 흑인 노동자들의 피와 땀, 영혼이 담긴 보컬 멜로디를 듣고 있으면 눈물이 나올 것 같아.',
            },
            {
              id: 'AlterRB2',
              text: '단정 지을 수 없는 아티스트만의 스타일이 담긴 음악. 자신만의 색깔이 뚜렷한 이 음악에 더 공감이 생겨.',
            },
          ].map((item, index) => (
            <div
              key={item.id}
              className="num2"
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <h3>{item.text}</h3>
              <RbBox id={item.id} onNext={() => handleScrollToNext(index)} />
            </div>
          ))}
          <SecondBtn
            to="/SecondPage9"
            ids={['NeoRB2', 'ComRB2', 'PunkRB2', 'SoulRB2', 'AlterRB2']}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage8;
