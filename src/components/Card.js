import styled from "styled-components";

export default function Card() {
  return (
    <div>
      <StyledCard>
        <div>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/2.jpegimg_avatar.png"
            alt="Avatar"
          />
          <h2>Morty Smith</h2>
        </div>
      </StyledCard>
    </div>
  );
}

const StyledCard = styled.Card`
  border: 1px;
  width: 100%;
  padding: 10px;
  color: darkslategrey;
  background-color: lightgrey;
`;
