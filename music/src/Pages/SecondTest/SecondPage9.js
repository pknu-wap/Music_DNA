import React from 'react';
import { supabase } from '../../supabaseClient';

import RbBox from '../../Components/RbBox';
import testData from '../../Components/testData';
import { PopValueState } from '../../Components/PopBox';
import { HipValueState } from '../../Components/HipBox';
import { JazzValueState } from '../../Components/JazzBox';
import { RbValueState } from '../../Components/RbBox';
import { RockValueState } from '../../Components/RockBox';
import { useRecoilValue } from 'recoil';

import Progress from '../../Components/progress';
import SecondBtn from './Button/SecondBtn';
import ScrollToNext from '../../Components/scrollToNext';

import './SecondPage.css';

function combineKeysValues(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const combined = {};

  for (let i = 0; i < keys.length; i++) {
    combined[keys[i]] = values[i];
  }

  return combined;
}

const SecondPage9 = () => {
  const PopCheckValue = useRecoilValue(PopValueState);
  const HipCheckValue = useRecoilValue(HipValueState);
  const JazzCheckValue = useRecoilValue(JazzValueState);
  const RbCheckValue = useRecoilValue(RbValueState);
  const RockCheckValue = useRecoilValue(RockValueState);

  // 각 장르당 합 구하기
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

  // 장르당 총 합
  const AllTotal = {
    Pop: PopTotal,
    Hip: HipTotal,
    Jazz: JazzTotal,
    Rb: RbTotal,
    Rock: RockTotal,
  };

  // 최대값 가진 장르
  const Result = Object.keys(AllTotal).reduce((max, genre) => {
    return AllTotal[genre] > AllTotal[max] ? genre : max;
  }, 'Pop');

  // 최대값
  const maxTotal = AllTotal[Result];

  async function getUserInfo(Result) {
    let { data, error } = await supabase.from('new_song').select(Result);

    if (error) {
      console.log('error: ', error);
      return null;
    }

    return data;
  }

  const completeButton = () => {
    console.log('결과 :', Result);
    console.log('장르 :', maxTotal);
    getUserInfo(Result).then((userInfo) => {
      if (userInfo) {
        console.log(userInfo);
      } else {
        // 에러 처리
        console.log('fail');
      }
    });
  };

  return (
    <ScrollToNext>
      {({ sectionRefs, handleScrollToNext }) => (
        <div className="firstPage">
          <div className="progress">
            <Progress percentage={testData[11].completed} />
          </div>
          {[
            {
              id: 'NeoRB1',
              text: '끈적한 사랑과 사회참여적인 흑인들의 가사, 고요하고 그루비한 보컬. 오우.. 이런 노래엔 위스키 한 잔이 딱이야.',
            },
            {
              id: 'ComRB1',
              text: '트렌디한 장르와 보컬의 소울과 그루브가 결합된 음악은 나의 미간을 찡그리게 만들지.',
            },
            {
              id: 'PunkRB1',
              text: '흑인 보컬의 소울과 재지한 드럼. 센스있는 베이스의 그루브는 나를 춤추게 만들지 I Feel Good~',
            },
            {
              id: 'SoulRB1',
              text: '흑인민권 운동을 기반으로 흑인의 한이 담긴 음악. 흑인 보컬끼리 하모니를 만들 때 그 시대가 입체적으로 떠올라.',
            },
            {
              id: 'AlterRB1',
              text: '창의성을 펼쳐내 자신의 복잡한 감정을 다양한 사운드로 표현하는 소울이 담긴 음악. 이게 예술이지.',
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
            to={`/${Result}`}
            ids={['NeoRB1', 'ComRB1', 'PunkRB1', 'SoulRB1', 'AlterRB1']}
            onCompleteButtonClick={completeButton}
          />
        </div>
      )}
    </ScrollToNext>
  );
};

export default SecondPage9;
