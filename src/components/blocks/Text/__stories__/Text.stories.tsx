import { Text as TextCmp } from "../Text";
import type { StoryFn } from "@storybook/react";
import type { Props } from "../Text";

export default {
  title: "Blocks/Text",
  component: TextCmp,
  argTypes: {
    value: {
      type: "string",
    },
  },
};

export const Text: StoryFn<Props> = (props: Props) => (
  <div style={{ margin: "8px" }}>
    <TextCmp {...props} />
    <TextCmp value={"<ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>"} />
  </div>
);

Text.args = {
  value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
};
