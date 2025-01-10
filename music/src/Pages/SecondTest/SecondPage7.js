import React from 'react';

import HipBox from '../../Components/CheckBox/HipBox';
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
              id: 'DrillHip2',
              text: '거친 사운드와 야만적인 가사는 잠재된 나의 야성을 깨워.',
            },
            {
              id: 'TrapHip2',
              text: '시동걸린 스포츠카를 연상케하는 808베이스, 어두운 도시 속 대교를 질주하는 듯한 비트는 날 섹시하게 만들어.',
            },
            {
              id: 'AlterHip2',
              text: '규칙에 얽메임 없이 여러 장르를 혼합한 독창적인 사운드로 랩하는 아티스트가 매력적이야.',
            },
            {
              id: 'RageHip2',
              text: '에너지가 넘치는 전자 사운드와 거침없이 행진하는 랩에 내 가슴이 뻥 뚫려.',
            },
            {
              id: 'BoomHip2',
              text: '그루브를 타며 박자를 가지고 노는 랩에 집중하면 그래비티 그림이 그려진 골목의 벽화가 떠올라.',
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
          <div className="secondButton">
            <SecondBtn
              to="/SecondPage8"
              ids={[
                'DrillHip2',
                'TrapHip2',
                'AlterHip2',
                'RageHip2',
                'BoomHip2',
              ]}
            />
          </div>
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage7;
