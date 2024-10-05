import styled,{keyframes} from 'styled-components';

const Progress = ({percentage = 0}) => {

  return (
    <ProgressBar>
      <Gauge percentage={percentage}>
        <Label>{percentage}%</Label>
      </Gauge>
    </ProgressBar>
  )
};

export default Progress;

const fillAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${({ percentage }) => `${percentage}%`};
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;


  @media screen and (min-width: 481px) and (max-width: 1024px) {
    margin-right: 20%;
  }

  @media screen and (max-width: 481px) {
    margin-right: 30%;
  }
`;

export const Gauge = styled.div`
  height: 100%;
  background: linear-gradient(90deg, white, #D6FF32);
  border-radius: 15px;
  width: ${({ percentage }) => `${percentage}%`};
  animation: ${fillAnimation} 1s ease-out forwards;
  display: flex;                
  justify-content: flex-end;     
  align-items: center;       
  padding-right: 5px;     
`;

export const Label = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #333; 
  z-index: 1;

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 10px;
  }

  @media screen and (max-width: 481px) {
    font-size: 8px;
  }
`;