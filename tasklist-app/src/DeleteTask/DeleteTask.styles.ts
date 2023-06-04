import styled from "styled-components";

const DeleteButton = styled.button`
  padding: 0.75em 1.5em;
  background-color: #5C6AC9;
  color: white;
  border-radius: 5em;
  border: solid;
  border-color: black;
  border-width:0.2em
  font-size: 15em;
  cursor: pointer;
  &:hover {
    background-color: #121C64;
  }
`;

const styles = { DeleteButton };

export default styles;
