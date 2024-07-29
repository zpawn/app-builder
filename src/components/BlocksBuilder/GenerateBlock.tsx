import { get } from "lodash";
import { Property } from "@deskpro/app-sdk";
import type { FC, ComponentType } from "react";
import type { Dict } from "../../types";
import type { BlockConfig, Store } from "../../types";

type Props = {
  blockConfig: BlockConfig;
  Component: ComponentType<{ value: unknown } & Dict<unknown>>;
  store?: Store;
};

const GenerateBlock: FC<Props> = ({ blockConfig, Component, store }) => {
  const blockType = get(blockConfig, ["type"]);
  const { value, ...blockProps } = get(blockConfig, ["props"]) || {};
  const label = get(blockConfig, ["label"]);
  const pathInStore = get(blockConfig, ["pathInStore"], "");

  if (!blockConfig) {
    // eslint-disable-next-line no-console
    console.error("BlocksBuilder: wrong config - block config not found");
    return null;
  }

  if (!Component) {
    // eslint-disable-next-line no-console
    console.error(
      "BlocksBuilder: can't find component for block type:",
      blockType,
    );
    return null;
  }

  return (
    <Property
      label={label}
      marginBottom={0}
      text={
        <Component
          {...blockProps}
          value={value || get(store, pathInStore, "-") || "-"}
        />
      }
    />
  );
};

export { GenerateBlock };
