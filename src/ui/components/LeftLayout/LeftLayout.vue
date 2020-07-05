<template>
    <div :class=" orientationPortrait ? 'left-layout-container-portrait' : 'left-layout-container-landscape'">
        <Threshold v-show="!active" v-hammer:swipe.right="onSwipeRight" />
        <Menu v-show="active"  />
    </div>
</template>

<script>
import Threshold from '@/ui/components/LeftLayout/Menu/Threshold'
import Menu from '@/ui/components/LeftLayout/Menu/Menu'

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
        Threshold,
        Menu
    },
    data: () => {
        return {
            orientationPortrait: false
        }
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
            this.orientationPortrait = window.innerWidth < window.innerHeight;
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
            this.orientationPortrait = window.innerWidth < window.innerHeight;
            this.activateMenuOnLandscape();
        }
    },
    //Setup listener on created
    created() {
        this.activateMenu();
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
.left-layout-container-landscape {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 350px;
    z-index: 1;
}

.left-layout-container-portrait {
    width: 0px;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    z-index: 1;
}
</style>