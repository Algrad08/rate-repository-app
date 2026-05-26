import { View, StyleSheet } from "react-native";

import Header from "./Header";
import Stats from "./Stats";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.white,
  },
});

const Item = ({ repository }) => {
  return (
    <View style={styles.container}>
      <Header repository={repository} />
      <Stats repository={repository} />
    </View>
  );
};

export default Item;
