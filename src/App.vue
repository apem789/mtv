<template>
  <div class="nav">
    <router-view class="view" />
    <com-tab class="tab" />
  </div>
</template>

<script lang="ts">
import ComTab from '@/components/public/ComTab.vue'

export default {
  components: {
    ComTab,
  },
}
</script>

<style lang="scss">
.nav {
  width: 100%;
  position: relative;
  .view {
    margin-bottom: 60px;
  }
  .tab {
    position: fixed;
    bottom: 0;
    border-top: 1px solid rgb(226, 226, 226);
    z-index: 99;
  }
}
</style>
