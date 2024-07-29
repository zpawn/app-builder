import { get, size } from "lodash";
import { HorizontalDivider } from "@deskpro/app-sdk";
import { renderRow } from "../../../utils";
import { Text, Title } from "../../blocks";
import type { FC } from "react";
import type { Store, BlocksMap, BlockSetConfig } from "../../../types";

type Props = {
  blockSetConfig: BlockSetConfig;
  blocksMap: BlocksMap;
  store?: Store;
};

const Iterable: FC<Props> = ({ blockSetConfig, blocksMap, store }) => {
  const items = get(store, get(blockSetConfig, ["pathInStore"], ""), []) || [];
  const title = get(blockSetConfig, ["title"], "");
  const structure = get(blockSetConfig, ["config", "structure"], []);
  const blocks = get(blockSetConfig, ["config", "blocks"], {});

  return (
    <section>
      {!size(items) ? (
        <Text value="No found" />
      ) : (
        <>
          {title && (
            <div style={{ paddingLeft: 8, paddingRight: 8 }}>
              <Title value={`${title} (${size(items)})`} />
            </div>
          )}
          {items.map((item: Store) => (
            <>
              {structure.map((row) => renderRow(row, blocks, blocksMap, item))}
              <HorizontalDivider style={{ margin: 8 }} />
            </>
          ))}
        </>
      )}
    </section>
  );
};

export { Iterable };
