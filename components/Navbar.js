import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
  font-family: "Montserrat", sans-serif;
  color: black;
  height: 80px;
  background: white;

  // background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  @media (max-width: 700px) {
    .item {
      z-index: 1;
      color: white;
      position: absolute;
      top: 60px;
      display: flex;
      flex-direction: column;
      background: white;
      left: 0;
      width: 100%;
      height: 100%;
      color: white;
      transform: translateX(-100%);
      transition: all 0.45s;
    }
    .nav-toggle {
      display: flex;
      width: 50px;
      height: 50px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .Navbar .item a::before {
      background: transparent;
    }

    .item.open {
      transform: translateX(0);
    }

    .bar {
      position: relative;
      width: 12px;
      height: 2px;
      background: black;
    }

    .nav-toggle .bar::before,
    .nav-toggle .bar::after {
      content: "";
      position: absolute;
      height: 2px;
      background: black;
      border-radius: 2px;
      transition: all 0.45s ease-in-out;
    }

    .nav-toggle .bar::before {
      width: 25px;
      transform: translateY(-8px);
      right: 0;
    }

    .nav-toggle .bar::after {
      width: 25px;
      transform: translateY(10px);
      transform: translateX(-12px);
    }

    .nav-toggle.open .bar {
      transform: translateX(-48px);
      background: transparent;
    }

    .nav-toggle.open .bar::before {
      width: 30px;

      transform: rotate(45deg) translate(20px, -25px);
    }

    .nav-toggle.open .bar::after {
      width: 30px;
      transform: rotate(-45deg) translate(28px, 22px);
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 0rem 2rem;
  margin: 15px;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav className="menu">
      <div margin={20}>
        <Link href="/" passHref>
          <StyledLink>AT</StyledLink>
        </Link>
      </div>

      <div className={`item ${isOpen && "open"} `}>
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
      <div
        className={`nav-toggle ${isOpen && "open"}   `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
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
