import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ProfileScreen() {
  // Example user data
  const profile = {
    bedNumber: "23B",
    wifiName: "UICT_Guest",
    wifiPassword: "kiraat2025",
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Yatak Numarası</Text>
        <Text style={styles.value}>{profile.bedNumber}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Wi-Fi Adı</Text>
        <Text style={styles.value}>{profile.wifiName}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Wi-Fi Şifresi</Text>
        <Text style={styles.value}>{profile.wifiPassword}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#007AFF",
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
});
