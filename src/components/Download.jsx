import React from 'react';
import styled from '@emotion/styled/macro';

const DownloadButton = () => {
    return (
        <Button>
            코펫 다운로드
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
`;

export default DownloadButton;