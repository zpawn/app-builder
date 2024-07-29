import { Price as PriceCmp } from "../Price";

export default {
  title: "Blocks/Price",
  component: PriceCmp,
  argTypes: {
    value: {
      control: "text",
    },
  },
};

export const Price = () => (
  <div style={{ margin: "0 8px" }}>
    <PriceCmp value="100" />
    <PriceCmp value={{ amount: "100", currency: "UAH" }} />
    <PriceCmp value={{ amount: "9.935", currency: "GBP" }} />
  </div>
);
