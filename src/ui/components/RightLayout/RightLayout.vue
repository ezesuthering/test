<template>
    <TopicContent :topic="topic" />
</template>

<script>
import TopicContent from '@/ui/components/RightLayout/TopicContent/TopicContent';

//RightLayout component
export default {
    name: 'RightLayout',
    components: {
        TopicContent
    },
    computed: {
        topic: {
            get() {
                return this.readTopic();
            }
        }
    },
    methods: {
        readTopic() {
                let id = this.$route.params.id;
                let topic = this.getTopicById(id);
                if(!topic) {
                    this.$router.push('/')
                     if (window.innerWidth < window.innerHeight) {
                            this.$store.dispatch('menu/activateMenu')
                         }   
                }
                this.markTopicAsRead(id);
                return topic;
        },
        getTopicById(id) {
            let topics = this.$store.getters['topics/getTopics'];
            let topicIndex = topics.findIndex(topic => topic.data.id == id);
            return topics[topicIndex];
        },
        markTopicAsRead(id) {
            this.$store.dispatch('topics/markTopicAsRead', {id});
        }
    }
}
</script>
