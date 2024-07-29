import { get } from "lodash";
import type { FC } from "react";
import { BlockConfig, BlocksMap, Dict, Store, BlockSetsMap } from "../types";

const renderBlockSet = (
  blockSetName: string,
  blocks: Dict<BlockConfig>,
  blocksMap: BlocksMap,
  blockSetsMap: BlockSetsMap,
  store?: Store,
) => {
  const blockSetConfig = get(blocks, blockSetName);
  const blockSetType = get(blockSetConfig, ["type"]);
  const Component = get(blockSetsMap, [blockSetType]) as FC<{
    blockSetConfig: BlockConfig;
    blocksMap: BlocksMap;
    store?: Store;
  }>;

  return (
    <Component
      blockSetConfig={blockSetConfig}
      blocksMap={blocksMap}
      store={store}
    />
  );
};

export { renderBlockSet };
