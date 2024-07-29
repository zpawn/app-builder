import { BlocksBuilder as Cmp } from "../BlocksBuilder";
import { default as mockCustomer } from "./mockCustomer.json";
import type { StoryObj } from "@storybook/react";

export default {
  title: "Core/BlocksBuilder",
  component: Cmp,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const DynamicBlocks: StoryObj<typeof Cmp> = (args) => <Cmp {...args} />;

DynamicBlocks.args = {
  config: {
    structure: [["orders"]],
    blocks: {
      orders: {
        type: "iterable",
        pathInStore: ["orders"],
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
    orders: mockCustomer.orders,
  },
};
