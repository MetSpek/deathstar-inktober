import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopBar = styled.div`
    background-color: var(--color-black);
    width: 100%;
    height: 7.5rem;
`;

const Menu = styled.nav`
    display: flex;
    align-items: center;

    width: 50%;
    height: 5.6rem;
    justify-content: center;
    background-color: var(--color-black);
    border-radius: 0 0 2rem 2rem;
`;

const Link = styled.a`
    background-color: yellow;
    font-size: 2.4rem;
`;

export const Header = () => {
    return (
        <StyledHeader>
            <TopBar />
            <Menu>
                <Link href="#">Home</Link>
            </Menu>
        </StyledHeader>
    );
};

export default Header;