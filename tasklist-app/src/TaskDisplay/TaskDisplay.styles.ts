import styled from "styled-components";

const TaskDisplay = styled.div`
  padding: 2em;
  text-align: center;
  border-style: double;
  border-width: 0.3em;
  border-color: black;
  margin: 2em auto;
  width: 30%;

  overflow-wrap: break-word;
`;

const TaskHeader = styled.h2`
  text-size: 1em;
`;

const styles = { TaskDisplay, TaskHeader };

export default styles;
