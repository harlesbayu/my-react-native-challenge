<FlatList
    data={this.props.news}
    renderItem={({item}) => <Card item={item}/>}
  />



<View style={headDetailContainer}>

<TouchableOpacity
    style={headerItem}
    activeOpacity={1}
    onPress={() => {
      this.setModalVisible(false, null);
    }}>
    <Text>Hide Modal</Text>
  </TouchableOpacity>

<Text style={headerTitle}>HBANEWS<Text style={headerSpan}>.com</Text></Text>

</View>

<ScrollView>
<View>
<View>
  <View style={boxContainer}>
    <Image
      style={imageDetail} 
      source={{ uri: newsDetail.urlToImage }}
    />
    <Text> { newsDetail.title } </Text>
    <Text> { new Date(newsDetail.publishedAt).toDateString() } </Text>
    <Text> { newsDetail.description } </Text>
    <Text> { newsDetail.content } </Text>
  </View>

</View>
</View>

</ScrollView>
