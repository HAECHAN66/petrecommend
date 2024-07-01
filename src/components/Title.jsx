import React from 'react';
import styled from '@emotion/styled';

const Title = () => {
    return (
        <Div>
            나와 <br />
            잘 맞는 <br />
            반려동물  <br />
            찾기
        </Div>
    );
};

const Div = styled.div `
    font-family: Moirai;
    font-size: 70px;
    text-align: left;
    margin-bottom: 70px;  
    line-height: 90px;
`;

export default Title;