import styled from "styled-components";
import React, { useContext } from 'react';
import { PageContext } from '../../PageProvider';
import Logo from "../../icons/Logo.png";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopBar = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--color-black);
    width: 100%;
    height: 7.5rem;
`;

const Menu = styled.nav`
    display: flex;
    align-items: flex-end;
    gap: 1.4rem;
    width: 50%;
    height: 5.6rem;
    padding-top: 5rem;
    padding-bottom: 1.5rem;
    line-height: 1;
    justify-content: center;
    background-color: var(--color-black);
    border-radius: 0 0 2rem 2rem;
`;

const Link = styled.a`
    font-size: var(--fs-heading-3);
    ${props => props.$active && `
        font-size: var(--fs-heading-2);
        font-weight: var(--fw-bold);
    `}
`;

const Image = styled.img`
    height: 100%;
`;

export const Header = () => {
    const { year, setYear } = useContext(PageContext);

    const handleClick = (year) => {
        setYear(year);
    }

    return (
        <StyledHeader>
            <TopBar>
                <Image src={Logo}></Image>
            </TopBar>
            <Menu>
                <Link onClick={() => handleClick("2023")} $active={year === "2023"}>2023</Link>
                <Link onClick={() => handleClick("2024")} $active={year === "2024"}>2024</Link>
            </Menu>
        </StyledHeader>
    );
};

export default Header;
