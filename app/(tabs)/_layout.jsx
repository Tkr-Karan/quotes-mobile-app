import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "lightgrey",
        tabBarStyle: {
          backgroundColor: "#1e293b",
          borderTopColor: "lightgrey",
          borderStyle: "solid",
          borderTopWidth: 2,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color: color, fontSize: size }}>🏠</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color: color, fontSize: size }}>⚙️</Text>
          ),
        }}
      />
    </Tabs>
  );
}
