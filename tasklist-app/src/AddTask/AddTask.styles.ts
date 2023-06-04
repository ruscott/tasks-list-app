import styled from "styled-components";

const AddTaskBox = styled.form`
  padding: 2em;
  text-align: center;
  border-style: double;
  border-width: 0.3em;
  border-color: black;
  margin: 2em auto;
  width: 50%;
`;

const FormSection = styled.div`
  padding: 0.2em;
  text-align: center;
  justify-content: center;
  margin: 1rem 0.2rem;
`;

const SubmitBar = styled.input`
padding: 0.75em 1.5em;
background-color: #037171;
color: white;
border-radius: 5em;
border: solid;
border-color: #037171;
border-width:0.3em
font-size: 2rem;
cursor: pointer;
&:hover {
  background-color: #121C64;
}
`;

const InputBar = styled.input`
  padding: 0.1rem;
  margin-left: 1rem;
  border: 1px solid #136f63;
  border-radius: 0.2rem;
  font-size: 1rem;
  outline: none;
  width: 90%;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const SelectorDropdown = styled.label`
  padding: 0.2rem;
  margin-left: 1rem;
  border-radius: 0.2rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const Select = styled.select`
  padding: 0.2rem;
  margin-left: 1rem;
  border-radius: 0.1rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const styles = {
  AddTaskBox,
  FormSection,
  SubmitBar,
  InputBar,
  SelectorDropdown,
  Select,
};

export default styles;
