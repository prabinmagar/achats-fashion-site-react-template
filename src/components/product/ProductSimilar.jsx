import { products } from "../../data/data";
import { Section } from "../../styles/styles";
import ProductList from "./ProductList";
import Title from "../common/Title";

const ProductSimilar = () => {
  return (
    <Section>
      <Title titleText={"Similar Products"} />
      <ProductList products={products.slice(0, 4)} />
    </Section>
  );
};

export default ProductSimilar;
