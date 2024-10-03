// checkBox.styles.js
import styled from 'styled-components';


const CheckBoxCnt = styled.div`
    input[type=checkbox] {
        display: none;
    }

    input[type=checkbox] + label {
        text-indent: -9999px;
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
            width: 30px;
            height: 30px;
            font-size: 7px;
        }

        @media screen and (max-width: 481px) {
            width: 10px;
            height: 10px;
        }
    }

    input[type=checkbox]:checked + label {
        text-indent: -9999px;
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
            width: 30px;
            height: 30px;
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
                        return  'rgb(110,159,247)';
                    case 4:
                    case 5:
                        return 'rgb(237,107,125)';
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
            return 'rgb(110,159,247)'; 
        case 4:
        case 5:
            return 'rgb(237,107,125)'; 
        default:
            return 'rgb(225, 231, 235)'; 
    }
};



export default CheckBoxCnt;
