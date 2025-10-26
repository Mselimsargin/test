import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function MenuScreen() {
  // Menu items
  const breakfastItems = [
    "Çay", "Yeşil Zeytin", "Beyaz Peynir", "Çikolata", "Reçel",
    "Domates", "Salatalık", "Kızartma", "Mantar Sote", "Kek", "Menemen"
  ];

  const dinnerItems = [
    "Mercimek Çorbası", "Zeytinyağlı", "Etli Kuru Fasulye", "İrmik Tatlısı", "Keşkek"
  ];

  // Render items in two columns
  const renderItems = (items) => {
    return items.map((item, index) => (
      <View key={index} style={styles.itemBox}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {/* 🔹 Date Title */}
      <Text style={styles.dateText}>25.10.2025 Pazartesi</Text>

      {/* 🔹 Breakfast */}
      <View style={styles.mealContainer}>
        <Text style={styles.mealTitle}>Kahvaltı</Text>
        <View style={styles.itemsWrapper}>
          {renderItems(breakfastItems)}
        </View>
      </View>

      {/* 🔹 Dinner */}
      <View style={styles.mealContainer}>
        <Text style={styles.mealTitle}>Akşam Yemeği</Text>
        <View style={styles.itemsWrapper}>
          {renderItems(dinnerItems)}
        </View>
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
  dateText: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#007AFF",
  },
  mealContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  itemsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemBox: {
    width: "50%", // two columns
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    color: "#555",
  },
});
