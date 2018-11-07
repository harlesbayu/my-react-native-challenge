import React, {Component} from 'react';
import {AsyncStorage, TextInput, View, ScrollView, TouchableOpacity, Text} from 'react-native';

import Header from '../components/Header'
import Card from '../components/Card'
import ModalComp from '../components/Modal'

import axios from 'axios'

class MyList extends Component {

  state = {
    search: "",
    myNews: [],
    newsDetail: "",
    modalVisible: false,
  }

  setModalVisible(visible, titleNews) {
    
    if(titleNews){
      this.getDetail(titleNews)
      this.setState({
        modalVisible: visible,
      });
    } else {
      this.setState({
        modalVisible: visible,
        newsDetail: ""
      });
    }
    
  }

  componentDidMount = () => {
    this.getMyNews()
  }

  getMyNews = () => {
    AsyncStorage.getItem('mynews', (error, result) => {
      if (result) {
        this.setState({
          myNews: JSON.parse(result)
        })
      }
    });
  }

  getDetail = (titleNews) => {
    axios({
      method: 'GET',
      url: `https://newsapi.org/v2/everything?domains=kompas.com&q=${titleNews}&apiKey=7ba042fed326483f884b94c21fef40bf`
    })
      .then((response) => {
        let news = []

        if(response.data.articles.length > 0) {
          news = response.data.articles[0]
        }
        this.setState({
          newsDetail: news
        })

      }).catch((err) => {});
  }

  renderNewsList = () => {
    return (
      <ScrollView>
          {this.state.myNews.map(item => 
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true, item.title);
              }}>
                <Card key={item.title} item={item}/>
            </TouchableOpacity>
          )}
      </ScrollView>
    )
  }

  render() {

    const { newsDetail } = this.state
    const {
      boxContainer, 
      searchSection } = styles
    return (
      <View>
        <Header headerText={'HBANEWS'} headerSpanText={'.com'}/>
           
        { this.renderNewsList() }

        <ModalComp data={newsDetail} modalVisible={this.state.modalVisible} fn={() => this.setModalVisible(false,null)}/>
      </View>
    );
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
    borderRadius: 8
  },
  searchSection: {
    height: 40,
    fontSize: 16
  }
}


export default MyList