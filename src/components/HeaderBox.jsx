import React from 'react';
import styled from '@emotion/styled';

const HeaderBox = () => {
    return (
        <Div>
            당신에게 어울리는 반려동물은 ...
        </Div>
    );
};

const Div = styled.div `
    width: 305px;
    height: 69px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--white-bg);
    border-radius: 20px;
    margin: 20px;
    margin-top: 60px;
    
    font-family: noto;
`;

export default HeaderBox;