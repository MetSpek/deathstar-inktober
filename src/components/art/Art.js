import styled from "styled-components";
import React, { useContext } from 'react';
import { PageContext } from '../../PageProvider';

const Overlay = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: var(--color-background-gray-transparent);
    font-size: var(--fs-heading-1);
    font-weight: var(--fw-medium);
    color: var(--color-black);
    align-items: center;
    justify-content: center;
`;

const PlaceHolder = styled.h3`
    color: var(--color-black);
`;  

const Figure = styled.figure`
    width: 100%;
    height: 100%;
    border-radius: 1.2rem;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StyledArt = styled.div`
    position: relative;
    display: flex;
    width: 300px;
    height: 300px;
    border: .2rem solid var(--color-light-gray);
    align-items: center;
    justify-content: center;
    border-radius: 1.2rem;
    padding: .5rem;
    transition: .3s ease-in-out;

    &:hover {
        cursor: pointer;
        padding: 0rem;
    }

    &:hover ${Overlay} {
        display: flex;
    } 
`;


export const Art = ({title,src, ...props}) => {
    const { setImage, setTitle } = useContext(PageContext);
    const name = title.split('.')[0];

    const handleClick = () => {
        setImage(src);
        setTitle(name);
    }

    return (
        <StyledArt onClick={handleClick}>
            { !src && <PlaceHolder>ART</PlaceHolder> }
            <Overlay>
                {/* {src && name.toUpperCase()} */}
            </Overlay>
            <Figure>
                <Image src={src} />
            </Figure>
           
        </StyledArt>
    );
};

export default Art;
