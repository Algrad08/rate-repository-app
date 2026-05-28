import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($input: AuthenticateInput!) {
    authenticate(credentials: $input) {
      accessToken
    }
  }
`;
