import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  TouchableNativeFeedback,
  ListView,
  FlatList,
  StyleSheet
} from "react-native";

import { fetchAllEvents } from "../../../Controllers/EventController.js";

//-------------------IMPORTED COMPONENTS--------------------
import LatestEventCard from "../../Components/LargeEventCardView/LargeEventCardView.js";
import MapSmallCardEvent from "../../MapComponents/MapSmallCardEvents.js";
//-------------------IMPORTED COMPONENTS--------------------

//importing stylesheet file
import { EventScreenStyle } from "./EventScreenStyle.js";

/**
 *
 *
 * @class EventScreen
 * @extends {React.Component}
 */
class EventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EventsData: []
    };
  }

  async componentDidMount() {
    await this.getEvents();
  }

  /**
   * @function getEvents using the route controller from EventController.js to retrieve events
   *
   * @memberof EventScreen
   */
  getEvents = async () => {
    const EventsData = await fetchAllEvents();
    this.setState({ EventsData });
  };

  render() {
    const { EventsData } = this.state;
    console.log(EventsData);

    //Styling variables
    const {
      ScreenContainer,
      ScrollViewStyle,
      BackgroundIntro,
      WelcomeText,
      latestEventPos
    } = EventScreenStyle;

    // if not loading to return the Latest event component(LatestEventCard.js)
    let latestEvent;
    if (EventsData.length != 0) {
      latestEvent = (
        <LatestEventCard
          EventTitle={EventsData[0].EventName}
          HostName={EventsData[0].HostName}
          EventStartDate={EventsData[0].EventStartDate}
        />
      );
    } else {
      latestEvent = <Text>Loading...</Text>;
    }
    return (
      <View style={ScreenContainer}>
        <View>
          <ScrollView style={ScrollViewStyle}>
            {/*------------------INTRO SECTION-----------------------*/}
            <View style={BackgroundIntro}>
              <Text style={WelcomeText}>Welcome back,{"\n"} William</Text>
            </View>
            {/*------------------INTRO SECTION-----------------------*/}

            {/*---------------LATEST EVENT CARD-----------------------*/}
            <View>
              <View style={latestEventPos}>{latestEvent}</View>
            </View>
            {/*---------------LATEST EVENT CARD-----------------------*/}

            {/*-------------------Display all upcoming events--------------------*/}
            <MapSmallCardEvent EventsData={EventsData} />
            {/*-------------------Display all upcoming events--------------------*/}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default EventScreen;
