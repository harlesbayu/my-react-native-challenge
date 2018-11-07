import React, { Component } from 'react';
import {AsyncStorage, Button, Image, View, ScrollView, Modal, Text, TouchableOpacity} from 'react-native';

class ModalComp extends Component {
  
  constructor (props) {
    super(props)

    this.state = {}
  }


  bookmarkNews = () => {
    AsyncStorage.getItem('mynews', (error, result) => {
      console.log("start")
      if(result){
        console.log("masuk" === 1)
        if (JSON.parse(result).length > 0) {
          let newResult = JSON.parse(result)
  
          pos = newResult.map(function(e) { return e.title; }).indexOf(this.props.data.title);
  
          if(pos === -1) {
            newResult.push(this.props.data)
            AsyncStorage.setItem('mynews', JSON.stringify(newResult));
          }
  
        }
      } else {
        let data = [ this.props.data ]
        AsyncStorage.setItem('mynews', JSON.stringify(data));
      }
    });
    
  }


  render() {

    const { modalVisible, data, fn } = this.props

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        
        <View style={styles.headDetailContainer}>
  
          <TouchableOpacity
              style={styles.headerItem}
              activeOpacity={1}
              onPress={() => fn() }>
              <View style={{ 
                backgroundColor: "#FFFFFF",
                marginLeft: 10,
                marginRight: 10,
                width: 34,
                height: 34,
                borderRadius: 34/2,
                justifyContent: "center"
              }}>
                <Text style={{ 
                  color: "#FF9800", 
                  textAlign: "center",
                  fontSize: 20,
                  alignSelf: "center" }}>{"<"}
                </Text>
              </View>   
            </TouchableOpacity>
  
          <Text style={styles.headerTitle}>HBANEWS<Text style={styles.headerSpan}>.com</Text></Text>
  
          <TouchableOpacity
            onPress={() => this.bookmarkNews()}
            style={{
              position: "absolute",
              right: 30,
              top: 30,
              padding: 4,
              borderRadius: 5,
              backgroundColor: "#FFFFFF"
            }}
          >
            <Image source={require('./img/bookmark-64.png')} 
              style={{ 
              width: 30,
              height: 30,
              resizeMode: 'contain' }}/>
          </TouchableOpacity>
  
        </View>
  
        <ScrollView>
          <View>
            <View style={styles.boxContainer}>
              <Image
                style={styles.imageDetail} 
                source={{ uri: data.urlToImage }}
              />
              <Text style={styles.title}> { data.title } </Text>
              <Text style={styles.date}> { new Date(data.publishedAt).toDateString() } </Text>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  marginBottom: 10
                }}
              />
              <Text style={styles.desc}> { data.description } </Text>
              <Text style={styles.desc}> { data.content } </Text>
            </View>
  
          </View>
        </ScrollView>
  
      </Modal>
    )
  }

}

const styles = {
  boxContainer: {
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
    marginTop: 10,
    borderRadius: 8,
    padding:10
  },
  headDetailContainer: {
    backgroundColor: "#FF9800",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
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
    alignSelf: "center",
    color: "#000000",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20
  },
  headerSpan: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontStyle: "italic"
  },
  headerItem: {
    alignSelf: "center",
  },
   imageDetail: {
    width: "100%",
    height: 200
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    textAlign: 'justify'
  },
  date: {
    fontSize: 10,
    color: "#666",
    marginTop: 10,
    marginBottom: 10
  },
  desc: {
    textAlign: 'justify'
  }
}

export default ModalComp