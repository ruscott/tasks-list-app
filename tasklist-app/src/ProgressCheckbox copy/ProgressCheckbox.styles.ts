import styled from "styled-components";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;

  &:checked + label {
    background-color: #007bff;
    border-color: #007bff;
  }
`;

const CheckboxLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-bottom: 0;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background-color: #007bff;
    opacity: 0;
  }

  ${Checkbox}:checked + &:before {
    opacity: 1;
  }
`;

const styles = { Checkbox, CheckboxLabel };

export default styles;
