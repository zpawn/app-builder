import { Tags as TagCmp } from "../Tags";
import type { StoryFn } from "@storybook/react";
import type { Props } from "../Tags";

export default {
  title: "Blocks/Tags",
  component: TagCmp,
  argTypes: {
    value: {
      type: "object",
    },
  },
};

export const Tags: StoryFn<Props> = (props: Props) => (
  <div style={{ margin: "8px" }}>
    <TagCmp {...props} />
  </div>
);

Tags.args = {
  value: ["tag1", "tag2", "tag3"],
};
