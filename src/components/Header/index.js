import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

function Header (props){

    return (
      <View style={styles.viewStyle}>
        <Text style={styles.headerTitle}>{props.headerText}<Text style={styles.headerSpan}>{props.headerSpanText}</Text></Text>
      </View>
    );
  
}

const styles = StyleSheet.create ({
  viewStyle: {
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  headerTitle: {
    color: "#000000",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20
  },
  headerSpan: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontStyle: "italic"
  }
})

export default Header