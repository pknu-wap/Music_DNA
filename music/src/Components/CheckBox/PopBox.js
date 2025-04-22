import React, { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

import CheckBoxCnt from './CheckBox.style';
import '../../App.css';

export const PopValueState = atom({
  key: 'Pop',
  default: {},
});

const PopBox = ({ id, onNext }) => {
  const [popValues, setPopValueState] = useRecoilState(PopValueState);

  const checkOnlyOne = (num) => {
    setPopValueState((prevCheckedValues) => {
      const updatedValues = { ...prevCheckedValues, [id]: num };
      return updatedValues;
    });
    if (onNext) {
      onNext();
    }
  };

  const generateUniqueId = (name) => `${id}_${name}`;

  return (
    <CheckBoxCnt id={`checkBoxCnt_${id}`} num={popValues[id]}>
      {[1, 2, 3, 4, 5].map((num) => (
        <React.Fragment key={num}>
          <input
            type="checkbox"
            id={generateUniqueId(`b${num}`)}
            name="checkWrap"
            value={num}
            checked={popValues[id] === num}
            onChange={() => checkOnlyOne(num)}
          />
          <label htmlFor={generateUniqueId(`b${num}`)}>{num}</label>
        </React.Fragment>
      ))}
    </CheckBoxCnt>
  );
};

export default PopBox;
