//Topics module actions
export default {

    loadTopics({commit}, payload) {
        commit('setTopics', payload);
    },

    markTopicAsRead({commit}, payload) {
        commit('setTopicAsRead', payload);
    }
}