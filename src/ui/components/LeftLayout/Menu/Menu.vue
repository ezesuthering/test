<template>
    <transition name="slide" appear>
        <div class="menu-container" >
            <div style="" class="menu-header-container"> <span class="menu-header-text"> Reddit Posts </span> </div>
            <div class="menu-content">
                <transition-group name="list">
                    <Topic :key="topic.data.id" v-for="topic in topics" :topic="topic"  />
                </transition-group>
                <intersect @enter="fetchMoreTopics">
                    <div class="load-more-intersect">
                    </div>
                </intersect>
            </div>
            <div class="menu-footer-container" > 
                <span class="menu-footer-text" @click.stop="dismissAllTopics"> <b-icon @click.stop="dismissAllTopics" class="dismiss-all-icon" icon="x-circle-fill"></b-icon> Dismiss all </span> 
            </div>
        </div>
    </transition>
</template>

<script>
import Topic from '@/ui/components/LeftLayout/Menu/Topic'
  import Intersect from 'vue-intersect'

//Menu component
export default {
    name: 'Menu',
    components: {
        Topic,
        Intersect
    },
    data: () => {
        return {
            allDismissed: false,

        }
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
        //Dispatch fetchMoreTopics action from topics module
        fetchMoreTopics() {
            if(!this.allDismissed) {
                this.$store.dispatch('topics/fetchMoreTopics', {})
            }
        },
        //Dispatch dismissAllTopics mutation from topics module
        dismissAllTopics() {
                this.allDismissed = true;
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
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 350px;
    background: #262424;
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
    overflow-y: scroll;
    position: absolute;
    height: 88vh;
    height: calc(var(--vh, 1vh) * 88);
    top: 7vh;
    top: calc(var(--vh, 1vh) * 7);
    -ms-overflow-style: none; 
    -webkit-overflow-scrolling:touch;
    scrollbar-width: none; 
    z-index: 1;
    touch-action: pan-y !important;
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
    align-self: center;
}

.dismiss-all-icon {
    color: orange;
}

.dismiss-all-icon:hover {
    cursor: pointer;
}

.menu-footer-text:hover {
    cursor: pointer;
}

.list-enter-active, .list-leave-active {
  transition: all 0.4s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform:translatex(-100%);
}

.load-more-intersect {
    height: 5px; 
    width: 350px;
}
</style>