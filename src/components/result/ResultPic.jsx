import React from 'react';
import styled from '@emotion/styled';
import { animalPic } from '../../constants/AnimalPic';

const ResultPic = ({ type }) => {
    const data = animalPic.filter(({ name }) => name === type)[0];

    return (
        <Container>
            <Image src={data.imageuri} alt={type} />
        </Container>
    );
};

const Container = styled.div`
    width: 270px;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0px 50px 0px;
`;

const Image = styled.img`
    width: 300px;
    height: 300px;
    object-fit: fill;
`;

export default ResultPic;