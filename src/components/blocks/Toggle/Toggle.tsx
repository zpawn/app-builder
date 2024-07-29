import { get, toLower } from "lodash";
import { Toggle as ToggleUI } from "@deskpro/deskpro-ui";
import type { FC } from "react";
import type { ToggleProps } from "@deskpro/deskpro-ui";
import type { BlockRules } from "../../../types";

export type Props = ToggleProps & {
  rules: BlockRules;
  value: string;
};

const Toggle: FC<Props> = ({ value, rules, ...props }) => (
  <ToggleUI
    checked={toLower(value) === toLower(get(rules, ["eq"]))}
    {...props}
  />
);

export { Toggle };
