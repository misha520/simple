import { Color, Typography, TypographyProps } from "@material-ui/core";
import * as React from "react";

interface Props extends TypographyProps {
  component?: keyof HTMLElementTagNameMap;
  neutralColor?: keyof Color;
  htmlColor?: string;
  htmlFor?: string;
  fontSize?: number;
  fontWeight?: React.CSSProperties["fontWeight"];
}

const AppTypography: React.FC<Props> = ({
  htmlColor,
  neutralColor,
  style,
  variant,
  fontSize,
  fontWeight,
  ...props
}) => {
  const styles: React.CSSProperties = {
    color: htmlColor,
    fontSize,
    fontWeight,
    lineHeight: fontSize ? `${1.5 * fontSize}px` : undefined,
  };

  return <Typography style={{ ...styles, ...style }} {...props} />;
};

export default AppTypography;
