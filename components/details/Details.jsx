/* import * as React from 'react'; */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Information from "./Information";
import Comics from "./Comics";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import apiParams from "../../config";
import axios from "axios";

const Stack = createBottomTabNavigator();

export default function Detail({ route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/characters/${route.params.id}`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setData(response.data.data.results[0]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Information"
      tabBarOptions={{
        activeTintColor: "darkred",
      }}
    >
      <Stack.Screen
        name="Information"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-circle"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <Information
              image={`${data?.thumbnail?.path}.${data.thumbnail.extension}`}
              name={data.name}
              description={data.description}
            />
          )
        }
      </Stack.Screen>
      <Stack.Screen
        name="Comics"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <Comics listComics={data?.comics?.items} />
          )
        }
      </Stack.Screen>
    </Stack.Navigator>
  );
}
