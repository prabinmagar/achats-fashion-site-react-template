import { Link } from "react-router-dom";
import { BaseButtonBlack } from "../../styles/button";
import { FormElement, Input } from "../../styles/form";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";

const CheckMailScreen = () => {
  return (
    <main>
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
                <h3>Check Email</h3>
                <p>
                  Please check your email inbox and click on the provided link
                  to reset your password . If you don’t receive email, Click
                  here to resend.
                </p>
              </FormTitle>
              <form>
                <FormElement>
                  <label htmlFor="" className="form-elem-label">
                    Email
                  </label>
                  <Input
                    type="text"
                    placeholder=""
                    name=""
                    className="form-elem-control"
                  />
                  <span className="form-elem-error">
                    We cannot find your email.
                  </span>
                </FormElement>
                <BaseButtonBlack type="submit" className="form-submit-btn">
                  Send
                </BaseButtonBlack>
              </form>
              <p className="flex flex-wrap account-rel-text">
                <Link to="/sign_in" className="font-medium">
                  <span className="text-underline">Back to Login</span>
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </main>
  );
};

export default CheckMailScreen;
