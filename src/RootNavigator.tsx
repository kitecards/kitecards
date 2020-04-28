import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { PromosScreen } from "./screens/PromosScreen";
import { useTheme } from "react-native-paper";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const PromosStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowOffset: { height: 0, width: 0 },
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "My Rewards" }}
      />
    </HomeStack.Navigator>
  );
};

const PromosStackScreen: React.FC = () => {
  return (
    <PromosStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowOffset: { height: 0, width: 0 },
        },
      }}
    >
      <PromosStack.Screen name="Promos" component={PromosScreen} />
    </PromosStack.Navigator>
  );
};

const ProfileStackScreen: React.FC = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          shadowOffset: { height: 0, width: 0 },
        },
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export const RootNavigator: React.FC = () => {
  const { dark, colors } = useTheme();
  const navigationTheme = dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        initialRouteName="Cards"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Cards") {
              return <MaterialCommunityIcons name="cards" size={size} color={color} />
            } else if (route.name === "Promos") {
              return <MaterialCommunityIcons name="sale" size={size} color={color} />
            } else {
              return <Ionicons name="ios-person" size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{ showLabel: false, activeTintColor: colors.primary }}
      >
        <Tab.Screen name="Promos" component={PromosStackScreen} />
        <Tab.Screen name="Cards" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
