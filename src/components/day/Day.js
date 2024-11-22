import { styled, keyframes } from "styled-components";
import Carousel from 'react-multi-carousel';
import Art from "../art/Art";
import React, { useEffect, useRef } from 'react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledDay = styled.div`
  width: 100%;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-bottom: 5rem;
  animation: ${fadeIn} 1s ease-in-out;
  ${props => props.$delay && `
    animation-delay: ${props.$delay * 100}ms;
    animation-fill-mode: forwards;
`}
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  gap: 20rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 12%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(to right, black, transparent);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 12%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(to left, black, transparent);
  }
`;

const DayTitle = styled.h2`
  margin: 2rem 0;
`;

const ButtonGroup = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  z-index: 2;
  pointer-events: none;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 8rem;
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.5);
  pointer-events: auto;
  border: .2rem solid var(--color-light-gray);
  border-radius: 50%;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 1rem;
  z-index: 2;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
`;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const Day = ({ title, images, index, ...props }) => {
  const tagRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.pageYOffset;
      const pageBottom = pageTop + window.innerHeight;

      tagRefs.current.forEach(tagRef => {
        const tag = tagRef.current;
        if (tag.offsetTop < pageBottom) {
          tag.classList.add('visible');
        } else {
          tag.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const CustomButtonGroup = ({ next, previous }) => (
    <ButtonGroup>
      <Button onClick={previous}>&#129032;</Button>
      <Button onClick={next}>&#129034;</Button>
    </ButtonGroup>
  );

  return (
    <StyledDay $delay={index}>
      <DayTitle>{title}</DayTitle>
      <StyledCarousel
        centerMode={true}
        responsive={responsive}
        infinite={true}
        draggable={false}
        ssr={true}
        keyBoardControl={true}
        arrows={false}
        customButtonGroup={<CustomButtonGroup />}
      >
        {images.map((image, index) => (
          <Art
            key={index}
            title={image.title}
            src={image.source}
            {...props}
          />
        ))}
      </StyledCarousel>
    </StyledDay>
  );
};

export default Day;

