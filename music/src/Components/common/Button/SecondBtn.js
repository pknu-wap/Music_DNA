import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { PopValueState } from '../../CheckBox/PopBox';
import { HipValueState } from '../../CheckBox/HipBox';
import { RockValueState } from '../../CheckBox/RockBox';
import { JazzValueState } from '../../CheckBox/JazzBox';
import { RbValueState } from '../../CheckBox/RbBox';
import './SecondBtn.css';

const NextButton = ({ to, ids = [], onCompleteButtonClick }) => {
  const [popValues] = useRecoilState(PopValueState);
  const [jazzValues] = useRecoilState(JazzValueState);
  const [hipValues] = useRecoilState(HipValueState);
  const [rockValues] = useRecoilState(RockValueState);
  const [rbValues] = useRecoilState(RbValueState);

  const isNextButtonDisabled = () => {
    return ids.some((id) => {
      if (id.includes('Pop')) {
        return popValues[id] === undefined;
      } else if (id.includes('Jazz')) {
        return jazzValues[id] === undefined;
      } else if (id.includes('Hip')) {
        return hipValues[id] === undefined;
      } else if (id.includes('Rock')) {
        return rockValues[id] === undefined;
      } else if (id.includes('RB')) {
        return rbValues[id] === undefined;
      }
      return false;
    });
  };

  return (
    <div className="SecondBtn">
      <Link to={to}>
        <button
          onClick={(e) => {
            if (isNextButtonDisabled()) {
              e.preventDefault();
              console.log('Not all checkboxes are checked');
            } else {
              if (onCompleteButtonClick) {
                onCompleteButtonClick();
              }
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
