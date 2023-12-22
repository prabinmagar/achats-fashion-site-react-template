import styled from "styled-components";
import { Container, Section, SectionTitle } from "../../styles/styles";
import { pricingData } from "../../data/data";

const PricingContent = styled.div`
  .table-wrapper {
    background-color: #fcfcfc;
    border-radius: 6px;
    overflow: hidden;
    max-width: 1230px;
    margin-right: auto;
    margin-left: auto;
  }

  .pricing-table {
    border-spacing: 0;
    thead th {
      padding: 12px 10px;

      &:last-child {
        width: 90px;
      }
    }

    tbody {
      td {
        padding: 12px 10px;
        color: #807d7e;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

const Pricing = () => {
  return (
    <Section>
      <Container>
        <PricingContent>
          <SectionTitle >
            <h3>Buy Women&apos;s Clothing at Best Price</h3>
          </SectionTitle>
          <div className="table-wrapper">
            <table className="pricing-table w-full">
              <thead className="bg-sea-green">
                <tr>
                  <th className="text-start text-white text-base">
                    Women&apos;s Clothing
                  </th>
                  <th className="text-end text-base text-white">Best Price</th>
                </tr>
              </thead>
              <tbody>
                {pricingData?.map((pricing) => {
                  return (
                    <tr key={pricing.id}>
                      <td className="text-base">{pricing.name}</td>
                      <td className="text-end text-base">${pricing.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </PricingContent>
      </Container>
    </Section>
  );
};

export default Pricing;
