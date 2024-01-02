import { AuthOptions, PasswordInput } from "../../components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { staticImages } from "../../utils/images";
import { Link } from "react-router-dom";
import { Container } from "../../styles/styles";
import { FormElement, Input } from "../../styles/form";
import { BaseButtonBlack } from "../../styles/button";
import styled from "styled-components";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";

const SignInScreenWrapper = styled.section`
  // form separator
  .form-separator {
    margin: 32px 0;
    column-gap: 18px;

    @media(max-width: ${breakpointsDown.lg}){
      margin: 24px 0;
    }

    .separator-text {
      border-radius: 50%;
      min-width: 36px;
      height: 36px;
      background-color: ${defaultTheme.color_purple};
      position: relative;
    }

    .separator-line {
      width: 100%;
      height: 1px;
      background-color: ${defaultTheme.color_platinum};
    }
  }
`;

const SignInScreen = () => {
  return (
    <SignInScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img
                src={staticImages.form_img1}
                className="object-fit-cover"
                alt=""
              />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign In</h3>
              </FormTitle>
              <AuthOptions />

              <div className="form-separator flex items-center justify-center">
                <span className="separator-line"></span>
                <span className="separator-text inline-flex items-center justify-center text-white">
                  OR
                </span>
                <span className="separator-line"></span>
              </div>

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
                </FormElement>
                <PasswordInput fieldName="Password" name="password" />
                <Link
                  to="/reset"
                  className="form-elem-text text-end font-medium -mt-4"
                >
                  Forgot your password ?
                </Link>

                <BaseButtonBlack type="submit" className="form-submit-btn">
                  Sign In
                </BaseButtonBlack>
              </form>
              <p className="flex flex-wrap account-rel-text">
                Don&apos;t have an account?{" "}
                <Link to="/sign_up" className="font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignInScreenWrapper>
  );
};

export default SignInScreen;
