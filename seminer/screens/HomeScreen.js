import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* 🔹 Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }} // random image
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>xxxxxxxxx</Text>
        <Text style={styles.locationText}>Gauteng</Text>
        <Text style={styles.idText}>87432984203</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  profileHeader: {
    width: width - 20, // responsive width with 10px margin on each side
    marginVertical: 10, // 10px top and bottom
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 20, // more padding for bigger look
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  profileImage: {
    width: 140, // bigger image
    height: 140,
    borderRadius: 70,
    marginBottom: 15,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 5,
  },
  locationText: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  idText: {
    fontSize: 16,
    color: "#333",
  },
});
