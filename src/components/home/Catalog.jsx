import { Container, Section } from "../../styles/styles";
import PropTypes from "prop-types";
import ProductList from "../product/ProductList";
import Title from "../common/Title";

const Catalog = ({ catalogTitle, products }) => {
  return (
    <Section>
      <Container>
        <div className="categories-content">
          <Title titleText={catalogTitle} />
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
