<template>
  <div class="page-detail">
    <span hidden>视频详情</span>
    <span>视频详情</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'detail',
  setup() {
    const router = useRouter()
    const route = useRoute()
  },
})
</script>

<style lang="scss" scoped></style>
