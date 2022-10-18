import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function CompanyList({ search, handlePressName }) {
  return (
    <View style={styles.companyListContainer}>
      <FlatList
        style={styles.companyList}
        data={search}
        keyExtractor={(id, index) => index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePressName(`${item.name}`)}
            style={styles.touchableCompanyWrapper}
          >
            <Image
              style={styles.companyLogo}
              source={{ uri: `${item.logo}` }}
            />
            <View style={styles.companyTextContainer}>
              <Text style={styles.companyName}>{item.name}</Text>
              <Text>{item.domain}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  companyListContainer: {
    width: "80%",
  },

  companyList: {
    padding: 20,
    border: "solid",
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 5,
    shadowColor: "#000",
    shadowColor: "#171717",
  },

  touchableCompanyWrapper: {
    flexDirection: "row",
    margin: 5,
  },

  companyLogo: {
    height: 50,
    width: 50,
  },

  companyTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20,
  },

  companyName: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
