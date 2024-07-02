import React from 'react';
import styled from '@emotion/styled';
import Main from '../../images/main.png';

const Character = () => {
    return (
        <Container>
            <img src={Main} alt=' ' className='slide-top'/>
        </Container>
    );
};

const Container = styled.div `
    width: 320px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* 이미지 비율 유지를 위해 */
    }

    .slide-top {
	-webkit-animation: slide-top 600ms linear 0.5s both;
	        animation: slide-top 600ms linear 0.5s both;

        
        @-webkit-keyframes slide-top {
        0% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-130px);
                    transform: translateY(-130px);
        }
        }
        @keyframes slide-top {
        0% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-130px);
                    transform: translateY(-130px);
        }
        }
}


`;



export default Character;