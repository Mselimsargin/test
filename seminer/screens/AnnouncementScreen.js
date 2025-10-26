import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Example announcement data
const announcements = [
  {
    title: "Seminar Update",
    content: "The seminar will start at 09:00 instead of 08:30. Please be on time.",
  },
  {
    title: "New Workshop",
    content: "A new workshop on advanced Kıraat techniques has been added at Room 102.",
  },
  {
    title: "Lunch Arrangement",
    content: "Lunch will be served at 12:30 in the main hall. Vegetarian options available.",
  },
];

export default function AnnouncementScreen() {
  return (
    <ScrollView style={styles.container}>
      {announcements.map((item, index) => (
        <View key={index} style={styles.announcementBox}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.contentText}>{item.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  announcementBox: {
    backgroundColor: "#00103b",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },
  contentText: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 20,
  },
});
