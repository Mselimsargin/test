import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import ProgramScreen from "./screens/ProgramScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AnnouncementScreen from "./screens/AnnouncementScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* 🔹 Bottom Navbar */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#00103b",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "home";
            else if (route.name === "Menu") iconName = "list";
            else if (route.name === "Program") iconName = "calendar";
            else if (route.name === "Profile") iconName = "person";
            else if (route.name === "Announcements") iconName = "notifications";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Program" component={ProgramScreen} />
        <Tab.Screen name="Announcements" component={AnnouncementScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

      {/* 🔹 Seminar Title Above Navbar, Centered */}
      <View style={styles.seminarTitleContainer}>
        <Text style={styles.seminarTitleText}> Mıntıka Sekretarya Eğitim Semineri</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  seminarTitleContainer: {
    position: "absolute",
    bottom: 70, // height above navbar
    width: "100%", // full width
    alignItems: "center", // center content horizontally
  },
  seminarTitleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00103b",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
    textAlign: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
});
