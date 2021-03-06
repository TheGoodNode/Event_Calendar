import React from "react";

//--------------IMPORTED COMPONENTS--------------
import SmallEventCard from "../Components/SmallEventCardView/SamllEventCardView.js";
//--------------IMPORTED COMPONENTS--------------

//--------------IMPORTED REACT NATIVE COMPONENTS--------------
import { View } from "react-native";
import { TouchableNativeFeedback } from "react-native";
//--------------IMPORTED REACT NATIVE COMPONENTS--------------

//importing stylesheet file
import { MapEventsStyle } from "./MapSmallCardEventsStyle.js";

/**
 *
 * @prop {String} Title - event title
 * @prop {String} Host - Host's name
 * @prop {Date} EventStartDate - Date/Time of the beginning of the event
 * @prop {Base64} ImageSrc - the base 64 that will be added to source image
 *
 * @class MapEvents
 * @extends {React.Component}
 */
class MapEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //props recieved by EventScreen Component
    const { EventsData, ...props } = this.props;

    //Styling variables
    const { MapEventsContainer } = MapEventsStyle;
    return (
      <View style={MapEventsContainer}>
        {EventsData.slice(1).map((event, index) => {
          return (
            <SmallEventCard
              key={index}
              EventId={event.EventId}
              Title={event.EventName}
              Host={event.HostName}
              EventStartDate={event.EventStartDate}
              ImageSrc={event.EventMainImage}
              {...props}
            />
          );
        })}
      </View>
    );
  }
}

export default MapEvents;
