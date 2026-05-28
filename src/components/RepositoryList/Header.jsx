import { View, Image, StyleSheet } from "react-native";

import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  textContainer: {
    paddingLeft: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    flexGrow: 1,
    maxWidth: "80%",
  },
  image: {
    width: theme.imgSizes.normalWidth,
    height: theme.imgSizes.normalHeight,
    borderRadius: theme.borderRadius.classic,
  },
  rowBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexGrow: 1,
  },
});

const Header = ({ repository }) => {
  return (
    <View style={styles.rowBox}>
      <Image source={{ uri: repository.ownerAvatarUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text fontWeight="bold" fontSize="subheading">
          {repository.fullName}
        </Text>
        <Text color="secondary">{repository.description}</Text>
        <Text background="primary">{repository.language}</Text>
      </View>
    </View>
  );
};

export default Header;
