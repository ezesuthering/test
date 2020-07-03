import axios from 'axios';
import store from './../store/index';

//Class RedditServices
//Contains handlers for Reddit API calls.
class RedditServices {
    constructor() {}
    
    //Request reddit top posts
    //Param @payload expected limit attr as quantity of posts to fetch e.g: { limit: 50 } 
    getTopPosts(payload) {
        return new Promise((resolve, reject) => {
            let baseUrl = store.getters['config/getRedditApiBaseUrl'];
            axios.get(`${baseUrl}/r/all/top.json?limit=${payload.limit}`)
                .then((r) => {
                    resolve(r)
                }).catch((e) => {
                    console.log(e)
                    reject(e)
                })
        })
    }

}

export default new RedditServices();