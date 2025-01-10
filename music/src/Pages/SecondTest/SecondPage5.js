import React from 'react';

import PopBox from '../../Components/CheckBox/PopBox';
import { GAUGE_PERCENTAGES } from '../../constants/gaugePercentages';
import SecondBtn from '../../Components/common/Button/SecondBtn';
import Bar from '../../Components/common/Progress/Bar';
import ScrollToNext from '../../Components/ScrollToNext/scrollToNext';

import './SecondPage.css';

const SecondPage5 = () => {
  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Bar percentage={GAUGE_PERCENTAGES[7].completed} />
          </div>
          {[
            {
              id: 'DancePop2',
              text: '긍정 에너지를 분출하는 업템포 음악과 중독성이 강한 멜로디는 내 어깨를 들썩이게 해!',
            },
            {
              id: 'ElecPop2',
              text: '전자 악기와 디지털 사운드의 조화! 마치 다채로운 레이저쇼 현장에 온 기분이야!',
            },
            {
              id: 'BritPop2',
              text: '내가 덕질하는 최애 아이돌 음악은 내 삶의 원동력! 굿즈 소장은 필수 중 필수 아니겠어?',
            },
            {
              id: 'IndiPop2',
              text: '혼자만 알고 싶었던 아티스트의 콘서트, 그 곳의 감성적 멜로디와 차분한 선율은 나에게 안정제와 같아.',
            },
            {
              id: 'LatinPop2',
              text: '스페인어만의 특유한 어감과 레게톤의 음악! 마치 해변에서 개최한 뮤직 페스티벌에 와 있는 것 같아.',
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
          <div className="secondButton">
            <SecondBtn
              to="/SecondPage6"
              ids={[
                'DancePop2',
                'ElecPop2',
                'BritPop2',
                'IndiPop2',
                'LatinPop2',
              ]}
            />
          </div>
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage5;
