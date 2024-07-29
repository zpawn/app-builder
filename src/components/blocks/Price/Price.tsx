import { get, isString, isPlainObject } from "lodash";
import { P5 } from "@deskpro/deskpro-ui";
import { formatPrice } from "../../../utils";
import type { FC } from "react";
import type { Dict } from "../../../types";

type Props = {
  value: Dict<string> | string;
  mapper?: {
    amount: string;
    currency: string;
  };
};

const Price: FC<Props> = ({ value, mapper }) => {
  let price = "-";

  if (isString(value)) {
    price = value;
  } else if (isPlainObject(value)) {
    const amount = get(value, [mapper?.amount || "amount"]);
    const currency = get(value, [mapper?.currency || "currency"]);

    price = formatPrice(amount, { currency });
  }

  return <P5>{price}</P5>;
};

export { Price };
