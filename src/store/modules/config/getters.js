//Config module getters
export default {

    //Return the redditApiBaseUrl value
    getRedditApiBaseUrl(state) {
        return state.redditApiBaseUrl;
    },

    //Return appLoading value
    getAppLoading(state) {
        return state.appLoading;
    }

}