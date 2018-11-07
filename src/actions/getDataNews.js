import axios from 'axios'

export default function (state) {

  return function(dispatch) {
    
    axios({
      method: "GET",
      url: "https://newsapi.org/v2/everything?domains=kompas.com&apiKey=7ba042fed326483f884b94c21fef40bf"
    })
      .then((result) => {
        dispatch({ type: "SET_STATE_NEWS", payload: result.data.articles })
      }).catch((err) => {
        
      });
    }

}