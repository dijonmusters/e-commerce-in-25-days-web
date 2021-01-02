import Link from "next/link";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { sm } from "../utils/mediaQueries";

const Nav = styled.nav`
  background: white;
  padding: 2rem;

  ${sm`
    padding: 1rem 0;
  `};
`;

const Title = styled.h1`
  font-weight: 600;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  font-size: 2rem;
  display: flex;
  justify-content: center;

  ${sm`
    font-size: 0.75rem;
  `};
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Title>E-Commerce in 25 days</Title>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
