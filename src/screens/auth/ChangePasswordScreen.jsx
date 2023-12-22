import styled from "styled-components";
import { PasswordInput } from "../../components";
import { BaseButtonBlack } from "../../styles/button";
import { FormTitle } from "../../styles/form";
import { FormGridWrapper } from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";

const ChangePwdScreenWrapper = styled.section``;

const ChangePasswordScreen = () => {
  return (
    <ChangePwdScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img
                src={staticImages.form_img5}
                className="object-fit-cover"
                alt=""
              />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Create New Password</h3>
                <p>
                  Your new password must be different from previous used
                  passwords.
                </p>
              </FormTitle>

              <form>
                <PasswordInput fieldName="Password" name="password" />
                <PasswordInput
                  fieldName="Confirm Password"
                  name="cofirm_password"
                  errorMsg="New password and confirm password do not match"
                />
                <BaseButtonBlack type="submit" className="form-submit-btn">
                  Reset Password
                </BaseButtonBlack>
              </form>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </ChangePwdScreenWrapper>
  );
};

export default ChangePasswordScreen;
