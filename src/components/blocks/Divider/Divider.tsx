import { HorizontalDivider } from "@deskpro/app-sdk";
import type { FC } from "react";

type Props = {
  marginBottom?: number;
};

const Divider: FC<Props> = ({ marginBottom = 10 } = {}) => (
  <HorizontalDivider style={{ marginBottom }} />
);

export { Divider };
