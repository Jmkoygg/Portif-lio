import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo>João Soares</Logo>
        <Nav>
          <NavItem href="#projects">Projetos</NavItem>
          <NavItem href="#about">Sobre mim</NavItem>
          <NavItem href="#contact">Contato</NavItem>
        </Nav>
        <SocialIcons>
          <IconLink
            href="https://github.com/Jmkoygg"
            target="_blank"
            aria-label="GitHub"
          >
            <img src="./github.svg" alt="github" width={25} height={25} />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/joãosoaresdev/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <img src="./linkedin.svg" alt="Linkedin" width={25} height={25} />
          </IconLink>
        </SocialIcons>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-size: 1.2em;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #FFFF;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    color: #cccccc;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const IconLink = styled.a`
  color: #ffffff;
  font-size: 1.2em;
`;

export default Header;
