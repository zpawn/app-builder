import { BlocksBuilder as Cmp } from "../BlocksBuilder";
import { default as mockCustomer } from "./mockCustomer.json";
import type { StoryObj } from "@storybook/react";

export default {
  title: "Core/BlocksBuilder",
  component: Cmp,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const MixedBlocks: StoryObj<typeof Cmp> = (args) => <Cmp {...args} />;

MixedBlocks.args = {
  config: {
    structure: [
      ["fullName"],
      ["email"],
      ["phone"],
      ["tags"],
      ["marketingEmail"],
      ["note"],
      ["---"],
      ["orders"],
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
      "---": {
        type: "divider",
        full: true,
      },
      orders: {
        type: "iterable",
        pathInStore: ["orders"],
        title: "Orders",
        config: {
          structure: [["title"], ["date", "status"]],
          blocks: {
            title: {
              type: "title",
              pathInStore: ["name"],
              props: { marginBottom: 0 },
            },
            date: {
              type: "text",
              label: "Date",
              pathInStore: ["createdAt"],
            },
            status: {
              type: "text",
              label: "Status",
              pathInStore: ["displayFulfillmentStatus"],
            },
          },
        },
      },
    },
  },
  store: {
    customer: mockCustomer,
    orders: mockCustomer.orders,
  },
};
