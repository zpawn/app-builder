import { BlocksBuilder as Cmp } from "../BlocksBuilder";
import { default as mockCustomer } from "./mockCustomer.json";
import type { StoryObj } from "@storybook/react";

export default {
  title: "Core/BlocksBuilder",
  component: Cmp,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StaticBlocks: StoryObj<typeof Cmp> = (args) => <Cmp {...args} />;

StaticBlocks.args = {
  config: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    structure: [
      ["fullName"],
      ["email"],
      ["phone"],
      ["tags"],
      ["marketingEmail"],
      ["note"],
    ],
    blocks: {
      fullName: {
        type: "title",
        pathInStore: ["customer", "displayName"],
        props: {
          link: `https://deskpro.com/apps`,
          marginBottom: 0,
        },
      },
      email: {
        type: "text",
        label: "Email",
        pathInStore: ["customer", "email"],
      },
      phone: {
        type: "text",
        label: "Phone number",
        pathInStore: ["customer", "phone"],
      },
      tags: {
        type: "tags",
        label: "Tags",
        pathInStore: ["customer", "tags"],
      },
      marketingEmail: {
        type: "toggle",
        label: "Receive Marketing Email",
        pathInStore: ["customer", "emailMarketingConsent", "marketingState"],
        props: {
          disabled: true,
          label: "Yes",
          rules: {
            eq: "SUBSCRIBED",
          },
        },
      },
      note: {
        type: "text",
        label: "Note",
        pathInStore: ["customer", "note"],
      },
    },
  },
  store: {
    customer: mockCustomer,
  },
};
