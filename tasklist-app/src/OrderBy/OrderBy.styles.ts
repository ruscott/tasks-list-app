import styled from "styled-components";

const OrderByBox = styled.div`
  margin: auto;
  padding: 0.2em;
  padding-left: 1em
  text-align: center;
  background: #a1caf3;
  border: solid;
  display: flex;
  
`;

const OrderSelect = styled.select`
  padding: 0.1rem;
  margin: auto;
  margin-left: 0.5rem;

  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const OrderSelectorDropdown = styled.label`
  padding: 0.2rem;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const styles = { OrderByBox, OrderSelect, OrderSelectorDropdown };

export default styles;
