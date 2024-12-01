import React from 'react';

import HipBox from '../../Components/CheckBox/HipBox';
import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import SecondBtn from '../../Components/common/Button/SecondBtn';
import Bar from '../../Components/common/Progress/Bar';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';

import './SecondPage.css';

const SecondPage2 = () => {
  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Bar percentage={GAUGE_PERCENTAGES[4].completed} />
          </div>
          {[
            {
              id: 'DrillHip1',
              text: '할렘가의 삶이 담긴 빡센 스토리와 하드한 비트는 내 피를 끓게 한다고!',
            },
            {
              id: 'TrapHip1',
              text: '재물과 여자에 대한 가사, 강한 808베이스는 아드레날린을 부스트 업!',
            },
            {
              id: 'AlterHip1',
              text: '룰 브레이커 마냥 자신만의 독창성을 조화롭게 조합하는 음악이 좋아.',
            },
            {
              id: 'RageHip1',
              text: '손에서 에네르기파가 나올 만한 공격적인 가사와 게임같은 사운드가 좋아.',
            },
            {
              id: 'BoomHip1',
              text: '카세트에 믹스테잎을 넣고서 스케이트보드를 타고 한적한 골목을 가로 질러가. 우리 동네 벽에는 그래피티가 가득하지.',
            },
          ].map((item, index) => (
            <div
              key={item.id}
              className="num2"
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <h3>{item.text}</h3>
              <HipBox id={item.id} onNext={() => handleScrollToNext(index)} />
            </div>
          ))}
          <SecondBtn
            to="/SecondPage3"
            ids={['DrillHip1', 'TrapHip1', 'AlterHip1', 'RageHip1', 'BoomHip1']}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage2;
