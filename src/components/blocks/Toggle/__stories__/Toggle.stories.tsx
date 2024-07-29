import { Toggle as ToggleCmp } from "../Toggle";
import type { StoryFn } from "@storybook/react";
import type { Props } from "../Toggle";

export default {
  title: "Blocks/Toggle",
  component: ToggleCmp,
  argTypes: {
    value: { type: "string" },
    rules: { type: "object" },
  },
};

export const Toggle: StoryFn<Props> = (props: Props) => (
  <div style={{ margin: "8px" }}>
    <ToggleCmp {...props} />
  </div>
);

Toggle.args = {
  value: "SUBSCRIBED",
  rules: {
    eq: "SUBSCRIBED",
  },
};
