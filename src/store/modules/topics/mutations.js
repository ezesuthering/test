import Vue from 'vue'

//Menu module mutations
export default {

    //Set topics value
    setTopics(state, value) {
        state.topics = value;
    },

    //Push value to topics array
    setMoreTopics(state, value) {
        state.topics = [...state.topics, ...value];
    },

    //Set nextPageId value
    setNextPageId(state, value) {
        state.nextPageId = value;
    },

    //Remove topic from topics
    //Param @value index to remove
    removeTopicFromTopics(state, value) {
        state.topics.splice(value, 1);
    },

    //Set topic visited attribute to true
    //Param @value index to modify
    setTopicVisited(state, value) {
        Vue.set(state.topics[value], 'visited', true)
    },

    setPageNumber(state, value) {
        state.pageNumber = value;
    }

}