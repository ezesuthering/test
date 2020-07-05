<template>
    <div class="threshold"></div>
</template>

<script>
//Treshold component
export default {
    name: 'Threshold'
}
</script>

<style scoped>
.threshold {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100px;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
}
</style>