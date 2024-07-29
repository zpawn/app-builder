import { get } from "lodash";
import * as faIcons from "@fortawesome/free-solid-svg-icons";
import * as faBrandIcons from "@fortawesome/free-brands-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import { Title as TitleSDK, Link } from "@deskpro/app-sdk";
import type { FC } from "react";

export type Props = {
  value: string;
  icon?: string;
  link?: string;
  to?: string;
};

const Title: FC<Props> = ({ value, link, to, icon, ...props }) => {
  const icons = { ...faIcons, ...faBrandIcons };
  const linkIcon = icon ? get(icons, [icon]) : undefined;

  return (
    <TitleSDK
      title={
        !to ? (
          value
        ) : (
          <Link as={RouterLink} to={to}>
            {value}
          </Link>
        )
      }
      {...(!link ? {} : { icon: linkIcon })}
      {...(!link ? {} : { link })}
      {...props}
    />
  );
};

export { Title };
