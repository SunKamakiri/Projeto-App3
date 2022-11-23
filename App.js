import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from './screens/Login';
import Home from "./screens/Home";

export default function App() {
  return (
    <AppNavigator/>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  //Login: Login,
  Home: Home
})

const AppNavigator = createAppContainer(AppSwitchNavigator)