import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const Div1 = styled.div`
  display: flex;
  align-items: center;
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Span = styled.span`
  font-size: 2rem;
`;
export const MenuLink = styled.div`
  display flex;
  justify-content: space-between;
  align-items:center;

  @media (max-width: 800px) {
    width: 100%;
    
  }
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  transition: 0.4s ease;

  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    padding: 0.5rem;
  }
`;

export const NavLinkLogo = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  transition: 0.4s ease;

  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;

export const SocialIcons = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  transition: 0.4s ease;

  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    padding: 0.5rem;
  }
`;
