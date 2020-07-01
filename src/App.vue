<template>
  <div id="app">
    <!-- Left layout with menu -->
    <LeftLayout />
    <router-view/>  <!-- Right layout, Content view feed with post id -->
  </div>
</template>

<script>
//App component
import LeftLayout from '@/components/LeftLayout/LeftLayout'

export default {
  components: {
    LeftLayout
  }
}
</script>
