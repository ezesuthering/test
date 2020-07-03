//Topics module getters
export default {

    //Return topics
    getTopics(state) {
        return state.topics;
    },

    //Return nextPageId value
    getNextPageId(state) {
        return state.nextPageId;
    }

}