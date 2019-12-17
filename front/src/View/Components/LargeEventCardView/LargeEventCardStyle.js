import { StyleSheet } from "react-native";

export const LatestEventStyle = StyleSheet.create({
  CardContainer: {
    backgroundColor: "#0000",
    width: "100%",
    height: "100%",
    alignSelf: "center",
    elevation: 1
  },

  ImageContainer: {
    width: "100%",
    height: "60%"
  },

  EventImage: {
    width: "100%",
    height: "100%"
  },

  EventInfo: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
    backgroundColor: "white"
  },

  dateContainer: {
    width: "25%",
    height: "100%"
  },

  detailsContainer: {
    width: "75%",
    height: "100%",
    padding: 20
  },

  EventMonth: {
    width: "100%",
    color: "red",
    fontSize: 25,
    textAlign: "center",
    marginTop: "25%"
  },

  EventDay: {
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  EventTitle: {
    fontSize: 25
  },

  EventHost: {
    color: "gray",
    fontSize: 20
  }
});