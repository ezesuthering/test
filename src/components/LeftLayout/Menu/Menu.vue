<template>
    <transition name="slide" appear>
        <div class="menu-container">
            <div style="" class="menu-header-container"> <span class="menu-header-text"> Reddit Posts </span> </div>
        <div class="menu-content">
            <Topic v-for="topic in topics" :topic="topic" :key="topic" />
        </div>
        <div class="menu-footer-container"> <span class="menu-footer-text"> DISMISS ALL </span> </div>
        </div>
    </transition>
</template>

<script>
import data from './../data';
import Topic from '@/components/LeftLayout/Menu/Topic'

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
    created() {
        this.$store.dispatch('topics/loadTopics', data.data.children);
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
    width: 350px;
    background: black;
    position: fixed;
    top: 0;
    left: 0;
}

.menu-header-container {
    display: flex;
    justify-content: center;
    height: 5vh;
    position: absolute;
    background: black;
    z-index: 10;
    width: 100%;
}

.menu-header-text {
    color: white;
    font-size: 20px;
    font-weight: 500;
}

.menu-content {
    overflow-y: auto;
    position: absolute;
    height: 90vh;
    top: 6vh;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
}

.menu-content::-webkit-scrollbar {
  display: none;
}

.menu-footer-container {
    height: 5vh;
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
}

</style>