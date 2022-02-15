import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;
export const LeftSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  @media (max-width: 765px) {
    width: 100%;
  }
`;
export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 60px;
  line-height: 72px;
  font-family: "Space Grotesk", sans-serif;
  color: #eeee;

  @media (max-width: 765px) {
    font-size: 40px;
  }
`;
export const SectionText = styled.p`
  font-size: 24px;
  font-weight: 300;
  padding-bottom: 1.6rem;
  line-height: 40px;

  @media (max-width: 765px) {
    font-size: 16px;
  }
`;

export const Button = styled(Link)`
  padding: 1.4rem;
  width: 300px;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(#3eadcf, #abe9cd);
  color: #000;
  border-radius: 50px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 765px) {
    width: 200px;
  }

  @media (max-width: 641px) {
    width: 100%;
  }
`;
export const RightSection = styled.div``;
