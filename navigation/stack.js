import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/postScreen";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={TabNavigator}></Stack.Screen>
      <Stack.Screen name="postScreen" component={PostScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
