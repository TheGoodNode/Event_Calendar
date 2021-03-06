import React from "react";
import { View, Image, Text } from "react-native";

import dateFormat from "dateformat";

//-------------------IMPORTED REACT NATIVE COMPONENTS---------------
import { TouchableNativeFeedback } from "react-native";
//-------------------IMPORTED REACT NATIVE COMPONENTS---------------

//import stylesheet file
import { LatestEventStyle } from "./LargeEventCardStyle.js";

/**
 *
 * @class LargeEventCardView
 * @extends {Component}
 *
 * @prop {string} EventTitle - Title displayed for event
 * @prop {string} HostName - Name of the event host
 * @prop {Date} EventStartDate
 */
class LargeEventCardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //importing style variables
    const {
      CardContainer,
      ImageContainer,
      EventImage,
      EventInfo,
      dateContainer,
      detailsContainer,
      EventMonth,
      EventDay,
      EventTitleStyle,
      EventHost,
      HostNameText
    } = LatestEventStyle;

    //static image
    let Image_Http_URL = {
      uri:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
    };

    //receiving props from controller
    const { EventTitle, HostName, EventStartDate, ImageSrc } = this.props;

    //adding the bas64 image to be able to show the image in source
    let ImageUrl = "data:image/png;base64," + ImageSrc + ";";
    return (
      <View style={CardContainer}>
        <View style={ImageContainer}>
          <Image
            source={ImageSrc ? { uri: ImageUrl } : Image_Http_URL}
            style={EventImage}
          />
        </View>
        <View style={EventInfo}>
          <View style={dateContainer}>
            {/*=Displaying the start Month (Dec)*/}
            <Text style={EventMonth}>{dateFormat(EventStartDate, "mmm")}</Text>
            {/*=Displaying the start Day (05)*/}
            <Text style={EventDay}>{dateFormat(EventStartDate, "dd")}</Text>
          </View>
          <View style={detailsContainer}>
            <Text style={EventTitleStyle}>{EventTitle}</Text>
            <Text style={EventHost}>
              by <Text style={HostNameText}>{HostName}</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default LargeEventCardView;
