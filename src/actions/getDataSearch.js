import axios from 'axios'

export default function (keyword) {
  console.log(keyword)
  return function(dispatch) {
    axios({
      method: 'get',
      url: `https://newsapi.org/v2/everything?domains=kompas.com&q=${keyword}&apiKey=7ba042fed326483f884b94c21fef40bf`
    })
      .then((response) => {
        dispatch({ type: "SET_STATE_NEWS", payload: response.data.articles })
      }).catch((err) => {
        
      });
  }

}