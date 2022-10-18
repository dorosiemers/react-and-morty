import styled from "styled-components";

export default function Navbar() {
  return (
    <StyledNavbar>
      <p>A</p>
      <p>B</p>
      <p>C</p>
      <p>D</p>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.navbar`
  width: 100%;
  padding: 10px;
  color: darkslategrey;
  background-color: lightgrey;
`;
