import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    marginRight: theme.spacing.medium,
  },
});

const AppBarTab = ({ title, onPress, linkTo }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Link to={linkTo} style={{ textDecoration: "none" }}>
        <Text color="white" fontWeight="bold">
          {title}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
