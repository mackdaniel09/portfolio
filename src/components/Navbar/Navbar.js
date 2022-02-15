import React, { useState } from "react";
import { DiCssdeck } from "react-icons/di";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Container,
  Div1,
  Div2,
  Div3,
  MenuLink,
  NavLink,
  NavLinkLogo,
  Span,
  SocialIcons,
} from "./NavbarStyle";
const Navbar = () => {
  return (
    <Container>
      <Div1>
        <NavLinkLogo to="/">
          <DiCssdeck size="2rem" />
          <Span>Portfolio</Span>
        </NavLinkLogo>
      </Div1>
      <MenuLink>
        <Div2>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/technologies">Tech</NavLink>
          <NavLink to="/about">About</NavLink>
        </Div2>
        <Div3>
          <SocialIcons href="https://github.com">
            <AiFillGithub />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin />
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <AiFillInstagram />
          </SocialIcons>
        </Div3>
      </MenuLink>
    </Container>
  );
};
export default Navbar;
