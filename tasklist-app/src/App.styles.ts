import styled from "styled-components";

const Title = styled.h1`
  padding: 1em;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  background: #2d93f9;
`;

const Main = styled.main`
  background: linear-gradient(-45deg, #79AEE3, #90DDE8, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  position:abs;
  @keyframes gradient {
  0% {
  background-position: 0% 50%;
  }
  
    50% {
  background-position: 100% 50%;
  }
  
  100% {
background-position: 0% 50%;
  }
  }`;

const Box = styled.div`
  display: flex;
  height: 100%;
`;

const ContainerForm = styled.div`
  width: 30%;
  border-right: 0.1rem solid #061a40;
`;

const ContainerTasks = styled.div`
  display: flex;
  flex: 1;
  width: 70%;
  flex-wrap: wrap;
  border-right: 1px solid #061a40;
`;
const styles = { Title, Main, ContainerForm, ContainerTasks, Box };

export default styles;
