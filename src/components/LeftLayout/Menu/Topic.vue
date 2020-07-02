<template>
     <b-container class="custom-container" v-hammer:swipe.left="onSwipeLeft">
            <b-row class="custom-row">
                <b-col cols="1" class="view-badge"> O </b-col>
                <b-col cols="6"> <span class="author-text"> {{ topic.data.author }} </span> </b-col>
                <b-col cols="4" class="created-text-container"> <span class="created-text"> {{ `${timeSince(topic.data.created)} ago` }} </span> </b-col>
            </b-row>
            <b-row class="custom-row">
                <b-col cols="3"> <img class="topic-thumbnail" :src="topic.data.thumbnail" /> </b-col>
                <b-col cols="7" class="title-text-container"><span class="title-text"> {{ topic.data.title }} </span></b-col>
            </b-row>
            <b-row>
                <b-col cols="6"> <span class="white-text"> X Dismiss Post </span> </b-col>
                <b-col cols="6" class="comments-container"> <span class="white-text"> {{ `${topic.data.num_comments} comments`}} </span> </b-col>
            </b-row>
            <hr class="custom-hr">
        </b-container>
</template>

<script>
export default {
    name: 'Topic',
    props: {
        topic: Object
    },
    methods: {
        //Param @date date to convert
        //Return the time ago from the date passed by parameter
        timeSince(date) {
        let formattedDate = new Date(date);
        let seconds = Math.floor((new Date() - formattedDate) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return `${interval} years`;
        }

        interval = Math.floor(seconds / 2592000);

        if (interval > 1) {
            return `${interval} months`;
        }

        interval = Math.floor(seconds / 86400);

        if (interval > 1) {
            return `${interval} days`;
        }

        interval = Math.floor(seconds / 3600);

        if (interval > 1) {
            return `${interval} hours`;
        }

        interval = Math.floor(seconds / 60);

        if (interval > 1) {
            return `${interval} minutes`;
        }
        
        return `${Math.floor(seconds)} seconeds`;
        },
        //If orientation is portrait will desactivate the menu
        onSwipeLeft() {
            this.desactivateMenuOnPortrait();
        },
        //If orientation is portrait will desactivate the menu
        desactivateMenuOnPortrait() {
            if (window.innerWidth < window.innerHeight) {
                this.desactivateMenu();
            }   
        },
        //Dispatch desactivateMenu action from menu module
        desactivateMenu() {
            this.$store.dispatch('menu/desactivateMenu');
        },
    }
}
</script>

<style scoped>
.custom-container {
    padding-bottom: 10px;
    padding-right: 0px;
    overflow-x: hidden;
    touch-action: pan-y !important;
}

.custom-row {
    margin-bottom: 10px;
}

.view-badge {
    color: blue;
}

.author-text {
    color: white; 
    overflow: hidden;
}

.created-text {
    color: white; 
    font-size: 12px;
}

.created-text-container {
    padding-right: 0px;
    text-align: right;
}

.topic-thumbnail {
    width: 60px; 
    height: 60px;
}

.title-text {
    color: white;
    font-size: 12px;
    display: block;
}

.title-text-container {
    padding: 0px;
}

.white-text {
    color: white;
}

.custom-hr {
    border-color: gray;
    margin-top: 10px; margin-bottom: 0px;
}

.comments-container {
    text-align: right;
    padding-right: 30px;
}
</style>