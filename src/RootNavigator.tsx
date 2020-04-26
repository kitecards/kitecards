import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { StoresScreen } from "./screens/StoresScreen";
import { useTheme } from "react-native-paper";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const StoresStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const StoresStackScreen: React.FC = () => {
  return (
    <StoresStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StoresStack.Screen name="Stores" component={StoresScreen} />
    </StoresStack.Navigator>
  );
};

const ProfileStackScreen: React.FC = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export const RootNavigator: React.FC = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        initialRouteName="Cards"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            if (route.name === "Cards") {
              iconName = "ios-card";
            } else if (route.name === "Stores") {
              iconName = "ios-basket";
            } else {
              iconName = "ios-person";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Stores" component={StoresStackScreen} />
        <Tab.Screen name="Cards" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
