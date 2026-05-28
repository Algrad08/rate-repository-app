import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import useSignOut from "../../hooks/useSignOut";
import useAuthUser from "../../hooks/useAuthUser";
import AppBarTab from "./AppBarTab";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: theme.spacing.medium,
    paddingLeft: theme.spacing.medium,
    backgroundColor: theme.colors.appBarBackground,
  },
});

const AppBar = () => {
  const { username } = useAuthUser();
  const logout = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" linkTo="/" />
        {username ? (
          <AppBarTab title="Sign Out" linkTo="/" onPress={logout} />
        ) : (
          <AppBarTab title="Sign In" linkTo="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
