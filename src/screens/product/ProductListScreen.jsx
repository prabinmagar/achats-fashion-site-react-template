import styled from "styled-components";
import {
  Pricing,
  ProductFilter,
  ProductList,
  Breadcrumb,
  Title,
} from "../../components";
import { products } from "../../data/data";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { Link } from "react-router-dom";
import {
  Container,
  ContentStylings,
  Section,
} from "../../styles/styles";

const ProductsContent = styled.div`
  grid-template-columns: 320px auto;
  margin: 20px 0;

  @media (max-width: ${breakpoints.xl}) {
    grid-template-columns: 260px auto;
  }

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
    row-gap: 24px;
  }
`;

const ProductsContentLeft = styled.div`
  border: 1px solid rgba(190, 188, 189, 0.4);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 50px;
  overflow: hidden;

  @media (max-width: ${breakpoints.lg}) {
    display: grid;
  }
`;

const ProductsContentRight = styled.div`
  padding: 16px 40px;

  .products-right-top {
    margin-bottom: 40px;

    @media (max-width: ${breakpoints.lg}) {
      margin-bottom: 24px;
    }

    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
      row-gap: 16px;
      align-items: flex-start;
    }
  }

  .products-right-nav {
    column-gap: 16px;
    li {
      a.active {
        color: ${defaultTheme.color_purple};
      }
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    padding-left: 12px;
    padding-right: 12px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding-right: 0px;
    padding-left: 0px;
  }

  .product-card-list {
    grid-template-columns: repeat(auto-fill, repeat(290px, auto));
  }

  .product-card {
    padding-left: 0;
    padding-right: 0;
  }
`;

const DescriptionContent = styled.div`
  .content-stylings {
    margin-left: 32px;
    @media (max-width: ${breakpoints.sm}) {
      margin-left: 0;
    }
  }
`;

const ProductListScreen = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "" },
  ];
  return (
    <main className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <ProductsContent className="grid items-start">
          <ProductsContentLeft>
            <ProductFilter />
          </ProductsContentLeft>
          <ProductsContentRight>
            <div className="products-right-top flex items-center justify-between">
              <h4 className="text-xxl">Women&apos;s Clothing</h4>
              <ul className="products-right-nav flex items-center justify-end flex-wrap">
                <li>
                  <Link to="/" className="active text-lg font-semibold">
                    New
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-lg font-semibold">
                    Recommended
                  </Link>
                </li>
              </ul>
            </div>
            <ProductList products={products.slice(0, 12)} />
          </ProductsContentRight>
        </ProductsContent>
      </Container>
      <Section>
        <Container>
          <DescriptionContent>
            <Title titleText={"Clothing for Everyone Online"} />
            <ContentStylings className="text-base">
              <h4>Reexplore Clothing Collection Online at Achats.</h4>
              <p>
                Clothing Hub – Are you searching for the best website to buy
                Clothing online in India? Well, your search for the coolest and
                most stylish womens clothing ends here. From trendy Casual Wear
                Online shopping to premium quality cotton apparel, Achats has
                closet of all type of Collection covered with the latest and
                best designs of Clothing Online.
              </p>
              <p>
                Our collection of clothes for all people will make you the
                trendsetter with an iconic resemblance of choice in Fashion
                Wear.{" "}
              </p>
              <h4>
                One-Stop Destination to Shop Every Clothing for Everyone:
                Achats.
              </h4>
              <p>
                Today, Clothing is gaining more popularity above all. This is
                because gone are the days when people were used to carrying
                uncomfortable fashion. Today, a person looks prettier when
                she/he is in Casual Wear which is a comfortable outfit.
                Concerning this, Achats has a big fat range of Stylish Clothing
                that would make everyone the winner wherever she/he goes.{" "}
              </p>
              <Link to="/">See More</Link>
            </ContentStylings>
          </DescriptionContent>
        </Container>
      </Section>
      <Pricing />
    </main>
  );
};

export default ProductListScreen;
