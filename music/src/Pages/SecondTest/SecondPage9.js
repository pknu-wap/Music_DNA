import React from 'react';
import { useRecoilValue } from 'recoil';

import RbBox from '../../Components/CheckBox/RbBox';
import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import { PopValueState } from '../../Components/CheckBox/PopBox';
import { HipValueState } from '../../Components/CheckBox/HipBox';
import { JazzValueState } from '../../Components/CheckBox/JazzBox';
import { RbValueState } from '../../Components/CheckBox/RbBox';
import { RockValueState } from '../../Components/CheckBox/RockBox';

import Bar from '../../Components/common/Progress/Bar';
import SecondBtn from '../../Components/common/Button/SecondBtn';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';

import './SecondPage.css';

const SecondPage9 = () => {
  const PopCheckValue = useRecoilValue(PopValueState);
  const HipCheckValue = useRecoilValue(HipValueState);
  const JazzCheckValue = useRecoilValue(JazzValueState);
  const RbCheckValue = useRecoilValue(RbValueState);
  const RockCheckValue = useRecoilValue(RockValueState);

  const PopTotal = Object.values(PopCheckValue).reduce(
    (sum, value) => sum + value,
    0,
  );
  const HipTotal = Object.values(HipCheckValue).reduce(
    (sum, value) => sum + value,
    0,
  );
  const JazzTotal = Object.values(JazzCheckValue).reduce(
    (sum, value) => sum + value,
    0,
  );
  const RbTotal = Object.values(RbCheckValue).reduce(
    (sum, value) => sum + value,
    0,
  );
  const RockTotal = Object.values(RockCheckValue).reduce(
    (sum, value) => sum + value,
    0,
  );

  const AllTotal = {
    Pop: PopTotal,
    Hip: HipTotal,
    Jazz: JazzTotal,
    Rb: RbTotal,
    Rock: RockTotal,
  };

  const Result = Object.keys(AllTotal).reduce((max, genre) => {
    return AllTotal[genre] > AllTotal[max] ? genre : max;
  }, 'Pop');

  // 최대값
  const maxTotal = AllTotal[favoriteGenre];

  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Bar percentage={GAUGE_PERCENTAGES[11].completed} />
          </div>
          {[
            {
              id: 'NeoRB1',
              text: '사회 참여적이고도 끈적한 사랑이 담긴 가사, 고요하고 그루비한 흑인보컬. 오우.. 이런 음악엔 위스키 한 잔이 딱이야.',
            },
            {
              id: 'ComRB1',
              text: '트랜디한 장르의 보컬 소울과 그루브가 결합된 음악은 미간을 찡그리며 빠져들게 만들어.',
            },
            {
              id: 'PunkRB1',
              text: '흑인 보컬의 소울과 재지한 드럼. 센스있는 베이스의 그루브는 나를 춤추게 만들지 I Feel Good~',
            },
            {
              id: 'SoulRB1',
              text: '흑인 민권운동을 기반으로 그들의 한이 담긴 음악. 이들 보컬의 하모니를 들으면 그 시대가 눈 앞에 떠올라.',
            },
            {
              id: 'AlterRB1',
              text: '다양한 사운드 위에 자신의 복잡한 감정을 창의적으로 표현한 소울이 담긴 음악. 이게 예술이지.',
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
              ids={['NeoRB1', 'ComRB1', 'PunkRB1', 'SoulRB1', 'AlterRB1']}
            />
          </div>
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage9;
