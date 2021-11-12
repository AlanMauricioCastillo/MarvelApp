import * as React from "react";
import { View, ScrollView, ActivityIndicator, FlatList, StyleSheet, Dimensions } from "react-native";
import CharacterCard from "./CharacterCard";
import apiParams from "../config.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(100);
  const { ts, apikey, hash, baseURL } = apiParams;
  //let onEndReachedCalledDuringMomentum = true;

    const getData = () => {
      console.log("getData", limit);
      axios.get(`${baseURL}/v1/public/characters?limit=${limit}`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setData(response.data.data.results))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

  useEffect(() => {
    if (search === "") {
      getData();
    }
  }, [search]);

  function searchCharacter() {
    if(search) {
      setLoading(true);
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          nameStartsWith: search
        }
      })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  }

  /* const hendleMore = () => {
    if(limit <= 100) {
      setLimit(limit + 10);
      getData();
    }
  } */
  

  return (
    <ScrollView >
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <ScrollView style={{flex: 1, height: Dimensions.get('window').height}}>
          <Searchbar
            placeholder="Search character..."
            onChangeText={(value) => setSearch(value)}
            value={search}
            onIconPress={searchCharacter}
            onSubmitEditing={searchCharacter}
          />
          <FlatList
            style={styles.container}
            data={data}
            keyExtractor={({ id }) => id.toString()}
            //onMomentumScrollBegin={() => {
            //  console.log("onMomentumScrollBegin");
              //onEndReachedCalledDuringMomentum = false;
            //}}
            //onEndReached={(e) => {
            //  console.log(e.distanceFromEnd);
            //  if (e.distanceFromEnd > 0) return;
            //  else hendleMore();
            //  }}
            onEndReachedThreshold={0}
            renderItem={({ item }) => (
              <CharacterCard
                id={item.id}
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                name={item.name}
              />
            )}
          />
        </ScrollView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
});
