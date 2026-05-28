import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import Text from ".././Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    marginRight: theme.spacing.medium,
  },
});

const AppBarTab = ({ title, onPress, linkTo }) => {
  return (
    <Link to={linkTo} component={Pressable} onPress={onPress}>
      <Text color="white" fontWeight="bold" style={styles.container}>
        {title}
      </Text>
    </Link>
  );
};

export default AppBarTab;
