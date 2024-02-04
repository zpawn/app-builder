import styled from "styled-components";
import type { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    variant?: "primary"|"secondary"|"teritiary";
}>;

const handleVariant = (color?: Props["variant"]): string => {
  switch (color) {
      case "primary":
          return "blue";
      case "secondary":
          return "brown";
      default:
          return "grey";
  }
};

const ButtonStyled = styled.button<{ $variant: Props["variant"] }>`
  background: ${({ $variant }) => handleVariant($variant)};
  color: white;
`;

const Button: FC<Props> = (props) => {
  const { children, variant = "primary" } = props;
    return (
        <ButtonStyled $variant={variant}>{children}</ButtonStyled>
    )
}

export { Button };
