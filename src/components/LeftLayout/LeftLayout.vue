<template>
<div class="left-layout-container">
    <Treshold v-show="!active" v-hammer:swipe.right="onSwipeRight" />
    <Menu v-show="active" v-hammer:swipe.left="onSwipeLeft" />
</div>
</template>

<script>
import Treshold from '@/components/LeftLayout/Menu/Treshold'
import Menu from '@/components/LeftLayout/Menu/Menu'

//LeftLayout component
export default {
    name: 'LeftLayout',
    computed: {
        //Computed property, on sync with active value of menu module
        active: {
            get() {
                return this.$store.getters['menu/getActive'];
            },
            set(value) {
                this.$store.commit('menu/setActive', value)
            }
        }
    },
    components: {
        Treshold,
        Menu
    },
    methods: {
        //Activate the menu
        onSwipeRight() {
            this.activateMenu();
        },
        //If orientation is portrait will desactivate the menu
        onSwipeLeft() {
            if (window.innerWidth < window.innerHeight) {
                this.desactivateMenu();
            }   
        },
        //Dispatch activateMenu action from menu module
        activateMenu() {
            this.$store.dispatch('menu/activateMenu');
        },
        //Dispatch desactivateMenu action from menu module
        desactivateMenu() {
            this.$store.dispatch('menu/desactivateMenu');
        },
        //Method for listener, will activate the menu
        handleOrientation() {
            this.activateMenu();
        },
        //Method for listener, will activate the menu if the app resized to a width > 1024
        handleResize() {
            if(window.innerWidth > 1024) {
                this.activateMenu();
            }
        },
    },
    //Setup listener on created
    created() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('orientationchange', this.handleOrientation);
    },
    //Remove listeners on before destroyed
    beforeDestroy: function () {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('orientationchange', this.handleOrientation);
    }
}
</script>

<style scoped>
.left-layout-container {

}
</style>