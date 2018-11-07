import React, {Component} from 'react';
import {TextInput, Image, View, ScrollView, Modal, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import getDataNews from '../actions/getDataNews'
import getDataSearch from '../actions/getDataSearch'

import Header from '../components/Header'
import Card from '../components/Card'
import ModalComp from '../components/Modal'

import axios from 'axios'

class Home extends Component {

  state = {
    search: "",
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
    this.props.getDataNews()
  }

  setDataSearch = (val) => {
    this.setState({
      search: val
    })
  }

  actionSearch = (keyword = this.state.search) => {
    this.props.getDataSearch(keyword)
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
          {this.props.news.map(item => 
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
        <View style={ boxContainer }>
          <TextInput
          style={ searchSection }
          placeholder="Search..."
          onChangeText={(val) => this.setDataSearch(val)}
          onSubmitEditing={() => this.actionSearch()}
          />
        </View>        
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
  },

}


const setStateToProps = (state) => {
  return ({
    news: state.ListNews.news
  })
}

const setDispatchToProps = (dispatch) => {
  return ({
    getDataNews: () => dispatch(getDataNews()),
    getDataSearch: (keyword) => dispatch(getDataSearch(keyword))
  })
}


export default connect(setStateToProps,setDispatchToProps)(Home)