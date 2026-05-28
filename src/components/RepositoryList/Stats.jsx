import { View, StyleSheet } from "react-native";

import Text from "../Text";

const styles = StyleSheet.create({
  rowBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexGrow: 1,
  },
  columnBox: {
    flexDirection: "column",
    alignItems: "center",
  },
});

const Stats = ({ repository }) => {
  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <View style={styles.rowBox}>
      <View style={styles.columnBox}>
        <Text fontWeight="bold">{formatCount(repository.stargazersCount)}</Text>
        <Text color="textSecondary">Stars</Text>
      </View>
      <View style={styles.columnBox}>
        <Text fontWeight="bold">{formatCount(repository.forksCount)}</Text>
        <Text color="textSecondary">Forks</Text>
      </View>
      <View style={styles.columnBox}>
        <Text fontWeight="bold">{formatCount(repository.reviewCount)}</Text>
        <Text color="textSecondary">Reviews</Text>
      </View>
      <View style={styles.columnBox}>
        <Text fontWeight="bold">{repository.ratingAverage}</Text>
        <Text color="textSecondary">Rating</Text>
      </View>
    </View>
  );
};

export default Stats;
