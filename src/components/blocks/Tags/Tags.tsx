import { size } from "lodash";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Stack, Tag, lightTheme } from "@deskpro/deskpro-ui";
import type { FC } from "react";
import type { AnyIcon } from "@deskpro/deskpro-ui";

export type Props = {
  value: string[];
};

const Tags: FC<Props> = ({ value }) => {
  if (!Array.isArray(value) || !size(value)) {
    return <>-</>;
  }

  return (
    <Stack gap={6} wrap="wrap">
      {value.map((tag) => (
        <Tag
          key={tag}
          color={{
            borderColor: lightTheme.colors.grey80,
            backgroundColor: `${lightTheme.colors.grey80}33`,
            textColor: lightTheme.colors.grey80,
          }}
          label={tag}
          closeIcon={faTimes as AnyIcon}
        />
      ))}
    </Stack>
  );
};

export { Tags };
