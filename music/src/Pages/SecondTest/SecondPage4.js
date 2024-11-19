import React from 'react';

import PopBox from '../../Components/PopBox';
import testData from '../../Components/testData';
import SecondBtn from './Button/SecondBtn';
import Progress from '../../Components/progress';
import ScrollToNext from '../../Components/scrollToNext';

import './SecondPage.css';

const SecondPage4 = () => {
  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Progress percentage={testData[6].completed} />
          </div>
          {[
            {
              id: 'DancePop2',
              text: '긍정적인 에너지를 뿜어내는 업템포 음악과 중독성이 강한 멜로디는 내 어깨를 들썩이게 해!',
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
              text: '나만 알고 싶은 아티스트가 콘서트를 열었어. 감성적인 멜로디와 차분한 선율. 이게 나의 안정제지.',
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
          <SecondBtn
            to="/SecondPage5"
            ids={['DancePop2', 'ElecPop2', 'BritPop2', 'IndiPop2', 'LatinPop2']}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage4;
