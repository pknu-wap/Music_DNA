// checkBox.styles.js
import styled from 'styled-components';


const CheckBoxCnt = styled.div`
    input[type=checkbox] {
        display: none;
    }

    input[type=checkbox] + label {
        display:block;
        position:relative;
        top: -40%;
        flex:1;
        display: inline-block;
        margin: 15px;
        text-align: center;
        border: 1px solid #D6FF32;
        padding: 8px 8px;
        width: 40px;
        height: 40px;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 50%;
    }

    input[type=checkbox]:checked + label {
        background-image: none;
        background-color: ${({ num }) => {
            switch (num) {

                default:
                    return 'rgb(225, 231, 235)';
            }
        }};
        border: 1px solid #D6FF32;
        padding: 8px 8px;
        box-sizing: border-box;
        cursor: pointer;
        z-index: 1;
        width: 40px;
        height: 40px;
    }
`;


export default CheckBoxCnt;
