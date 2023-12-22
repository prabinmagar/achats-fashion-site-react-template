import { AuthOptions, PasswordInput } from "../../components";
import { FormGridWrapper } from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import {
  CheckboxGroup,
  FormElement,
  FormTitle,
  Input,
} from "../../styles/form";
import { BaseButtonBlack } from "../../styles/button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpScreenWrapper = styled.section`
  form {
    margin-top: 40px;
  }
`;

const SignUpScreen = () => {
  return (
    <SignUpScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img
                src={staticImages.form_img2}
                className="object-fit-cover"
                alt=""
              />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign Up</h3>
                <p className="text-base">
                  Sign up for free to access to in any of our products{" "}
                </p>
              </FormTitle>
              <AuthOptions />
              <form>
                <FormElement>
                  <label htmlFor="" className="form-elem-label">
                    User name or email address
                  </label>
                  <Input
                    type="text"
                    placeholder=""
                    name=""
                    className="form-elem-control"
                  />
                  <span className="form-elem-error">
                    *Please enter valid email address.
                  </span>
                </FormElement>
                <PasswordInput fieldName="Password" name="password" />
                <span className="form-elem-text font-medium -mt-4">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </span>

                <CheckboxGroup>
                  <li className="flex items-center">
                    <input type="checkbox" />
                    <span className="text-sm">
                      Agree to our{" "}
                      <a href="#" className="text-underline">
                        Terms of use
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-underline">
                        Privacy Policy
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" />
                    <span className="text-sm">
                      Subscribe to our monthly newsletter.
                    </span>
                  </li>
                </CheckboxGroup>

                <BaseButtonBlack type="submit" className="form-submit-btn">
                  Sign Up
                </BaseButtonBlack>
              </form>
              <p className="flex flex-wrap account-rel-text">
                Already have an account?{" "}
                <Link to="sign_in" className="font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignUpScreenWrapper>
  );
};

export default SignUpScreen;
