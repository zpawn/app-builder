import { get } from "lodash";
import { PropertyRow } from "@deskpro/app-sdk";
import { allBlocksMap } from "../components";
import { GenerateBlock } from "../components/BlocksBuilder/GenerateBlock";
import type { ReactNode } from "react";
import { BlockConfig, Dict, Store, BlocksMap } from "../types";

const renderRow = (
  row: string[],
  blocks: Dict<BlockConfig>,
  blocksMap: BlocksMap,
  store?: Store,
): ReactNode => {
  const isFull = get(blocks, [row[0], "full"]);
  const styles = {
    paddingLeft: isFull ? 0 : 8,
    paddingRight: isFull ? 0 : 8,
  };

  return (
    <PropertyRow marginBottom={10} style={styles}>
      {row.map((name) => {
        const blockConfig = get(blocks, name);
        const blockType = get(blockConfig, ["type"]);
        const Component = get(blocksMap || allBlocksMap, [blockType]);

        return (
          <GenerateBlock
            key={name}
            blockConfig={blockConfig}
            Component={Component}
            store={store}
          />
        );
      })}
    </PropertyRow>
  );
};

export { renderRow };
