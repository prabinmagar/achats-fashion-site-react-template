import { Container, Section, SectionTitle } from "../../styles/styles";
import PropTypes from "prop-types";
import ProductList from "../product/ProductList";

const Catalog = ({ catalogTitle, products }) => {
  return (
    <Section>
      <Container>
        <div className="categories-content">
          <SectionTitle>
            <h3>{catalogTitle}</h3>
          </SectionTitle>
          <ProductList products={products} />
        </div>
      </Container>
    </Section>
  );
};

export default Catalog;

Catalog.propTypes = {
  catalogTitle: PropTypes.string,
  products: PropTypes.array,
};
