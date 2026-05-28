import { useMutation, useApolloClient } from "@apollo/client/react";

import useAuthStorage from "./useAuthStorage";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: { input: { username, password } },
      });
      await authStorage.setAccessToken(data.authenticate.accessToken);
      await apolloClient.resetStore();
    } catch (error) {
      console.error("Error signing in: ", error);
      throw error;
    }
  };
  return [signIn, result];
};

export default useSignIn;
