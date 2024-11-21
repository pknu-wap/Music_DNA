import React from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

import { PopValueState } from '../../CheckBox/PopBox';
import { RockValueState } from '../../CheckBox/RockBox';
import { HipValueState } from '../../CheckBox/HipBox';
import { JazzValueState } from '../../CheckBox/JazzBox';
import { RbValueState } from '../../CheckBox/RbBox';

import '../../../Pages/FirstTest/FirstPage';
import './NextButton.css';

const NextButton = ({
  to,
  popCount = 0,
  hipCount = 0,
  rockCount = 0,
  jazzCount = 0,
  RbCount = 0,
}) => {
  const [popValues] = useRecoilState(PopValueState);
  const [hipValues] = useRecoilState(HipValueState);
  const [rockValues] = useRecoilState(RockValueState);
  const [jazzValues] = useRecoilState(JazzValueState);
  const [RbValues] = useRecoilState(RbValueState);

  const isNextButtonDisabled = () => {
    const popCheck =
      popCount === 0 ||
      Array.from({ length: popCount }, (_, i) => i + 1).every(
        (num) => popValues[`Pop${num}`] !== undefined,
      );
    const hipCheck =
      hipCount === 0 ||
      Array.from({ length: hipCount }, (_, i) => i + 1).every(
        (num) => hipValues[`Hip${num}`] !== undefined,
      );
    const rockCheck =
      rockCount === 0 ||
      Array.from({ length: rockCount }, (_, i) => i + 1).every(
        (num) => rockValues[`Rock${num}`] !== undefined,
      );
    const jazzCheck =
      jazzCount === 0 ||
      Array.from({ length: jazzCount }, (_, i) => i + 1).every(
        (num) => jazzValues[`Jazz${num}`] !== undefined,
      );
    const rbCheck =
      RbCount === 0 ||
      Array.from({ length: RbCount }, (_, i) => i + 1).every(
        (num) => RbValues[`RB${num}`] !== undefined,
      );

    return !(popCheck && hipCheck && rockCheck && jazzCheck && rbCheck);
  };

  return (
    <div className="nextPage">
      <Link to={to}>
        <button
          onClick={(e) => {
            if (isNextButtonDisabled()) {
              e.preventDefault();
              console.log(isNextButtonDisabled());
            }
          }}
        >
          다음으로
        </button>
      </Link>
    </div>
  );
};

export default NextButton;
