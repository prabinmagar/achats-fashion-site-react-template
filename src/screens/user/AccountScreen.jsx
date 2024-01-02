import styled from "styled-components";
import { Container, SectionTitle } from "../../styles/styles";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import { UserMenu, Breadcrumb } from "../../components";
import { FormElement, Input } from "../../styles/form";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import { BaseLinkGreen } from "../../styles/button";
import { Link } from "react-router-dom";

const AccountScreenWrapper = styled.main`
  .address-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;

    @media (max-width: ${breakpointsDown.lg}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .address-item {
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 25px;
    display: grid;
    row-gap: 8px;
  }

  .address-tags {
    gap: 12px;

    li {
      height: 28px;
      border-radius: 8px;
      padding: 2px 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${defaultTheme.color_whitesmoke};
    }
  }

  .address-btns {
    margin-top: 12px;
    .btn-separator {
      width: 1px;
      border-radius: 50px;
      background: ${defaultTheme.color_platinum};
      margin: 0 10px;
    }
  }
`;

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Account", link: "/account" },
];

const AccountScreen = () => {
  return (
    <AccountScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <SectionTitle className="section-title">
              <h3>My Account</h3>
            </SectionTitle>
            <form>
              <div className="form-wrapper">
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Your Name
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type="email"
                      className="form-elem-control text-outerspace font-semibold"
                      value="Jhanvi Shah"
                      readOnly
                    />
                    <button type="button" className="form-control-change-btn">
                      Change
                    </button>
                  </div>
                </FormElement>
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Email Address
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type="text"
                      className="form-elem-control text-outerspace font-semibold"
                      value="jhanvi@gmail.com"
                      readOnly
                    />
                    <button type="button" className="form-control-change-btn">
                      Change
                    </button>
                  </div>
                </FormElement>
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Phone Number
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type="text"
                      className="form-elem-control text-outerspace font-semibold"
                      value="9876787980"
                      readOnly
                    />
                    <button type="button" className="form-control-change-btn">
                      Change
                    </button>
                  </div>
                </FormElement>
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Password
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type="password"
                      className="form-elem-control text-outerspace font-semibold"
                      value="passkey"
                      readOnly
                    />
                    <button type="button" className="form-control-change-btn">
                      Change
                    </button>
                  </div>
                </FormElement>
              </div>
            </form>
            <div>
              <SectionTitle className="section-title">
                <h3>My Contact Address</h3>
              </SectionTitle>
              <BaseLinkGreen to="/account/add">Add Address</BaseLinkGreen>
              <div className="address-list">
                <div className="address-item">
                  <p className="text-outerspace text-lg font-semibold address-title">
                    Jhanvi Shah
                  </p>
                  <p className="text-gray text-base font-medium">8980252445</p>
                  <p className="text-gray text-base font-medium address-description">
                    1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                    derasar, Vijaynagar road{" "}
                  </p>
                  <ul className="address-tags flex flex-wrap">
                    <li className="text-gray text-base font-medium">Home</li>
                    <li className="text-gray text-base font-medium">
                      Default billing address
                    </li>
                  </ul>
                  <div className="address-btns flex">
                    <Link
                      to="/"
                      className="text-base text-outerspace font-semibold"
                    >
                      Remove
                    </Link>
                    <div className="btn-separator"></div>
                    <Link
                      to="/"
                      className="text-base text-outerspace font-semibold"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
                <div className="address-item">
                  <p className="text-outerspace text-lg font-semibold address-title">
                    Jhanvi Shah
                  </p>
                  <p className="text-gray text-base font-medium">8980252445</p>
                  <p className="text-gray text-base font-medium address-description">
                    1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                    derasar, Vijaynagar road{" "}
                  </p>
                  <ul className="address-tags flex flex-wrap">
                    <li className="text-gray text-base font-medium">Home</li>
                    <li className="text-gray text-base font-medium">
                      Default billing address
                    </li>
                  </ul>
                  <div className="address-btns flex">
                    <Link
                      to="/"
                      className="text-base text-outerspace font-semibold"
                    >
                      Remove
                    </Link>
                    <div className="btn-separator"></div>
                    <Link
                      to="/"
                      className="text-base text-outerspace font-semibold"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </AccountScreenWrapper>
  );
};

export default AccountScreen;
