import { Outlet } from "react-router-dom";
import { AuthHeader, Footer } from "../index";
import { PageWrapper } from "../../styles/styles";

const AuthLayout = () => {
  return (
    <PageWrapper>
      <AuthHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default AuthLayout;
