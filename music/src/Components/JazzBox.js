import React from 'react';
import CheckBoxCnt from './CheckBox.style';
import '../App.css';
import { atom } from 'recoil';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

export const JazzValueState = atom({
  key: 'Jazz',
  default: {},
});

const JazzBox = ({ id }) => {
  const [jazzValues, setJazzValueState] = useRecoilState(JazzValueState);

  const checkOnlyOne = (num) => {
    setJazzValueState((prevCheckedValues) => {
      const updatedValues = { ...prevCheckedValues, [id]: num };
      return updatedValues;
    });
  };

  useEffect(() => {
    const handleCheckboxChange = () => {
      console.log(id, jazzValues[id]);
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
  }, [jazzValues, id]);

  const generateUniqueId = (name) => `${id}_${name}`;

  return (
    <CheckBoxCnt id={`checkBoxCnt_${id}`} num={jazzValues[id]}>
      {[1, 2, 3, 4, 5].map((num) => (
        <React.Fragment key={num}>
          <input
            type="checkbox"
            id={generateUniqueId(`b${num}`)}
            name="checkWrap"
            value={num}
            checked={jazzValues[id] === num}
            onChange={() => checkOnlyOne(num)}
          />
          <label htmlFor={generateUniqueId(`b${num}`)}>{num}</label>
        </React.Fragment>
      ))}
    </CheckBoxCnt>
  );
};

export default JazzBox;
