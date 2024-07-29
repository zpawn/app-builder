import { Text } from "./Text";
import { Tags } from "./Tags";
import { Toggle } from "./Toggle";
import { Title } from "./Title";
import { Price } from "./Price";
import { Divider } from "./Divider";

const allBlocksMap = {
  text: Text,
  tags: Tags,
  title: Title,
  price: Price,
  toggle: Toggle,
  divider: Divider,
};

export { allBlocksMap, Text, Tags, Toggle, Title, Price, Divider };
