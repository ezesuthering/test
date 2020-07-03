import axios from 'axios';

//Config module actions
export default {

    //Get REDDIT API BASE URL value from config file and update it in the module state
    refreshRedditApiBaseUrl({commit}) {
        axios.get('/static/config.json')
            .then((r) => {
                commit('setRedditApiBaseUrl', r.data.REDDIT_API_BASE_URL);
            }).catch((e) => {
                console.log(e)
            })
    }

}