import styled from "styled-components";
import Art from "../art/Art";
import { useEffect, useState } from "react";
import React, { useContext } from 'react';
import { PageContext } from '../../PageProvider';

const StyledOverlay = styled.div`
    position: absolute;
    display: none;
    top: 0;
    left: 0;    
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: var(--color-background-black-transparent);
    font-size: var(--fs-heading-1);
    font-weight: var(--fw-medium);
    color: var(--color-black);
    align-items: center;
    justify-content: center;
`;

const Figure = styled.figure`

`;

const Image = styled.img`
    max-height: 60vh;
    height: 100%;
    border: .2rem solid var(--color-light-gray);
    border-radius: 1.2rem;
`;

const Container = styled.div`

`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
`;

const Title = styled.h2`
    color: var(--color-light-gray);
`;

const Button = styled.button`
    color: var(--color-light-gray);
    border: none;
    background-color: transparent;
    font-size: var(--fs-heading-2);
    font-weight: var(--fw-bold);

    &:hover {
        cursor: pointer;
    }
`;


export const Overlay = () => {
    const { image, setImage, title, setT } = useContext(PageContext);

    const openOverlay = () => {
        document.getElementById("overlay").style.display = "flex";
    }

    const handleClick = () => {
        document.getElementById("overlay").style.display = "none";
        setImage("");
    }

    useEffect(() => {
        if (!image) return;
        openOverlay();
    }, [image]);

    return (
        <StyledOverlay id="overlay">
            <Container>
                <Header>
                    <Title>{title}</Title>
                    <Button onClick={handleClick}>X</Button>
                </Header>
                <Figure>
                    <Image src={image} />          
                </Figure>
            </Container>
        </StyledOverlay> 
    )
};

export default Overlay;