import React from "react";
import styled from "styled-components";
import Link from "next/link";
const Nav = styled.nav`
  color: black;
  height: 80px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 0rem 2rem;
`;

const Navbar = () => {
  return (
    <Nav className="menu">
      <div>
        <Link href="/" passHref>
          <StyledLink>Anmol Tyagi</StyledLink>
        </Link>
      </div>

      <div className="item">
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Projects</StyledLink>
        </Link>
        <Link href="/blog/1" passHref>
          <StyledLink>Blog</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;

// import React from "react";

// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <NavbarContainer>
//           <NavLogo>logo</NavLogo>
//         </NavbarContainer>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;
