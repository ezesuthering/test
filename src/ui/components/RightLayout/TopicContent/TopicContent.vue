<template>
    <b-container class="right-layout-container">
        <b-row>
            <b-col cols="12"> <span class="topic-author"> {{ topic.data.author }}</span> </b-col> 
        </b-row>
         <b-row> 
             <b-col cols="12" class="topic-flex-content-container"> 
                 <img :height="topic.data.thumbnail_height ? topic.data.thumbnail_height : '200'" :width="topic.data.thumbnail_width ? topic.data.thumbnail_width : '200'" @error="onBrokenThumbnail" :src="topic.data.thumbnail" /> 
            </b-col> 
        </b-row>
        <b-row> 
            <b-col cols="12" class="topic-flex-content-container"> 
                <span> {{ topic.data.title }} </span> 
            </b-col> 
        </b-row>
    </b-container>
</template>

<script>
//TopicContent Component
export default {
    name: 'TopicContent',
    props: {
        topic: Object
    },
    methods: {
        onBrokenThumbnail(e) {
            e.target.src = '/static/no-thumbnail.png';
        },
    }
}
</script>


<style scoped>
.right-layout-container {
    z-index: 0;
    padding: 25px;
}

.topic-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    /* max-height: 70vh;
    max-height: calc(var(--vh, 1vh) * 70); */

}

.topic-flex-content-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.topic-author {
    font-weight: bold;
}
</style>