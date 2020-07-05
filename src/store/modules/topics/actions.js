import RedditServices from '../../../services/RedditServices';

//Topics module actions
export default {

    //Fetch topics from Reddit API
    fetchTopics({commit}, payload) {
        return new Promise((resolve, reject) => {
            RedditServices.getTopPosts(payload)
            .then((r) => {
                commit('setPageNumber', 0);
                commit('setTopics', r.data.data.children);
                commit('setNextPageId', r.data.data.after)
                resolve()
            }).catch((e) => {
                console.log(e)
                reject(e)
            })
        })
    },

    //Fetch more topics from Reddit API. It will only be executed once to get 50 results. 
    fetchMoreTopics({commit, state}, payload) {
        return new Promise((resolve, reject) => {
            let end = state.pageNumber == 1;
            let payload_after = payload;
            payload_after.after = state.nextPageId;
            if(!end) { //Without this validation, infinite scroll will work.
                RedditServices.getTopPosts(payload_after)
                .then((r) => {
                    commit('setPageNumber', 1);
                    commit('setMoreTopics', r.data.data.children);
                    commit('setNextPageId', r.data.after)
                    resolve(end)
                }).catch((e) => {
                    console.log(e)
                    reject(e)
                })
            } else {
                resolve(end)
            }
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