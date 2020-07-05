<template>
     <b-container class="custom-container" @click.stop="openTopic(topic.data.id)">
            <b-row class="custom-row">
                <b-col cols="7">
                    <b-icon class="view-badge" v-if="!topic.visited" icon="circle-fill"></b-icon> 
                    <span :class="topic.visited ? 'visited' : ''" class="author-text"> {{ topic.data.author }} </span> 
                </b-col>
                <b-col cols="4" class="created-text-container"> <span class="created-text"> {{ `${timeSince(topic.data.created_utc)} ago` }} </span> </b-col>
            </b-row>
            <b-row class="custom-row">
                <b-col cols="3" class="image-container"> <img @click.stop="goToFullSizeImage(topic)" class="topic-thumbnail" @error="onBrokenThumbnail" :src="topic.data.thumbnail" /> </b-col>
                <b-col cols="7" class="title-text-container"><span :class="topic.visited ? 'visited' : ''" class="title-text"> {{ topic.data.title }} </span></b-col>
            </b-row>
            <b-row>
                <b-col cols="6"> <span class="white-text dismiss-text" @click.stop="dismissTopic(topic.data.id)"> <b-icon class="dismiss-icon" icon="x-circle" @click.stop="dismissTopic(topic.data.id)"></b-icon> Dismiss </span> </b-col>
                <b-col cols="6" class="comments-container"> <span class="comments-text"> {{ `${topic.data.num_comments} comments`}} </span> </b-col>
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
        openTopic(id) {
            this.$router.push({name: 'content', params: {id}}).catch(()=>{});
            this.desactivateMenuOnPortrait();
        },
        goToFullSizeImage(topic) {
            if(topic.data.preview) {
                    let fullImage = this.formatFullImageUrl(topic.data.preview.images[0].source.url);
                    let win = window.open(fullImage, '_blank');
                    win.focus();
                } 
        },
        formatFullImageUrl(url) {
            return url.replace('amp;s', 's').replace('amp;', '');
        },
        onBrokenThumbnail(e) {
            e.target.src = '/static/no-thumbnail.png';
        },
        //Dismiss a topic
        //Param @id topic id
        dismissTopic(id) {
            if(id == this.$route.params.id) {
                this.$router.push('/')
            }
            this.$store.dispatch('topics/dismissTopic', {id});
        },
        //Mark a topic as red
        //Param @id topic id
        markTopicAsRead(id) {
            this.$store.dispatch('topics/markTopicAsRead', {id});
        }, 
        //Param @date date to convert
        //Return the time ago from the date passed by parameter
        timeSince(date) {
        let formattedDate = new Date(date * 1000)
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

.custom-container:active {
 opacity: 0;
 transition: 0.5s;
}

.custom-row {
    margin-bottom: 10px;
}

.view-badge {
    color: #5475d2;
}

.author-text {
    color: white; 
    overflow: hidden;
}

.created-text {
    color: #c7c5c5; 
    font-size: 12px;
}

.created-text-container {
    padding-right: 0px;
    text-align: right;
}

.topic-thumbnail {
    width: 100%;
    height: 100%;
    align-self: center;
    object-fit: cover;
}

.image-container {
    display: flex;
    justify-content: center;
}

.title-text {
    color: white;
    font-size: 12px;
    display: block;
    align-self: center;
}

.title-text-container {
    padding: 0px;
    display: flex;
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

.dismiss-icon {
    color: orange;
}

.comments-text {
    color: orange;
    font-size: 12px;
}

.visited {
    color: #c7c5c5;
}

.dismiss-text:hover {
    cursor: pointer;
}

.dismiss-icon:hover {
    cursor: pointer;
}
</style>