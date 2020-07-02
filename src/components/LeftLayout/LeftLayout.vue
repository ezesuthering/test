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
            this.desactivateMenuOnPortrait();
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
        //If orientation is landscape will activate the menu
        activateMenuOnLandscape() {
            if(window.innerWidth > window.innerHeight) {
                this.activateMenu();
            }
        },
        //If orientation is portrait will desactivate the menu
        desactivateMenuOnPortrait() {
            if (window.innerWidth < window.innerHeight) {
                this.desactivateMenu();
            }   
        },
        //Method for listener, will activate the menu if the app is oriented landscape
        handleResize() {
            this.activateMenuOnLandscape();
            this.recalculateUnitsInViewport();
        },
        //Get viewport height and multiply it by 1% to get actual value for vh unit.
        recalculateUnitsInViewport() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    },
    //Setup listener on created
    created() {
        this.activateMenu();
        this.recalculateUnitsInViewport();
        window.addEventListener('resize', this.$_.debounce(this.handleResize, 200));
        window.addEventListener('orientationchange', this.$_.debounce(this.handleOrientation, 200));
    },
    //Remove listeners on before destroyed
    beforeDestroy: function () {
        window.removeEventListener('resize',  this.$_.debounce(this.handleResize, 200));
        window.removeEventListener('orientationchange',  this.$_.debounce(this.handleOrientation, 200));
    }
}
</script>

<style scoped>

</style>