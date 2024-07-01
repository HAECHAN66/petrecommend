import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Reload } from '../images/reload.svg';

const ReloadButton = ({ onClick }) => {
    return (
        <Button onClick ={onClick}>
            <Reload /> 다시하기
        </Button>
    );
};

const Button = styled.button `
width: 250px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;

background-color: var(--white-bg);
border-radius: 20px;
border-color: var(--white-bg);
margin: 10px;

font-family: noto;
font-size: 18px;  

gap: 10px;
`;

export default ReloadButton;