import { isEmpty } from "lodash";
import type { Config } from "../types";

const validateConfig = (
  structure: Config["structure"],
  blocks: Config["blocks"],
): void => {
  if (!Array.isArray(structure) || isEmpty(structure)) {
    throw new Error("PageBuilder: wrong config - empty structure");
  }

  if (isEmpty(blocks)) {
    throw new Error("PageBuilder: wrong config - empty block");
  }
};

export { validateConfig };
