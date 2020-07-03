<template>
  <div id="app">
    <div class="app-container" v-if="!loading">
    <!-- Left layout with menu -->
    <LeftLayout />
    <router-view/>  <!-- Right layout, Content view feed with post id -->
    </div>
   <div v-else class="loading-section-container">
    <b-spinner class="loading-spinner"></b-spinner>
  </div>
  </div>
</template>

<script>
//App component
import LeftLayout from '@/ui/components/LeftLayout/LeftLayout'

export default {
  components: {
    LeftLayout
  },
  computed: {
    loading: {
      get() {
        return this.$store.getters['config/getAppLoading']
      },
      set(val) {
        this.$store.commit('config/setAppLoading', val);
      }
    }
  },
  methods: {
    //Get viewport height and multiply it by 1% to get actual value for vh unit.
        recalculateUnitsInViewport() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
  },
  //On created: Refresh config file values
  //Fetch topics from Reddit API
  //Recalculate units in viewport
  //Set listener to recalculate units in viewport on resize
  created() {
    this.$store.dispatch('config/refreshRedditApiBaseUrl');
    this.loading = true;
    this.$store.dispatch('topics/fetchTopics', { limit: 50 }).then(() => { this.loading = false; })
    this.recalculateUnitsInViewport();
    window.addEventListener('resize', this.$_.debounce(this.recalculateUnitsInViewport, 200));
  },
  //Remove event listener for 'resize'
  beforeDestroy() {
    window.removeEventListener('resize', this.$_.debounce(this.recalculateUnitsInViewport, 200));
  }
}
</script>

<style scoped>
.loading-section-container {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    justify-content: center;
}

.app-container {
  display: flex;
}

.loading-spinner {
  align-self: center;
}
</style>