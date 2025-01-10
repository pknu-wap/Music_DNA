import { useRecoilValue } from 'recoil';
import { PopValueState } from '../Components/CheckBox/PopBox';
import { HipValueState } from '../Components/CheckBox/HipBox';
import { JazzValueState } from '../Components/CheckBox/JazzBox';
import { RbValueState } from '../Components/CheckBox/RbBox';
import { RockValueState } from '../Components/CheckBox/RockBox';

export const useFavoriteGenre = () => {
  const PopCheckValue = useRecoilValue(PopValueState);
  const HipCheckValue = useRecoilValue(HipValueState);
  const JazzCheckValue = useRecoilValue(JazzValueState);
  const RbCheckValue = useRecoilValue(RbValueState);
  const RockCheckValue = useRecoilValue(RockValueState);

  const calculateTotal = (genreValues) =>
    Object.values(genreValues).reduce((sum, value) => sum + value, 0);

  const PopTotal = calculateTotal(PopCheckValue);
  const HipTotal = calculateTotal(HipCheckValue);
  const JazzTotal = calculateTotal(JazzCheckValue);
  const RbTotal = calculateTotal(RbCheckValue);
  const RockTotal = calculateTotal(RockCheckValue);

  const AllTotal = {
    Pop: PopTotal,
    Hip: HipTotal,
    Jazz: JazzTotal,
    Rb: RbTotal,
    Rock: RockTotal,
  };

  const favoriteGenre = Object.keys(AllTotal).reduce((max, genre) => {
    return AllTotal[genre] > AllTotal[max] ? genre : max;
  }, 'Pop');

  return favoriteGenre;
};
