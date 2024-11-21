import React from 'react';

import PopBox from '../../Components/CheckBox/PopBox';
import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import SecondBtn from '../../Components/common/Button/SecondBtn';
import Bar from '../../Components/common/Progress/Bar';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';

import './SecondPage.css';

const SecondPage = () => {
  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Bar percentage={GAUGE_PERCENTAGES[2].completed} />
          </div>
          {[
            {
              id: 'DancePop1',
              text: '쿵! 짝! 쿵! 짝! 내 발걸음 같은 비트와 에너지 넘치는 보컬! 이런 음악은 역동적이고 강렬한 춤을 추게 만들어.',
            },
            {
              id: 'ElecPop1',
              text: '고음질의 다양한 전자사운드! 마치 네온빛이 가득한 사이버펑크 세상에 온것 같아.',
            },
            {
              id: 'BritPop1',
              text: '어디를 가나 익숙하게 들려오는 대한민국의 대중가요가 최고라고 생각해.',
            },
            {
              id: 'IndiPop1',
              text: '틀에서 벗어나 아티스트만의 예술적 발상이 느껴지는 다채로운 음악이 좋아.',
            },
            {
              id: 'LatinPop1',
              text: '멕시코, 스페인 클럽에서 나올듯한 특유의 리틈과 타악기 소리가 나를 삼바춤을 추게해.',
            },
          ].map((item, index) => (
            <div
              key={item.id}
              className="num2"
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <h3>{item.text}</h3>
              <PopBox id={item.id} onNext={() => handleScrollToNext(index)} />
            </div>
          ))}
          <SecondBtn
            to="/SecondPage1"
            ids={['DancePop1', 'ElecPop1', 'BritPop1', 'IndiPop1', 'LatinPop1']}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage;
