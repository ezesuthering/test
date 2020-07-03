//Config module mutations
export default {

    //Set the redditApiBaseUrl value
    setRedditApiBaseUrl(state, value) {
        state.redditApiBaseUrl = value;
    },

    //Set the appLoading value
    setAppLoading(state, value) {
        state.appLoading = value;
    }

}