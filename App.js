import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import CompanyList from "./components/CompanyList/CompanyList";

export default function App() {
  const [search, setSearch] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(
      `https://autocomplete.clearbit.com/v1/companies/suggest?query=${text}`
    )
      .then((res) => res.json())
      .then((data) => setSearch(data))
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "не удалось загрузить список компаний");
      });
  }, [text]);

  const handlePressName = (text) => {
    setText(text);
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appHeader}>Компания</Text>
      <TextInput
        style={styles.appInput}
        value={text}
        onChangeText={(event) => setText(event)}
      />
      {text ? (
        <CompanyList search={search} handlePressName={handlePressName} />
      ) : (
        ""
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  appHeader: {
    alignSelf: "flex-start",
    marginLeft: "10%",
    fontSize: 17,
  },

  appInput: {
    marginTop: 10,
    paddingLeft: 25,
    width: "80%",
    height: 40,
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e5e5e5",
  },
});
