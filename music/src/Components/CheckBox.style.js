// checkBox.styles.js
import styled from 'styled-components';


const CheckBoxCnt = styled.div`
    input[type=checkbox] {
        display: none;
    }

    input[type=checkbox] + label {
        display:block;
        position:relative;
        top: -15%;
        flex:1;
        display: inline-block;
        margin: 15px;
        text-align: center;
        border: 3px solid ${props => getBorderColor(props.num)};
        padding: 8px 8px;
        width: 40px;
        height: 40px;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 50%;
        transition: transform 0.5s ease-in, background-color 0.3s ease;

        @media screen and (min-width: 481px) and (max-width: 1024px) {
            width: 20px;
            height: 20px;
            font-size: 7px;
        }

        @media screen and (max-width: 481px) {
            width: 10px;
            height: 10px;
        }
    }

    input[type=checkbox]:checked + label {
        background-color: transparent;
        border: 3px solid ${props => getBorderColor(props.num)};
        padding: 8px 8px; 
        box-sizing: border-box;
        cursor: pointer;
        z-index: 1;
        width: 40px;
        height: 40px;
        transition: border-color 0.3s ease;

        @media screen and (min-width: 481px) and (max-width: 1024px) {
            width: 20px;
            height: 20px;
            font-size: 7px;
        }

        @media screen and (max-width: 481px) {
            width: 10px;
            height: 10px;
        }

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%; 
            height: 80%; 
            background-color: ${({ num }) => {
                switch (num) {
                    case 1:
                    case 2:
                        return 'rgb(237,107,125)';
                    case 4:
                    case 5:
                        return 'rgb(110,159,247)';
                    default:
                        return 'rgb(225, 231, 235)';
                }
            }};
            border-radius: 50%;
            transition: transform 0.3s ease, background-color 0.3s ease;
        }
        
    }
`;

const getBorderColor = (num) => {
    switch (num) {
        case 1:
        case 2:
            return 'rgb(237,107,125)'; // 빨간색 계열
        case 4:
        case 5:
            return 'rgb(110,159,247)'; // 파란색 계열
        default:
            return 'rgb(225, 231, 235)'; // 회색 계열 (기본값)
    }
};



export default CheckBoxCnt;
