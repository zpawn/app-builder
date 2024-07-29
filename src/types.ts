import type { FC } from "react";

/** Common types */
export type Maybe<T> = T | undefined | null;

export type Dict<T> = Record<string, T>;

/** PageBuilder types */
type DefaultBlockConfig = {
  label?: string;
  full?: boolean;
  pathInStore?: string | string[];
  props?: { value?: unknown } & Dict<unknown>;
};

export type BlockConfig = DefaultBlockConfig & {
  type: keyof BlocksMap;
};

export type BlockSetConfig = DefaultBlockConfig & {
  type: keyof BlockSetsMap;
  config: Partial<Config>;
  title?: string;
};

export type BlockRules = {
  eq?: string;
};

export type BlocksMap = Dict<FC>;

export type BlockSetsMap = Dict<FC>;

export type Store = Dict<unknown>;

export type Config = {
  structure: Array<string[]>;
  blocks: Dict<BlockConfig | BlockSetConfig>;
};

export type BlocksBuilderProps = {
  config: Config;
  store?: Store;
  blocksMap?: BlocksMap;
  blockSetsMap?: BlockSetsMap;
};
