import { get, has } from "lodash";
import { renderRow, renderBlockSet, validateConfig } from "../../utils";
import { allBlocksMap } from "../blocks";
import { allBlockSetsMap } from "../blockSets";
import type { FC } from "react";
import type {
  Dict,
  BlocksMap,
  BlockConfig,
  BlockSetsMap,
  BlocksBuilderProps,
} from "../../types";

const BlocksBuilder: FC<BlocksBuilderProps> = ({
  store,
  config: { structure, blocks },
  blocksMap = allBlocksMap,
  blockSetsMap = allBlockSetsMap,
}) => {
  try {
    validateConfig(structure, blocks);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return null;
  }

  return (
    <div id="dp-blocks-builder" style={{ marginTop: 8, marginBottom: 8 }}>
      {structure.map((row) => {
        const isBlockSet = has(blockSetsMap, get(blocks, [row[0], "type"]));

        return isBlockSet
          ? renderBlockSet(
              row[0],
              blocks,
              blocksMap as BlocksMap,
              blockSetsMap as BlockSetsMap,
              store,
            )
          : renderRow(
              row,
              blocks as Dict<BlockConfig>,
              blocksMap as BlocksMap,
              store,
            );
      })}
    </div>
  );
};

export { BlocksBuilder };
