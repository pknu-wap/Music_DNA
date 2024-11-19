import React from 'react';

import HipBox from '../../Components/HipBox';
import testData from '../../Components/testData';
import SecondBtn from './Button/SecondBtn';
import Progress from '../../Components/progress';
import ScrollToNext from '../../Components/scrollToNext';

import './SecondPage.css';

const SecondPage6 = () => {
  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Progress percentage={testData[8].completed} />
          </div>
          {[
            {
              id: 'DrillHip2',
              text: '거친 사운드와 야만적인 가사들은 잠재되어 있는 나의 야성을 잠시 깨워줘.',
            },
            {
              id: 'TrapHip2',
              text: '스포츠카의 시동을 건 듯한 808 베이스! 어두운 도시 속 대교 위를 달리는 듯한 비트는 날 섹시하게 만들어줘.',
            },
            {
              id: 'AlterHip2',
              text: '규칙을 무시한 채 많은 장르를 혼합하여, 독창적인 사운드로 조화롭게 랩하는 아티스트가 매력적이야.',
            },
            {
              id: 'RageHip2',
              text: '에너지가 느껴지는 전자 사운드와 분노로 행진하는 듯한 랩은 내 가슴을 뻥 뚫리게 해줘.',
            },
            {
              id: 'BoomHip2',
              text: '그루브를 타며 박자를 가지고 노는 랩에 집중하다 보면 골목벽에 그려진 그래피티 그림들이 떠올라.',
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
            to="/SecondPage7"
            ids={['DrillHip2', 'TrapHip2', 'AlterHip2', 'RageHip2', 'BoomHip2']}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage6;
