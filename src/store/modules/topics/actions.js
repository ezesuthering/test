import RedditServices from '../../../services/RedditServices';

//Topics module actions
export default {

    //Fetch topics from Reddit API
    fetchTopics({commit}, payload) {
        return new Promise((resolve, reject) => {
            RedditServices.getTopPosts(payload)
            .then((r) => {
                commit('setTopics', r.data.data.children);
                commit('setNextPageId', r.data.after)
                resolve()
            }).catch((e) => {
                console.log(e)
                reject(e)
            })
        })
        
    },

    //Find topic index by id, and send it to the 'setTopicAsDismissed' mutation.
    dismissTopic({commit, state}, payload) {
        let topicIndex = state.topics.findIndex(topic => topic.data.id == payload.id);
        commit('removeTopicFromTopics', topicIndex)
    },

    //Find topic index by id, and send it to the 'setTopicAsRead' mutation.
    markTopicAsRead({commit, state}, payload) {
        let topicIndex = state.topics.findIndex(topic => topic.data.id == payload.id);
        commit('setTopicVisited', topicIndex)
    },

    //Reset topics array
    dismissAllTopics({commit}) {
        commit('setTopics', []);
    }

}