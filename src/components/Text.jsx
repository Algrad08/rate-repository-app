import { Text as NativeText, StyleSheet, Platform } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.select({
      ios: theme.fonts.ios,
      android: theme.fonts.android,
      default: theme.fonts.main,
    }),
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextWhite: {
    color: theme.colors.white,
  },
  colorTextError: {
    color: theme.colors.error,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  fontInCenter: {
    textAlign: theme.fontAlignments.center,
  },
  textPrimaryBackground: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.small,
    borderRadius: theme.borderRadius.classic,
    alignSelf: "flex-start",
  },
});

const Text = ({
  color,
  fontSize,
  fontWeight,
  background,
  textAlign,
  style,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "white" && styles.colorTextWhite,
    color === "error" && styles.colorTextError,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    background === "primary" && styles.textPrimaryBackground,
    textAlign === "center" && styles.fontInCenter,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
