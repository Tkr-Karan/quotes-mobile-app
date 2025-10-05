import { StyleSheet, Text, View } from "react-native";

const settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>settings</Text>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  link: {
    border: "2px solid black",
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "lightgrey",
    padding: 10,
    marginTop: 20,
  },
});
