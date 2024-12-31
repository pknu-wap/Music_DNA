import React from 'react';

import RbBox from '../../Components/CheckBox/RbBox';
import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import SecondBtn from '../../Components/common/Button/SecondBtn';
import Bar from '../../Components/common/Progress/Bar';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';

import './SecondPage.css';

const SecondPage4 = () => {
  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Bar percentage={GAUGE_PERCENTAGES[6].completed} />
          </div>
          {[
            {
              id: 'NeoRB2',
              text: '여러 장르의 요소에 흑인 소울이 조화를 이루는 음악. 그 끈적임속에 너와 함께 빠져드는 느낌이야.',
            },
            {
              id: 'ComRB2',
              text: '대중적인 음악에는 흑인들의 바이브가 담겨야 한다고 생각해. 이런 조화가 날 트랜드 섀터로 만들어 줄 것 같거든.',
            },
            {
              id: 'PunkRB2',
              text: '드럼과 베이스의 끈적이는 리듬과 흑인 보컬의 찰진 멜로디는 녹아내린 초콜릿 위에서 춤을 추고 싶게 해.',
            },
            {
              id: 'SoulRB2',
              text: '과거 흑인들의 피와 땀, 영혼이 녹아든 보컬 멜로디에 눈물이 날 것 같아.',
            },
            {
              id: 'AlterRB2',
              text: '아티스트만의 뚜렷하고 독창적 스타일이 담긴 음악에 더욱 공감이 생겨.',
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
          <div className="secondButton">
            <SecondBtn
              to="/SecondPage5"
              ids={['NeoRB2', 'ComRB2', 'PunkRB2', 'SoulRB2', 'AlterRB2']}
            />
          </div>
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage4;
