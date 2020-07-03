<template>
    <transition name="slide" appear>
        <div class="menu-container">
            <div style="" class="menu-header-container"> <span class="menu-header-text"> Reddit Posts </span> </div>
        <div class="menu-content">
            <transition-group name="list">
            <Topic :key="topic.data.id" v-for="topic in topics" :topic="topic"  />
            </transition-group>
        </div>
        <div class="menu-footer-container" @click.stop="dismissAllTopics"> <span class="menu-footer-text"> <b-icon class="dismiss-all-icon" icon="x-circle-fill"></b-icon> Dismiss all </span> </div>
        </div>
    </transition>
</template>

<script>
import Topic from '@/ui/components/LeftLayout/Menu/Topic'

//Menu component
export default {
    name: 'Menu',
    components: {
        Topic
    },
    computed: {
        topics: {
            get() {
                return this.$store.getters['topics/getTopics'];
            },
            set(value) {
                this.$store.commit('topics/setTopics', value);
            }
        }
    },
    methods: {
        //Dispatch dismissAllTopics mutation from topics module
        dismissAllTopics() {
                this.$store.dispatch('topics/dismissAllTopics');
        }
    }
   
}
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 0.3s;
}

.slide-enter {
  transform: translate(-100%, 0);
}

.slide-leave{
  transform:translatex(-100%);
}

.slide-leave-to {
  transform: translate(-100%, 0);
}

.menu-container {
    padding-top: 10px;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 350px;
    background: black;
    position: fixed;
    top: 0;
    left: 0;
}

.menu-header-container {
    display: flex;
    justify-content: center;
    height: 6vh;
    height: calc(var(--vh, 1vh) * 6);
    position: absolute;
    background: black;
    z-index: 10;
    width: 100%;
}

.menu-header-text {
    color: white;
    font-size: 20px;
    font-weight: 500;
    align-self: center;
}

.menu-content {
    overflow-y: auto;
    position: absolute;
    height: 88vh;
    height: calc(var(--vh, 1vh) * 88);
    top: 7vh;
    top: calc(var(--vh, 1vh) * 7);
    -ms-overflow-style: none; 
    scrollbar-width: none; 
}

.menu-content::-webkit-scrollbar {
  display: none;
}

.menu-footer-container {
    height: 6vh;
    height: calc(var(--vh, 1vh) * 6);
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    width: 100%;
    background: black;
    z-index: 10;
}

.menu-footer-text {
    color: white; 
    margin-top: 7px;
    align-self: center;
}

.dismiss-all-icon {
    color: orange;
}

.list-enter-active, .list-leave-active {
  transition: all 0.4s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform:translatex(-100%);
}
</style>