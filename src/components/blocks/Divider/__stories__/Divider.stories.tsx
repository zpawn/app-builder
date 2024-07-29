import { P5 } from "@deskpro/deskpro-ui";
import { Divider as DividerCmp } from "../Divider";

export default {
  title: "Blocks/Divider",
  component: DividerCmp,
};

export const Divider = () => (
  <div style={{ margin: "0 8px" }}>
    <P5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</P5>
    <DividerCmp />
    <P5>Hic neque quidem quisquam rem suscipit. Aspernatur consequatur!</P5>
    <DividerCmp />
    <P5>Illo nisi quisquam soluta veniam voluptates!</P5>
    <DividerCmp />
    <DividerCmp />
    <DividerCmp />
  </div>
);
