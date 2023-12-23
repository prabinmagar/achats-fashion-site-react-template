import PropTypes from "prop-types";
import { useState } from "react";
import { FormElement, Input } from "../../styles/form";
import styled from "styled-components";

const PasswordToggleButton = styled.button`
  position: absolute;
  bottom: 100%;
  right: 0;

  .pwd-toggle-text {
    font-size: 13px;
    padding-left: 5px;
  }
`;

const PasswordInput = ({ fieldName, name, errorMsg = "" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormElement>
      <label htmlFor="" className="form-elem-label">
        {fieldName}
      </label>
      <div className="form-elem-block">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder=""
          name={name}
          className="form-elem-control"
        />

        <PasswordToggleButton
          type="button"
          className="pwd-value-toggle flex items-center"
          onClick={togglePassword}
        >
          {showPassword ? (
            <>
              <i className="bi bi-eye-fill"></i>
              <span className="pwd-toggle-text">Hide</span>
            </>
          ) : (
            <>
              <i className="bi bi-eye-slash-fill"></i>
              <span className="pwd-toggle-text">Show</span>
            </>
          )}
        </PasswordToggleButton>
      </div>
      <span className="form-elem-error text-end font-medium">{errorMsg}</span>
    </FormElement>
  );
};

export default PasswordInput;
PasswordInput.propTypes = {
  fieldName: PropTypes.string,
  name: PropTypes.string,
  errorMsg: PropTypes.string,
};
