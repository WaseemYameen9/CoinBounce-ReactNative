import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Blog = (props: any) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Icon name="user" size={20} color="#ffffff" />
          </View>
        </View>
        <Text style={[styles.TextColorWhite]}>{props.author}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.TextColorWhite, styles.titleText]}>
          {props.title}
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.TextColorWhite}>
          {props.description}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ color: "green" }}>Read Time: 5 mins</Text>
        <Text style={{ color: "#1476D1" }}>{props.date}</Text>
      </View>
      <View style={styles.whiteLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextColorWhite: {
    color: "white",
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: {
    paddingVertical: 6,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#0000ff",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "800",
  },
  descriptionContainer: {
    marginBottom: 15,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  whiteLine: {
    height: 1,
    backgroundColor: "white",
    marginVertical: 10,
    opacity: 0.7
  },
});

export default Blog;
