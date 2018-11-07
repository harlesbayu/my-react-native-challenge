import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';

function Card ({item, fn}) {

    const { 
      containerStyle, 
      cardSection, 
      thumbnailStyle, 
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      headerTextStyleFisrt } = styles

    return (
      
        <View style={containerStyle}>   

        <View style={cardSection}>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle} 
              source={{ uri: item.urlToImage }}
            />
          </View>
           
          <View style={headerContentStyle}>
            <Text style={headerTextStyleFisrt}>{ item.title }</Text>
            <Text style={headerTextStyle}>{ new Date(item.publishedAt).toDateString() }</Text>
          </View>
        </View>

        </View>
  
    );

}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSection: {
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative",
    paddingTop: 10,
    paddingBottom: 10
  },
  
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  thumbnailStyle: {
    width: 80,
    height:80
  },
  headerTextStyle: {
    fontSize: 12
  },
  headerTextStyleFisrt: {
    fontSize: 14,
    fontWeight: "bold"
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  }
}

export default Card