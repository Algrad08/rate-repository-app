import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: theme.spacing.medium,
    paddingLeft: theme.spacing.medium,
    backgroundColor: theme.colors.appBarBackground,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" linkTo="/" />
        <AppBarTab title="Sign In" linkTo="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
