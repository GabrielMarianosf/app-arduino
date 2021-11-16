import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, TouchableHighlight, StyleSheet } from "react-native";

const Stack = createStackNavigator();

import Home from "./pages/home";
import Config from "./pages/config";

const Routes2 = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Chácara Guarujá",
          headerStyle: {
            backgroundColor: "#00FF7F",
          },
          headerTintColor: "white",
          headerLeft: () => (
            <TouchableHighlight
              style={styles.img}
              onPress={() => navigation.openDrawer()}
            >
              <Image
                source={require("../assets/android/drawable-xxxhdpi/hamburguer.png")}
              />
            </TouchableHighlight>
          ),
        }}
      />
      <Stack.Screen
        name="Config"
        component={Config}
        options={{
          title: "Configurações",
          headerStyle: {
            backgroundColor: "#00FF7F",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};

const Routes3 = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Config"
        component={Config}
        options={{
          title: "Configurações",
          headerStyle: {
            backgroundColor: "#00FF7F",
          },
          headerTintColor: "white",
          headerLeft: () => (
            <TouchableHighlight
              style={styles.img}
              onPress={() => navigation.openDrawer()}
            >
              <Image
                source={require("../assets/android/drawable-xxxhdpi/hamburguer.png")}
              />
            </TouchableHighlight>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export { Routes2, Routes3 };

const styles = StyleSheet.create({
  img: {
    left: 15,
  },
});
