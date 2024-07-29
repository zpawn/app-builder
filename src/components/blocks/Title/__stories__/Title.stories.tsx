import { Title as TitleCmp } from "../Title";
import type { StoryFn } from "@storybook/react";
import type { Props } from "../Title";

export default {
  title: "Blocks/Title",
  component: TitleCmp,
  argTypes: {
    value: { type: "string" },
    icon: { type: "string" },
    link: { type: "string" },
    to: { type: "string" },
  },
};

export const Title: StoryFn<Props> = (props: Props) => (
  <div style={{ margin: "8px" }}>
    <TitleCmp {...props} />
  </div>
);

Title.args = {
  value: "Title",
  icon: "faGithub",
  link: "https://www.deskpro.com/apps",
  to: "/home",
};
