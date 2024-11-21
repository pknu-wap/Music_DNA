import React, { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

import CheckBoxCnt from './CheckBox.style';
import '../../App.css';

export const RockValueState = atom({
  key: 'Rock',
  default: {},
});

const RockBox = ({ id, onNext }) => {
  const [rockValues, setRockValueState] = useRecoilState(RockValueState);

  const checkOnlyOne = (num) => {
    setRockValueState((prevCheckedValues) => {
      const updatedValues = { ...prevCheckedValues, [id]: num };
      return updatedValues;
    });
    if (onNext) {
      onNext();
    }
  };

  useEffect(() => {
    const handleCheckboxChange = () => {
      console.log(id, rockValues[id]);
    };

    const checkboxElement = document.getElementById(`checkBoxCnt_${id}`);

    if (checkboxElement) {
      checkboxElement.addEventListener('change', handleCheckboxChange);
    }

    return () => {
      if (checkboxElement) {
        checkboxElement.removeEventListener('change', handleCheckboxChange);
      }
    };
  }, [rockValues, id]);

  const generateUniqueId = (name) => `${id}_${name}`;

  return (
    <CheckBoxCnt id={`checkBoxCnt_${id}`} num={rockValues[id]}>
      {[1, 2, 3, 4, 5].map((num) => (
        <React.Fragment key={num}>
          <input
            type="checkbox"
            id={generateUniqueId(`b${num}`)}
            name="checkWrap"
            value={num}
            checked={rockValues[id] === num}
            onChange={() => checkOnlyOne(num)}
          />
          <label htmlFor={generateUniqueId(`b${num}`)}>{num}</label>
        </React.Fragment>
      ))}
    </CheckBoxCnt>
  );
};

export default RockBox;
