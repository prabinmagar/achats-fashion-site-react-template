import { Outlet } from "react-router-dom";
import { Header, Footer, Sidebar } from "../index";
import { PageWrapper } from "../../styles/styles";

const BaseLayout = () => {
  return (
    <PageWrapper>
      <Header />
      <Sidebar />
      <div style={{
        minHeight: "calc(100vh - 545px)"
      }}>
        <Outlet />
      </div>
      <Footer />
    </PageWrapper>
  )
}

export default BaseLayout
