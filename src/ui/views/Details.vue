<template>
<div :class="orientationPortrait ? 'details-container-portrait' : 'details-container-landscape'">
    <RightLayout />
</div>    
</template>

<script>
import RightLayout from '@/ui/components/RightLayout/RightLayout'

export default {
    name: 'Details',
    components: {
        RightLayout
    },
    data: () => {
        return {
            orientationPortrait: false
        }
    },
    methods: {
    //Check if orientation is portrait
    handleResize() {
            this.orientationPortrait = window.innerWidth < window.innerHeight;
    },
    //Method for listener, will activate the menu
    handleOrientation() {
            this.orientationPortrait = window.innerWidth < window.innerHeight;
        }
    },
    //Setup listener on created
    created() {
        this.handleResize();
        window.addEventListener('resize', this.$_.debounce(this.handleResize, 200));
        window.addEventListener('orientationchange', this.handleOrientation);
    },
    //Remove listeners on before destroyed
    beforeDestroy: function () {
        window.removeEventListener('resize',  this.$_.debounce(this.handleResize));
        window.removeEventListener('orientationchange',  this.handleOrientation);
    }
}
</script>

<style scoped>
.details-container-landscape {
    width: calc(100% - 350px);
}

.details-container-portrait {
    width: 100%
}
</style>