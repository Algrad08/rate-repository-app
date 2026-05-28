import { useQuery } from "@apollo/client/react";

import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useAuthUser = () => {
  const { data, loading, error, refetch } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
  });
  return {
    username: data?.me?.username ?? null,
    data,
    loading,
    error,
    refetch,
  };
};

export default useAuthUser;
