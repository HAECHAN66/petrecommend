import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Next } from '../images/next.svg';

const NextButton = ({ onClick }) => {
    return (
        <Button onClick={onClick} >
            <Next />
        </Button>
    );
};

const Button = styled.button `
    background-color: rgba(0, 0, 0, 0);
    border: none;
    margin-left: 65%;
`;

export default NextButton;