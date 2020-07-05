<template>
    <div @click="desactivateMenuOnPortrait" class="right-layout-wrapper">
    <TopicContent v-if="topic" :topic="topic" />
    </div>
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
                    this.activateMenuOnPortrait()
                    return;
                }

                if(this.$route.path !== '/') {
                    this.markTopicAsRead(id);
                }

                if(topic.data.preview) {
                    topic.fullImage = this.formatFullImageUrl(topic.data.preview.images[0].source.url)
                } 

                return topic;
        },
        formatFullImageUrl(url) {
            return url.replace('amp;s', 's').replace('amp;', '');
        },
        activateMenuOnPortrait() {
            if (window.innerWidth < window.innerHeight) {
                            this.$store.dispatch('menu/activateMenu')
            }  
        },
        getTopicById(id) {
            let topics = this.$store.getters['topics/getTopics'];
            let topicIndex = topics.findIndex(topic => topic.data.id == id);
            return topics[topicIndex];
        },
        markTopicAsRead(id) {
            this.$store.dispatch('topics/markTopicAsRead', {id});
        },
        desactivateMenu() {
            this.$store.dispatch('menu/desactivateMenu');
        },
        desactivateMenuOnPortrait() {
            if (window.innerWidth < window.innerHeight) {
                this.desactivateMenu();
            }   
        },
    }
}
</script>

<style scoped>
.right-layout-wrapper {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
}
</style>