import styled from "styled-components";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;

  &:checked + label {
    background-color: #007bff;
    border-color: #007bff;
  }
  &: checked + label::after {
    font-family: 'FontAwesome';
    content: "\f00d";
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
`;

const CheckboxLabel4 = styled.label`
  $toggle-indicator-size: 24px;
  $track-height: $toggle-indicator-size + 6;
  $track-width: $toggle-indicator-size * 2.5;
  $highContrastModeSupport: solid 2px transparent;

  $track-border: white;
  $track-background: black;
  $focus-ring: 0px 0px 0px 2px white;

  // Toggle specific styles
  &:toggle {
    align-items: center;
    border-radius: 100px;
    display: flex;
    font-weight: 700;
    margin-bottom: 16px;

    &:last-of-type {
      margin: 0;
    }
  }

  // Since we can't style the checkbox directly, we "hide" it so we can draw the toggle.
  &:toggle__input {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;

    // This style sets the focus ring. The ":not([disabled])" prevents the focus ring from creating a flash when the element is clicked.
    &:not([disabled]):active + .toggle-track,
    &:not([disabled]):focus + .toggle-track {
      border: 1px solid transparent;
      box-shadow: $focus-ring;
    }

    &:disabled + .toggle-track {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  &:toggle-track {
    background: $track-background;
    border: 1px solid $track-border;
    border-radius: 100px;
    cursor: pointer;
    display: flex;
    height: $track-height;
    margin-right: 12px;
    position: relative;
    width: $track-width;
  }

  .toggle-indicator {
    align-items: center;
    background: $dark;
    border-radius: $toggle-indicator-size;
    bottom: 2px;
    display: flex;
    height: $toggle-indicator-size;
    justify-content: center;
    left: 2px;
    outline: $highContrastModeSupport;
    position: absolute;
    transition: $speed;
    width: $toggle-indicator-size;
  }

  // The check mark is optional
  .checkMark {
    fill: #fff;
    height: $toggle-indicator-size - 4;
    width: $toggle-indicator-size - 4;
    opacity: 0;
    transition: opacity $speed ease-in-out;
  }

  .toggle__input:checked + .toggle-track .toggle-indicator {
    background: $dark;
    transform: translateX($track-width - $track-height);

    .checkMark {
      opacity: 1;
      transition: opacity $speed ease-in-out;
    }
  }

  @media screen and (-ms-high-contrast: active) {
    .toggle-track {
      border-radius: 0;
    }
  }
`;
const styles = { Checkbox, CheckboxLabel };

export default styles;
